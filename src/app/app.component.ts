import { Component } from '@angular/core';
import { VeiculoService } from './services/veiculo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public message: string;

  constructor(
    private veiculoService: VeiculoService
  ) {
    this.exibeMensagemDoServico();
  }

  exibeMensagemDoServico() {
    this.veiculoService.getPosts()
      .subscribe(data => {
        console.log(data);
      });
  }
}

