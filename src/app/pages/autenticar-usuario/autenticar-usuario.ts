import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-autenticar-usuario',
  imports: [
    RouterLink,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './autenticar-usuario.html',
  styleUrl: './autenticar-usuario.css',
})
export class AutenticarUsuario {

  //injeção de dependência
private http = inject(HttpClient);

  //mensagens
  mensagemErro = signal<string>('');

  //Criar a estrutura do formulário
  formulario = new FormGroup({
    email : new FormControl('', [Validators.required]),
    senha : new FormControl('', [Validators.required]),
  });

  //Função para realizar a autenticação
  autenticar() {
    
    //Fazendo uma requisição HTTP POST para o endpoint de autenticação
    this.http.post('http://localhost:8082/api/v1/usuario/autenticar', this.formulario.value)

    .subscribe({
      next: (data) => { //Capturando a resposta de sucesso
        console.log(data);
        alert('Sucesso! Você será redirecionado para a agenda!'); // Provisório!!!
      },
      error: (e) => { //Capturando a resposta de erro
        this.mensagemErro.set(e.error);
      }
    });

  }

}
