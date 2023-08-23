import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

export interface UserData {
  id: string;
  name: string;
  category: string;
  description: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  displayedColumns: string[] = [
    'slNo',
    'name',
    'category',
    'description',
    'quantity',
    'price',
    'action',
  ];
  dataSource!: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.getUsers();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  productDetails(productDetails: UserData) {
    console.log(productDetails);
    this.router.navigate([`/users/${productDetails.id}`], {
      state: {
        productInfo: productDetails,
      },
    });
  }

  getUsers() {
    this.productService.getProducts().subscribe({
      next: (response) => {
        console.log(response);
        this.dataSource = new MatTableDataSource(response?.data?.products);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => {
        console.log('Err', error);
      },
    });
  }
}
