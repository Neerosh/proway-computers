import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit{

  formContato = this.formBuilder.group({
    nome: ["",[
      Validators.minLength(3),
      Validators.required
    ]],
    assunto: ["",[
      Validators.minLength(10),
      Validators.required
    ]],
    telefone: ["",[
      Validators.minLength(11),
      Validators.required
    ]],
    email: ["",[
      Validators.email,
      Validators.required
    ]],
    mensagem: ["", [
      Validators.minLength(10),
      Validators.required
    ]]
  })

  constructor(
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    
  }

  enviarFormulario() {
    this.formContato.reset();
    alert("A mensagem foi enviada");
  }
}
