import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
// import { ReplacePipe } from '../../../shared/pipes/replace.pipe';

import form from './relatorio-cru';

@Component({
  selector: 'app-form',
  imports: [
    CommonModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    // ReplacePipe
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  standalone: true
})
export class FormComponent implements AfterViewInit {
  public identification: boolean = false;
  public form: any = [];
  public isMobile: boolean = false;

  constructor() {
    this.form = this.preprocessForm(form);
  }

  preprocessForm(form: any[]): any[] {
    return form.map(section => ({
      ...section,
      sectionClean: this.cleanString(section.section)
    }));
  }

  cleanString(str: string): string {
    if (!str) return '';
    // Remove acentos e caracteres especiais da língua portuguesa
    let s = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    // Substitui cedilha
    s = s.replace(/ç/g, 'c').replace(/Ç/g, 'C');
    // Substitui ã/Ã, õ/Õ, â/Â, ê/Ê, ô/Ô, á/Á, é/É, í/Í, ó/Ó, ú/Ú, à/À, ü/Ü, ñ/Ñ, etc.
    s = s.replace(/ã/g, 'a').replace(/Ã/g, 'A');
    s = s.replace(/õ/g, 'o').replace(/Õ/g, 'O');
    s = s.replace(/â/g, 'a').replace(/Â/g, 'A');
    s = s.replace(/ê/g, 'e').replace(/Ê/g, 'E');
    s = s.replace(/ô/g, 'o').replace(/Ô/g, 'O');
    s = s.replace(/á/g, 'a').replace(/Á/g, 'A');
    s = s.replace(/é/g, 'e').replace(/É/g, 'E');
    s = s.replace(/í/g, 'i').replace(/Í/g, 'I');
    s = s.replace(/ó/g, 'o').replace(/Ó/g, 'O');
    s = s.replace(/ú/g, 'u').replace(/Ú/g, 'U');
    s = s.replace(/à/g, 'a').replace(/À/g, 'A');
    s = s.replace(/ü/g, 'u').replace(/Ü/g, 'U');
    s = s.replace(/ñ/g, 'n').replace(/Ñ/g, 'N');
    // Remove qualquer outro caractere especial e espaços
    s = s.replace(/[^a-zA-Z0-9]/g, '');
    return s;
  }

  ngAfterViewInit(): void {
    this.getDisplayResolution();
  }

  getDisplayResolution() {
    const width = window.innerWidth;
    if (width <= 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  getForm() {
    // ...existing code...
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.getDisplayResolution();
  }
}
