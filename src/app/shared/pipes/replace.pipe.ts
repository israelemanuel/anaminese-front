import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace',
  standalone: true
})
export class ReplacePipe implements PipeTransform {
  transform(value: string, search: string, replacement: string): string {
    if (!value) return '';
    // Remove acentos e caracteres especiais
    value = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    // Substitui caracteres especiais como ç
    value = value.replace(/ç/g, 'c').replace(/Ç/g, 'C');
    // Aplica o replace padrão
    const re = new RegExp(search, 'g');
    return value.replace(re, replacement);
  }
}
