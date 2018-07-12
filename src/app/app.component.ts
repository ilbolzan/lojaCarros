import { Component } from '@angular/core';
import { VeiculoService } from './services/veiculo.service';
import { IVeiculo, CategoriaEnum } from './shared/models';

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
    this.veiculoService.getVeiculos(CategoriaEnum.CARRO)
      .subscribe((data: IVeiculo[]) => {
        console.log(data);
      });
  }
}

