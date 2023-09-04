import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';
import { ProductData } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddProductComponent {
  freshness: string[] = ['Brand New', 'Second Hand', 'Fabrished Product'];
  productForm!: FormGroup;

  actionBtn: string = 'Save';
  modalContent: any = {
    title: 'Add Product Form',
  };
  constructor(
    @Inject(MAT_DIALOG_DATA) public editData: ProductData,
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private productModalRef: MatDialogRef<AddProductComponent>
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      description: ['', Validators.required],
    });

    if (this.editData) {
      this.actionBtn = 'Update';
      this.modalContent = {
        title: 'Update Product Form',
      };
      this.productForm.controls['name'].setValue(this.editData.name);
      this.productForm.controls['category'].setValue(this.editData.category);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['quantity'].setValue(this.editData.quantity);
      this.productForm.controls['description'].setValue(
        this.editData.description
      );
    }

    console.log('Edit data', this.editData);
  }

  addProduct(): void {
    console.log(this.productForm.value);

    if (!this.editData) {
      if (this.productForm.valid) {
        this.productService.addProduct(this.productForm.value).subscribe({
          next: (response) => {
            console.log('Response', response);
            // alert('Product added successfully');
            this.productForm.reset();
            this.productModalRef.close('save');
          },
          error: (err) => {
            alert('Something wromng!');
          },
        });
      }
    } else {
      // this.updateProduct();
    }
  }

  // updateProduct() {
  //   this.productService
  //     .updateProduct(this.productForm.value, this.editData.id)
  //     .subscribe({
  //       next: (resp) => {
  //         alert('Product updated successfully');
  //         this.productForm.reset();
  //         this.productModalRef.close('update');
  //       },
  //       error: (err) => {
  //         alert('Something wromng!');
  //       },
  //     });
  // }
}
