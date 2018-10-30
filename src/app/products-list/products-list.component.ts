import { Component, OnInit } from '@angular/core';
import { IProduct } from './iproduct';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  private _listFilter: string;
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
    products: IProduct[] = [
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

  constructor(){
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }
  
  ngOnInit(){

  }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }
    
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void{
    this.pageTitle = 'Product List ' + message;
  }
}
