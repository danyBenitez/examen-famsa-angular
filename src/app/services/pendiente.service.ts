import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pendientes } from '../pendientes';

@Injectable({
  providedIn: 'root'
})
export class PendienteService {

  private  url='https://examen-famsa.herokuapp.com/pendientes/';
  
  constructor(private http: HttpClient) { 

  }

  getAllPendientes(){
    return this.http.get(`${this.url}`+'all');
  }

  savePendientes (pendiente:Pendientes){
   return this.http.post(`${this.url}`+'save',pendiente);
  }

  deletePendiente(idPendiente: number){
    return this.http.delete(`${this.url}`+idPendiente);
  }

  updatePendiente(idPendiente: number, pendiente: Pendientes){
    return this.http.put(`${this.url}`+idPendiente, pendiente);
  }

}
