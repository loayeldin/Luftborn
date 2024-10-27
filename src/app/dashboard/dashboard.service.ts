import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { products } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }


  getPorducts():Observable<products[]> // Get limited products
  {
    return this.http.get<products[]>('https://fakestoreapi.com/products?limit=10')
  }
}
