import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(email: String, senha: String) {
    return this.http.post(API + '/user/validarSenha',  {email, senha} )
  }
}
