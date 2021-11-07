import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private http: HttpClient) { }

  listarSiglasMoedas(): Observable<any> {
    return this.http.get("https://api.exchangerate.host/symbols");
  }

  chamadaConversaoValores(MoedaOrigem: string, MoedaDestino: string, valor: number): Observable<any> {
    return this.http.get("https://api.exchangerate.host/convert" +
      "?from=" + MoedaOrigem +
      "&to=" + MoedaDestino +
      "&amount=" + valor);
  }

}
