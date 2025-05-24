import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInput, MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

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
    FormsModule
  ],

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  public lstAnamineses: any[] = [
    {
      nome: 'Ana Clara Souza',
      cpf: '123.456.789-01',
      idade: '8',
      responsavel_1: 'Maria Souza',
      responsavel_2: 'Carlos Souza',
      data: '01/10/2023',
    },
    {
      nome: 'Bruno Henrique Lima',
      cpf: '234.567.890-12',
      idade: '10',
      responsavel_1: 'Fernanda Lima',
      responsavel_2: 'Roberto Lima',
      data: '05/10/2023',
    },
    {
      nome: 'Carolina Dias',
      cpf: '345.678.901-23',
      idade: '7',
      responsavel_1: 'Patrícia Dias',
      responsavel_2: 'Eduardo Dias',
      data: '10/10/2023',
    },
    {
      nome: 'Daniel Alves',
      cpf: '456.789.012-34',
      idade: '9',
      responsavel_1: 'Juliana Alves',
      responsavel_2: 'Marcelo Alves',
      data: '15/10/2023',
    },
    {
      nome: 'Eduarda Martins',
      cpf: '567.890.123-45',
      idade: '11',
      responsavel_1: 'Simone Martins',
      responsavel_2: 'Paulo Martins',
      data: '20/10/2023',
    },
    {
      nome: 'Felipe Rocha',
      cpf: '678.901.234-56',
      idade: '8',
      responsavel_1: 'Luciana Rocha',
      responsavel_2: 'André Rocha',
      data: '25/10/2023',
    },
    {
      nome: 'Gabriela Silva',
      cpf: '789.012.345-67',
      idade: '12',
      responsavel_1: 'Renata Silva',
      responsavel_2: 'João Silva',
      data: '30/10/2023',
    },
    {
      nome: 'Henrique Castro',
      cpf: '890.123.456-78',
      idade: '7',
      responsavel_1: 'Tatiane Castro',
      responsavel_2: 'Ricardo Castro',
      data: '03/11/2023',
    },
    {
      nome: 'Isabela Fernandes',
      cpf: '901.234.567-89',
      idade: '9',
      responsavel_1: 'Aline Fernandes',
      responsavel_2: 'Marcos Fernandes',
      data: '08/11/2023',
    },
    {
      nome: 'João Pedro Santos',
      cpf: '012.345.678-90',
      idade: '10',
      responsavel_1: 'Cristina Santos',
      responsavel_2: 'Pedro Santos',
      data: '13/11/2023',
    },
    {
      nome: 'Larissa Oliveira',
      cpf: '321.654.987-00',
      idade: '8',
      responsavel_1: 'Sandra Oliveira',
      responsavel_2: 'Rafael Oliveira',
      data: '18/11/2023',
    },
    {
      nome: 'Matheus Costa',
      cpf: '432.765.098-11',
      idade: '11',
      responsavel_1: 'Débora Costa',
      responsavel_2: 'Fábio Costa',
      data: '23/11/2023',
    },
    {
      nome: 'Natália Ribeiro',
      cpf: '543.876.109-22',
      idade: '7',
      responsavel_1: 'Viviane Ribeiro',
      responsavel_2: 'Sérgio Ribeiro',
      data: '28/11/2023',
    },
    {
      nome: 'Otávio Mendes',
      cpf: '654.987.210-33',
      idade: '12',
      responsavel_1: 'Elaine Mendes',
      responsavel_2: 'Gustavo Mendes',
      data: '03/12/2023',
    },
  ]

  public filteredAnamineses: any[] = [];
  public searchTerm: string = '';
  public isLoaded: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.filteredAnamineses = this.lstAnamineses;
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
  }

}
