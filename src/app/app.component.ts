import { biscoitoSorte } from './biscoitoSorteResponse';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BiscoitoSorteService } from './biscoito-sorte.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'biscoito';

  constructor(
    private formsbuilder: FormBuilder,
    private apiBiscoito: BiscoitoSorteService
  ){ }

  biscoitoSorte!: Observable<biscoitoSorte[]>
  biscoito!: FormGroup
  conselho: string = '';

  ngOnInit(): void {
    this.biscoito = this.formsbuilder.group({
      id: [null],
      conselho: [null, Validators.required]
    });
  }

  onSubmit(): void {
    this.apiBiscoito.sorte(this.biscoito.get('id')?.value).subscribe(
      (dados: biscoitoSorte) => {
        console.log(dados)
        this.conselho = dados.slip.advice
      },
      (error: any) => {
        alert('algo está errado')
      }
    )
  }
}
