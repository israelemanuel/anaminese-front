import { Injectable } from "@angular/core";
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError, map, startWith, take } from "rxjs/operators";
import { environment } from "../../../environments/environment.development";

interface IOptions {
  skipInterceptor: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BaseGenericoService {

  protected api_serve: string = environment.uri_api;
  protected httpOptions: any = null

  constructor(
    private http: HttpClient
  ) { }


  get(url: string, resource: { [key: string]: any } = {}, options = { skipInterceptor: false }): Observable<any> {
    const urlGet = `${this.api_serve}/${url}`;

    // Usa HttpParams para os parâmetros de query
    let params = new HttpParams();
    if (resource && Object.keys(resource).length > 0) {
      Object.entries(resource)
        .filter(([_, v]) => v !== null && v !== undefined)
        .forEach(([k, v]) => {
          params = params.set(k, typeof v === 'object' ? JSON.stringify(v) : String(v));
        });
    }

    // Monta o header Authorization com o token do localStorage
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + (localStorage.getItem('token') || '')
    });
    if (options.skipInterceptor) {
      headers = headers.set('Skip-Interceptor', 'true');
    }

    const httpOptions: any = {
      params,
      headers
    };

    return this.http.get(urlGet, httpOptions).pipe(
      take(1),
      catchError(this.handleError)
    );
  }

  post(url: String, resource: any): Observable<any> {

    this.httpOptions = {
      headers: !environment.production ? new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
      }) : ''
    };

    for (let x in resource) {
      if (resource[x] === undefined) {
        delete (resource[x])
      }
    }
    return this.http.post(this.api_serve + '/' + url, resource, this.httpOptions).pipe(
      take(1),
      catchError(this.handleError)
    )
  }

  postFile(url: String, resource: any): Observable<any> {

    this.httpOptions = {
      headers: !environment.production ? new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
      }) : '',
      responseType: 'blob' as 'json' // Adicione esta linha
    };

    for (let x in resource) {
      if (resource[x] === undefined) {
        delete (resource[x])
      }
    }
    return this.http.post(this.api_serve + '/' + url, resource, this.httpOptions).pipe(
      take(1),
      catchError(this.handleError)
    )
  }

  postLoad(url: String, resource: any): Observable<any> {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
      })
    };

    for (let x in resource) {
      if (resource[x] === undefined) {
        delete (resource[x])
      }
    }

    return this.http.post(this.api_serve + '/' + url, resource, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }),
      reportProgress: true,
      observe: "events"
    }).pipe(map(event => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          const progress = event.total ? Math.round(100 * event.loaded / event.total) : 0;
          return { status: 'progress', message: progress };
          break;

        case HttpEventType.Response:
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
          break;
      }
    }))
  }

  put(url: string, resource?: any): Observable<any> {

    this.httpOptions = {
      headers: !environment.production ? new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
      }) : ''
    };

    for (let x in resource) {
      if (resource[x] === undefined) {
        delete (resource[x])
      }
    }

    return this.http.put(this.api_serve + '/' + url, resource, this.httpOptions).pipe(
      take(1),
      catchError(this.handleError)
    )
  }

  delete(url: string, identificador?: string): Observable<any> {

    this.httpOptions = {
      headers: !environment.production ? new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
      }) : ''
    };

    let urlDel = `${this.api_serve}${url}`;

    if (identificador) {
      urlDel = `${this.api_serve}${url}/${identificador}`;
    }

    return this.http.delete(urlDel, this.httpOptions).pipe(
      take(1),
      catchError(this.handleError)
    )
  }

  // PROTECTED METHODS

  protected handleError(error: any): Observable<any> {
    return throwError(() => error);
  }

}
