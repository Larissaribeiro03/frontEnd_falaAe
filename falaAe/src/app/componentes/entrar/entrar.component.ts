import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { PlatformDetectorService } from '../plataform-detector/plataform-detector.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit{

  loginForm!: FormGroup;
  @ViewChild('emailInput') emailInput!: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
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
    this.authService.authenticate(email, senha).then((data) => {
      if (data['id'] === undefined ) {
          alert('Usuário inválido');
      }
      else {
        const id = data.id;
        const nickname = data.nickname;
        localStorage.setItem("id", id);
        localStorage.setItem("nickname", nickname);
        this.router.navigate(['/listarPostagem']);
      }

    })
  }

}
