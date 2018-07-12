import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { IVeiculo, CategoriaEnum } from '../shared/models';
import { HttpBase } from './http-base';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService extends HttpBase {
  public msg = 'hello world';
  constructor(private _httpClient: HttpClient) {
    super('veiculos');
  }

  getVeiculos(nomeCategoria: CategoriaEnum): Observable<IVeiculo[]> {
    return this._httpClient.get<IVeiculo[]>(`${this.UrlBase}?categoria=${nomeCategoria}`);
  }

  getVeiculoById(idVeiculo: number): Observable<IVeiculo> {
    return this._httpClient.get<IVeiculo>(`${this.UrlBase}/${idVeiculo}`);
  }

  createVeiculo(veiculo: IVeiculo) {
    return this._httpClient.post<any>(`${this.UrlBase}`, veiculo);
  }
}
