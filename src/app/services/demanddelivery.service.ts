import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemanddeliveryService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

}
