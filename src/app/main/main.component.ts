import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../core/components/header/header.component';
import { SidebarComponent } from '../core/components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  @ViewChild('customBody') customBody!: ElementRef;
  customBodyWidth: number = 0;

  ngAfterViewInit(): void {
    this.customBodyWidth = this.customBody.nativeElement.clientWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.customBodyWidth = this.customBody.nativeElement.clientWidth;
  }

}
