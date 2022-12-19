import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  products = [
    {
      id: 1,
      name: 'Subhash',
      username: 'Subh',
      email: 'Subh@gmail.com',
      department: 'Dcs',
    },
    {
      id: 2,
      name: 'Pruthvi',
      username: 'Pruthvi',
      email: 'Pruth@gmail.com',
      department: 'CoreLeverage',
    },
    {
      id: 3,
      name: 'Javeed',
      username: 'Jave',
      email: 'Jave@gmail.com',
      department: 'QualityLeap',
    },
    {
      id: 4,
      name: 'Vamsi Krishna',
      username: 'Vam',
      email: 'Vam@gmail.com',
      department: 'DataLeverage',
    },
    {
      id: 5,
      name: 'Prasen',
      username: 'pras',
      email: 'Pras@gmail.com',
      department: 'TAG',
    },
  ];
}
