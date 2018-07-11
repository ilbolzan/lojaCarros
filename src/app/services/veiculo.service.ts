import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { take, map } from '../../../node_modules/rxjs/operators';
import { ICategoria, Categoria } from '../shared/models/categoria';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  public msg = 'hello world';
  constructor(private _httpClient: HttpClient) { }

  getCategoriasVeiculos(): Observable<Categoria[]> {
    return this._httpClient.get<Categoria[]>('http://localhost:3000/categorias')
      .pipe(
        take(1),
      map((categorias: Categoria[]) => {
        return categorias.map(categoria => new Categoria(categoria));
      }));
  }
}
