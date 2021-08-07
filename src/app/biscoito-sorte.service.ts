import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { apiResponse } from './biscoitoSorteResponse';

@Injectable({
  providedIn: 'root'
})
export class BiscoitoSorteService {
  private API = `${environment.API}/advice`

  constructor(private http: HttpClient) { }

  buscarConselho(){
    return this.http.get<apiResponse>(this.API)
  }
}
