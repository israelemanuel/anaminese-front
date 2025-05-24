import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInput, MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { BaseGenericoService } from '../../../core/services/base-generico.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ConfirmDeleteModalComponent } from '../../../core/components/confirm-delete-modal.component';
import { MatDialog } from '@angular/material/dialog';

import moment from 'moment';

@Component({
    selector: 'app-dashboard',
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        RouterLink,
        ReactiveFormsModule,
        FormsModule,
        MatPaginatorModule,
        ConfirmDeleteModalComponent,
    ],

    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

    public lstAnamineses: any[] = [];

    public filteredAnamineses: any[] = [];
    public searchTerm: string = '';
    public isLoaded: boolean = false;
    public pageSize: number = 10;
    public pageIndex: number = 0;

    constructor(
        private router: Router,
        private http: BaseGenericoService,
        private dialog: MatDialog
    ) { }

    ngOnInit(): void {
        this.filteredAnamineses = this.lstAnamineses;

        this.carregarAnamineses();
    }

    filterAnamineses() {
        const term = this.searchTerm?.toLowerCase() || '';
        const termDigits = term.replace(/\D/g, '');
        this.filteredAnamineses = this.lstAnamineses.filter(item =>
            (item.nome && item.nome.toLowerCase().includes(term)) ||
            (item.cpf && (
                item.cpf.replace(/\D/g, '').includes(termDigits) ||
                item.cpf.toLowerCase().includes(term)
            ))
        );
        this.pageIndex = 0; // Sempre volta para a primeira página ao filtrar
    }


    carregarAnamineses() {

        this.isLoaded = false;
        this.http.get('api/v1/prontuarios').subscribe(resposta => {

            this.isLoaded = true;


            //      {
            //     nome: 'Ana Clara Souza',
            //     cpf: '123.456.789-01',
            //     idade: '8',
            //     responsavel_1: 'Maria Souza',
            //     responsavel_2: 'Carlos Souza',
            //     data: '01/10/2023',
            // }

            this.lstAnamineses = resposta.map((item: any) => {
                let data: any = this.extrairValoresCampos(item.dados_personalizados);
                return {
                    ...item,
                    ...data,
                    nome: data.nome_identificacao_crianca,
                    cpf: data.cpf_identificacao_crianca,
                    idade: data.idade_identificacao_crianca,
                    responsavel_1: data.nome_pai_dados_familiares,
                    responsavel_2: data.nome_mae_dados_familiares,
                }
            });
            this.filteredAnamineses = [...this.lstAnamineses];

            console.log(this.lstAnamineses);

        })
    }


    extrairValoresCampos(formArray: any[]): Record<string, any> {
        const result: Record<string, any> = {};

        formArray.forEach(section => {
            section.areas.forEach((area: any) => {
                area.fields.forEach((field: any) => {
                    result[field.name] = field.value;
                });
            });
        });

        return result;
    }

    get pagedAnamineses() {
        const start = this.pageIndex * this.pageSize;
        return this.filteredAnamineses.slice(start, start + this.pageSize);
    }

    onPageChange(event: any) {
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
    }

    openDeleteDialog(item: any) {
        const dialogRef = this.dialog.open(ConfirmDeleteModalComponent, {
            data: { message: `Deseja realmente excluir o registro de ${item.nome || 'registro'}?` },
        });
        dialogRef.componentInstance.confirm.subscribe(() => {
            this.deleteAnamnese(item);
            dialogRef.close();
        });
        dialogRef.componentInstance.cancel.subscribe(() => {
            dialogRef.close();
        });
    }

    deleteAnamnese(item: any) {
        // Implemente aqui a lógica de exclusão (chamada à API, etc)
        // Exemplo:
        // this.http.delete(`api/v1/prontuarios/${item.id}`).subscribe(() => this.carregarAnamineses());
        console.log('Excluído:', item);
    }

}
