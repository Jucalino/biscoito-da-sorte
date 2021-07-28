import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { biscoitoSorte } from './biscoitoSorteResponse';

@Injectable({
  providedIn: 'root'
})
export class BiscoitoSorteService {
  private API = `${environment.API}`

  constructor(private http: HttpClient) { }

  sorte(biscoitoSorte: string){
    const params = {
      text: biscoitoSorte
    }

    return this.http.get<biscoitoSorte>(this.API)
  }
}
