import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  //Atributos
  nome = signal<string>('');
  perfil = signal<string>('');

  //Evento do angular que é executado
  //Sempre que a página é aberta
  ngOnInit() {
    //ler os dados do usuário salvo na sessão
    const json = sessionStorage.getItem("usuario");
    //converter os dados em formato Json
    const usuario = JSON.parse(json as string);
    //Capturar o nome e o perfil 
    this.nome.set(usuario.nome);
    this.perfil.set(usuario.perfil);

  }

  //Função para logout do usuário
  logout() {
    if(confirm('Deseja realmente sair do sistema?')) {
      //Apagar os dados da session storage
      sessionStorage.removeItem('usuario');
      //Redirecionar de volta para a página de login
      location.href = '/';

    }
  }

}
