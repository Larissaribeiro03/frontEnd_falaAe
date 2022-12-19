import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './postagem/postagem';
import { Observable } from 'rxjs';
import { Reactions } from './postagem/reaction';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:8080/post'

  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API)
  }

  criar(pensamento: Pensamento): Observable<Pensamento>{
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  criarReaction(idPost: number, tipoReaction: number, idUser: number): Observable<Reactions> {
    const url = `${this.API}/${idPost}/${tipoReaction}/${idUser}`
    return this.http.post<Reactions>(url, null)
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }

  excluir(id: number): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: number): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }


}
