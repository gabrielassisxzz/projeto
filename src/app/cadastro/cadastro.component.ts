import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  imports: [ReactiveFormsModule]
})
export class CadastroComponent {
  constructor(private router: Router) {}
  comprar() {
    this.router.navigate(['/confirmacao']);
  }
}