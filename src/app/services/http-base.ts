import { environment } from '../../environments/environment';

export abstract class HttpBase {
    protected URL_SERVICO: string;

    constructor (
        private caminhoEndpoint: string
    ) {
        this.URL_SERVICO = environment.urlApi;
    }

    get UrlBase() {
        return `${this.URL_SERVICO}/${this.caminhoEndpoint}`;
    }

    get Url(): string {
        return this.URL_SERVICO;
    }
}


