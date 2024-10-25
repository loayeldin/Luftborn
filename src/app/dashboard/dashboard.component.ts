import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { products } from '../interfaces/products.interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private dashboardService:DashboardService){}
  products!:products[]

  shapeColors = [
    '#FF8B64',
    '#55C2E6', 
    '#FF5E7D', 
    '#FF8B64', 
    '#55C2E6',
    '#4BCF82',
    '#7335D2',
    '#F1C75B',
    '#4BCF82',
    '#7335D2'

 
  ];
  ngOnInit(){
    this.dashboardService.getPorducts().subscribe(data=>{
   
      this.products = data
      console.log(this.products);
    })
  }
}
