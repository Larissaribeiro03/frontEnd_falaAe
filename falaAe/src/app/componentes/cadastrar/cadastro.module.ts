import { RouterModule } from '@angular/router';
import { AlertasModule } from './../alertas/alertas.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastrarComponent } from './cadastrar.component';

@NgModule({
    declarations: [ CadastrarComponent ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AlertasModule,
        RouterModule
      ],
    exports: [
        CommonModule,
        CadastrarComponent
    ]
})
export class CadastroModule { }