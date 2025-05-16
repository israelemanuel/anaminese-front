import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-form-print',
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './form-print.component.html',
  styleUrl: './form-print.component.scss'
})
export class FormPrintComponent {

  printDocument(): void {
    const printContents = document.getElementById('documento')?.innerHTML;
    const headContents = document.head.innerHTML;
    if (printContents) {
      const printWindow = window.open('', '', 'height=600,width=800');
      if (printWindow) {
        printWindow.document.write('<html><head>' + headContents + '<title>Impressão</title></head><body>');
        printWindow.document.write(printContents);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
      }
    }
  }

}
