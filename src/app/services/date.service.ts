import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  private apiServerUrl = environment.apiBaseUrl;

constructor(private http: HttpClient) { }

public getDatesList(): Observable<Date[]>{
  return this.http.get<Date[]>(`${this.apiServerUrl}/datedim/list`);
}

public getDateId(data: Date, date: String): Observable<Date>{
  return this.http.get<Date>(`${this.apiServerUrl}/datedim/`+date);
}


}
