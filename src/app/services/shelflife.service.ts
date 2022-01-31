import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ShelfLife } from '../models/shelflife';

@Injectable({
  providedIn: 'root'
})
export class ShelflifeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getShelfLifeList(): Observable<ShelfLife[]>{
    return this.http.get<ShelfLife[]>(`${this.apiServerUrl}/shelflife/list`);
  }


  public getShelfLife(shelfLife: number, customerid: number): Observable<ShelfLife[]>{
    return this.http.get<ShelfLife[]>(`${this.apiServerUrl}/shelflife/get?${shelfLife}=75&${customerid}=`+customerid);
  }

}
