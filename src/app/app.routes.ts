import { Routes } from '@angular/router';
import { AutenticarUsuario } from './pages/autenticar-usuario/autenticar-usuario';
import { CadastrarUsuario } from './pages/cadastrar-usuario/cadastrar-usuario';
import { Dashboard } from './pages/dashboard/dashboard';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: "pages/autenticar-usuario", //rota de navegação
        component: AutenticarUsuario //classe do componente 
    },
    {
        path: "pages/cadastrar-usuario", //rota de navegação
        component: CadastrarUsuario //classe do componente
    },

    {
        path : "pages/dashboard", //rota de navegação
        component: Dashboard, //Classe de componente
        canActivate: [AuthGuard] //Aplicar o guardião de autenticação
    },
    {
        path: "", //rota de navegação para página inicial
        redirectTo: "/pages/autenticar-usuario", // redirecionamneto
        pathMatch: "full" //correspondência completa da rota
    }
];
