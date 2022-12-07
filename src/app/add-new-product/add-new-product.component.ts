import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  product: Product={
    name: "",
    description: "",
    price: 0,
    imageURL: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
