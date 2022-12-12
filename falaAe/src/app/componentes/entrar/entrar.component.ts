import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit{

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  login() {
    const email = this.loginForm.get('email')?.value;
    const senha = this.loginForm.get('senha')?.value;
    console.log(email);
    console.log(senha);

    this.authService
    .authenticate(email, senha)
    .subscribe(
      () => console.log('Autenticado'),
      err => {
        console.log(err);
        this.loginForm.reset();
        alert('Senha inválida.');
      }
    );
  }

}
