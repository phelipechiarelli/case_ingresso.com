import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaFilmesService {

  constructor(private http: HttpClient) { }

  public getListaFilmesSP(): Observable<any> {
    console.log("chama SP");
    return this.http.get(`https://api-content.ingresso.com/v0/templates/highlights/1/partnership/home/`);    
  }
  
  public getListaFilmesRJ(): Observable<any> {
    console.log("chama RJ");
    return this.http.get(`https://api-content.ingresso.com/v0/templates/highlights/2/partnership/home/`);    
  }


}
