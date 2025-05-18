import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { BaseGenericoService } from '../../../core/services/base-generico.service';
import { ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  public formLogin = new UntypedFormGroup({
    email: new UntypedFormControl(null, [Validators.required, Validators.email]),
    password: new UntypedFormControl(null, [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private router: Router,
    private http: BaseGenericoService
  ) { }

  ngOnInit(): void {
  }


  signIn() {

    // Mark all controls as touched to trigger validation
    this.formLogin.markAllAsTouched();

    if (this.formLogin.valid) {

      const loginDto = {
        email: this.formLogin.value.email,
        password: this.formLogin.value.password
      }

      this.http.post('auth/login', { ...loginDto }).subscribe((resposta: any) => {

        localStorage.setItem('token', resposta.token);

        this.router.navigate(['/admin']);
      });
    } else {
      console.log('Form is invalid');
    }

  }

}
