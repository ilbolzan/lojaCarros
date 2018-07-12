import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { take, map } from '../../../node_modules/rxjs/operators';
import { Categoria } from '../shared/models';
import { HttpBase } from './http-base';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends HttpBase {
  public msg = 'hello world';
  constructor(private _httpClient: HttpClient) {
      super ('categorias');
   }

  getCategoriasVeiculos(): Observable<Categoria[]> {
    return this._httpClient.get<Categoria[]>(`${this.UrlBase}/`)
      .pipe(
        take(1),
      map((categorias: Categoria[]) => {
        return categorias.map(categoria => new Categoria(categoria));
      }));
  }
}
