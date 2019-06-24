import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DominDetailsService {

  constructor(private http: HttpClient) { }

  getDomainDetails() {
    return this.http.get("http://192.168.100.212:3000/domain/1");


  }
}
