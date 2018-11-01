import { Injectable } from '@angular/core';
import { IProduct } from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): IProduct[] {
    return [
      {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden",
        "price": 32.99,
        "starRating": 2,
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/61hITyIcaEL._SX425_.jpg"
      },
      {
        "productId": 5,
        "productName": "Hummer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hummer",
        "price": 8.9,
        "starRating": 3.8,
        "imageUrl": "https://media.screwfix.com/is/image//ae235?src=ae235/33400_P&$prodImageMedium$"
      }
    ];
  }
  constructor() { }
}
