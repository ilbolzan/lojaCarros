import { Component } from '@angular/core';
import { VeiculoService } from './services/veiculo.service';
import { IVeiculo, CategoriaEnum, ICategoria } from './shared/models';
import { CategoriaService } from './services/categoria.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public message: string;

  constructor(
    private veiculoService: VeiculoService,
    private categoriaService: CategoriaService
  ) {
    this.exibeMensagemDoServico();
  }

  exibeMensagemDoServico() {
    // this.veiculoService.getVeiculos(CategoriaEnum.CARRO)
    //   .subscribe((data: IVeiculo[]) => {
    //     console.log(data);
    //   });

    this.categoriaService.getCategoriasVeiculos()
      .subscribe((data: ICategoria[]) => {
        console.log(data);
      });
  }
}

