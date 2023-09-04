import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';
import { ProductService } from 'src/app/services/product.service';
import { AddProductComponent } from './add-product/add-product.component';

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
  // public productData$: Observable<ProductData[]>
  refreshData$ = new BehaviorSubject<boolean>(true);
  loading$ = this.loaderService.isLoading$;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private productService: ProductService,
    private loaderService: LoaderService,
    private router: Router,
    public dialog: MatDialog
  ) {
    console.log('loading$', this.loading$);
  }

  ngOnInit() {
    // this.getProducts();
  }

  openAddProductDialog() {
    this.dialog.open(AddProductComponent);
    // .afterClosed()
    // .subscribe((val) => {
    //   if (val === 'save') {
    //     this.getAllProduct();
    //   }
    // });
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
  loadProducts() {
    this.getProducts();
  }
  getProducts() {
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
