import { BiscoitoSorteService } from './../biscoito-sorte.service';
import { Component, OnInit } from '@angular/core';
import { apiResponse } from '../biscoitoSorteResponse';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mensage',
  templateUrl: './mensage.component.html',
  styleUrls: ['./mensage.component.css'],
})
export class MensageComponent implements OnInit {
  conselho: string;
  loading: boolean = false;

  constructor(
    private apiBiscoito: BiscoitoSorteService,
    private _snackBar: MatSnackBar
    ) {}

  ngOnInit(): void {
    this.carregarConselho();
  }

  carregarConselho(): void {
    this.loading = true;
    this.apiBiscoito.buscarConselho().subscribe(
      (dados: apiResponse) => {
        this.conselho = dados.slip.advice;
        this._snackBar.open('Successfully!', 'X', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 3000,
        });
        this.loading = false;
      },
      (error: any) => {
        this._snackBar.open('Something is wrong!', 'X', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        this.loading = true;
      }
    );
  }
}
