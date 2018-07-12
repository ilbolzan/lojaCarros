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
    this.veiculoService.createVeiculo(
      {
        marca: 'Honda',
        modelo: 'CB600F',
        ano: 2013,
        categoria: CategoriaEnum.MOTO,
        imagemUrl: 'url',
        unidadesEmEstoque: 0,
        valor: 28.000
      } as IVeiculo
    ).subscribe((data: IVeiculo) => {
      console.log(data);
    });

    this.exibeMensagemDoServico();
  }

  exibeMensagemDoServico() {
    // this.veiculoService.getVeiculos(CategoriaEnum.CARRO)
    //   .subscribe((data: IVeiculo[]) => {
    //     console.log(data);
    //   });

    // this.veiculoService.getVeiculoById(5)
    // .subscribe((data: IVeiculo) => {
    //   console.log(data);
    // });

    // this.categoriaService.getCategoriasVeiculos()
    //   .subscribe((data: ICategoria[]) => {
    //     console.log(data);
    //   });
  }
}

