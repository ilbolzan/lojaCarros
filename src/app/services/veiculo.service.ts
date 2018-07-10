import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  public msg = 'hello world';
  constructor(private httpClient: Http) { }

  getPosts(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
}
