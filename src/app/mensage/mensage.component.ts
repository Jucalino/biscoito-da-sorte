import { BiscoitoSorteService } from './../biscoito-sorte.service';
import { Component, OnInit } from '@angular/core';
import { apiResponse } from '../biscoitoSorteResponse';

@Component({
  selector: 'app-mensage',
  templateUrl: './mensage.component.html',
  styleUrls: ['./mensage.component.css'],
})
export class MensageComponent implements OnInit {
  conselho: string;
  loading: boolean = false;

  constructor(private apiBiscoito: BiscoitoSorteService) {}

  ngOnInit(): void {
    this.carregarConselho();
  }

  carregarConselho(): void {
    this.loading = true;
    this.apiBiscoito.buscarConselho().subscribe(
      (dados: apiResponse) => {
        this.conselho = dados.slip.advice;
        this.loading = false;
      },
      (error: any) => {
        alert('algo está errado');
        this.loading = true;
      }
    );
  }
}
