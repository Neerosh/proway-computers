import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe,provideNgxMask } from 'ngx-mask'

@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContatoRoutingModule,
    NgxMaskDirective, NgxMaskPipe
  ],
  providers: [provideNgxMask()]
})



export class ContatoModule { }
