import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authRoutingModule } from './auth-routing.module';
import { RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterOutlet,
    authRoutingModule
  ]
})
export class AuthModule { }
