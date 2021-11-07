import { Component, OnInit } from '@angular/core';
import {AppService} from "./app.service";

interface Moeda {
  sigla: string;
  descricao: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private appService : AppService){ }

  moedas: Moeda[] = []
  moedaDeX: string = '';
  moedaParaX: string = '';
  valorInserido: number = 0;
  resultado: number = 0.0;

  ngOnInit(): void {
    this.appService.listarSiglasMoedas().subscribe(data => {
      for (let symbol in data.symbols) {
        let moeda: Moeda = {
          sigla: data.symbols[symbol].code,
          descricao: data.symbols[symbol].description
        };
        this.moedas.push(moeda);
      }
    })
  }

  calcularConversao() {
    this.appService.chamadaConversaoValores(this.moedaDeX, this.moedaParaX, this.valorInserido).subscribe(data => {
      this.resultado = data.result;
    });
  }
}
