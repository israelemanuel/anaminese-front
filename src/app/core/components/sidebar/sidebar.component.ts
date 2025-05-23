import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    RouterLink,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
