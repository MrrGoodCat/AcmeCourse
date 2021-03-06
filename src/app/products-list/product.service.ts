import { Injectable } from '@angular/core';
import { IProduct } from './iproduct';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: IProduct[] = [];
  //errorMessage: string;
  private productUrl = 'api/products'; //'api/products/products.json';

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<IProduct> {
    if (id === 0) {
      return of(this.initializeProduct());
    }
    const url = `${this.productUrl}/${id}`;
    return this.http.get<IProduct>(url)
      .pipe(
        tap(data => console.log('getProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getProductById(id: number): IProduct{
    if (id === 0) {
      return this.initializeProduct();
    }
    for(let prod of this.products)
    {
      if(prod.id == id)
      {
        return prod;
      }
    }
    return null;
  }

  createProduct(product: IProduct):Observable<IProduct>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    product.id = null;

    return this.http.post<IProduct>(this.productUrl, product, {headers: headers})
    .pipe(
      tap(data => console.log('createProduct: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  updateProduct(product: IProduct):Observable<IProduct>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `${this.productUrl}/${product.id}`;

    return this.http.put<IProduct>(url, product, {headers: headers})
    .pipe(
      tap(() => console.log('updateProduct: ' + product.id)),
      map(() => product),
      catchError(this.handleError)
    );
  } 

  deleteProduct(id: number): Observable<{}>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `${this.productUrl}/${id}`;
    return this.http.delete<IProduct>(url, {headers: headers})
    .pipe(
      tap(() => console.log('deleteProduct: ' + id)),
      catchError(this.handleError)
    );
  }


  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  constructor(private http: HttpClient) { 
    this.getProducts().subscribe(
      products => {
        this.products = products;
      }
    );

  }

  private initializeProduct(): IProduct {
    // Return an initialized object
    return {
      id: 0,
      productName: null,
      productCode: null,
      tags: [''],
      releaseDate: null,
      price: null,
      description: null,
      starRating: null,
      imageUrl: null
    };
  }
}
