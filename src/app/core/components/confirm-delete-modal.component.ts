import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-confirm-delete-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <div class="p-6 flex flex-col gap-4 min-w-[300px]">
      <h2 class="text-lg font-bold">Confirmação</h2>
      <p>{{ message || 'Tem certeza que deseja excluir este registro?' }}</p>
      <div class="flex gap-2 justify-end">
        <button mat-stroked-button color="primary" (click)="onCancel()">Cancelar</button>
        <button mat-raised-button color="warn" (click)="onConfirm()">Excluir</button>
      </div>
    </div>
  `,
  styles: [``]
})
export class ConfirmDeleteModalComponent {
  @Input() message?: string;
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm() {
    this.confirm.emit();
  }
  onCancel() {
    this.cancel.emit();
  }
}
