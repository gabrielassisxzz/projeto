import { Route } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';

export const routes: Route[] = [
    { path: '', component: CadastroComponent },
    { path: 'confirmacao', component: ConfirmacaoComponent}
];
