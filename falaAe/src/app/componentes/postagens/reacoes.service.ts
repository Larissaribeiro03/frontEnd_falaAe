import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reactions } from './postagem/reactions';

@Injectable({
  providedIn: 'root'
})
export class ReactionService {

  private readonly API = 'http://localhost:8080/reactions'

  constructor(private http: HttpClient) { }

  listar(): Observable<Reactions[]> {
    return this.http.get<Reactions[]>(this.API)
  }

  criarReactions(reactions: Reactions): Observable<Reactions>{
    return this.http.post<Reactions>(this.API, reactions)
  }

  editar(reactions: Reactions): Observable<Reactions> {
    const url = `${this.API}/${reactions.id}`
    return this.http.put<Reactions>(url, reactions)
  }

  excluir(id: number): Observable<Reactions>{
    const url = `${this.API}/${id}`
    return this.http.delete<Reactions>(url)
  }

  buscarPorId(id: number): Observable<Reactions>{
    const url = `${this.API}/${id}`
    return this.http.get<Reactions>(url)
  }


}
