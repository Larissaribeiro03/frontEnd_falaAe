import { CadastrarComponent } from './../cadastrar/cadastrar.component';
import { RouterModule } from '@angular/router';
import { AlertasModule } from './../alertas/alertas.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EntrarComponent } from './entrar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        EntrarComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AlertasModule,
        RouterModule,
        FormsModule
      ]
})
export class HomeModule { }
