import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }
  getBundles() {
    return this.http.get(`http://localhost:3000/api/v1/bundles`);
  }
}
