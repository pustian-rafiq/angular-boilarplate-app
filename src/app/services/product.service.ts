import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/envireonment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<any> {
    return this.httpClient.get(`${environment.API_URL}/products`).pipe(
      map((products: any) => {
        console.log('products', products);
        const productData = products?.products.map(
          (product: {}, index: number) => ({
            ...product,
            itemPosition: index + 1,
          })
        );

        return {
          data: {
            products: [...productData],
          },
        };
      })
    );
  }

  // getUserDetails(userId: number): Observable<any> {
  //   return this.httpClient.get(`${environment.API_ENDPOINT}/users/${userId}`);
  // }
}
