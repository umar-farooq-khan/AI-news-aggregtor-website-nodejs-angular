import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import Product from 'Product';

/*export interface PeriodicElement {
  Name: string;
  Price: number;
  Description: number;
  Category: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Price: 1, Name: 'Gold leaf', Description: 1.0079, Category: 'H' },
  { Price: 2, Name: 'Gold flake', Description: 4.0026, Category: 'He' },
  { Price: 3, Name: 'Pine', Description: 6.941, Category: 'Li' },
  { Price: 4, Name: 'marvan', Description: 9.0122, Category: 'Be' },
  { Price: 5, Name: 'Boron', Description: 10.811, Category: 'B' },
  { Price: 6, Name: 'Carbon', Description: 12.0107, Category: 'C' },
  { Price: 7, Name: 'Nitrogen', Description: 14.0067, Category: 'N' },
  { Price: 8, Name: 'Oxygen', Description: 15.9994, Category: 'O' },
  { Price: 9, Name: 'Fluorine', Description: 18.9984, Category: 'F' },
  { Price: 10, Name: 'Neon', Description: 20.1797, Category: 'Ne' },
];*/



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


products: Product[];
ELEMENT_DATA: Product[];
  constructor(private ps: ProductsService,private router:Router) {

  }
  //issue here
  addProduct(ProductName, ProductDescription, ProductPrice) {
    this.ps.addProduct(ProductName, ProductDescription, ProductPrice);
    (document.getElementById("ProductId")as HTMLInputElement).value = null;
    (document.getElementById("ProductName")as HTMLInputElement).value = null;
    (document.getElementById("ProductDescription")as HTMLInputElement).value = null;
    (document.getElementById("ProductPrice")as HTMLInputElement).value = null;
    window.location.reload();
  }


editProduct(id,ProductName,ProductDescription,ProductPrice){
  (document.getElementById("upbtn")as HTMLButtonElement).disabled = false;
  (document.getElementById("crebtn")as HTMLButtonElement).disabled = true;
  (document.getElementById("ProductId")as HTMLInputElement).value = id;
  (document.getElementById("ProductName")as HTMLInputElement).value = ProductName;
  (document.getElementById("ProductDescription")as HTMLInputElement).value = ProductDescription;
  (document.getElementById("ProductPrice")as HTMLInputElement).value = ProductPrice;
}







  deleteProduct(id) {
    this.ps.deleteProduct(id).subscribe(res => {
      this.products.splice(id, 1);
this.ngOnInit();
    });
  //console.log(products.ProductName);
}

updateProduct(ProductName, ProductDescription, ProductPrice, id) {
  (document.getElementById("upbtn")as HTMLButtonElement).disabled = true;
  (document.getElementById("crebtn")as HTMLButtonElement).disabled = false;
    this.ps.updateProduct(ProductName, ProductDescription, ProductPrice,id);
     (document.getElementById("ProductId")as HTMLInputElement).value = null;
     (document.getElementById("ProductName")as HTMLInputElement).value = null;
     (document.getElementById("ProductDescription")as HTMLInputElement).value = null;
     (document.getElementById("ProductPrice")as HTMLInputElement).value = null;
    // this.router.navigate(['products']);
    window.location.reload();

  }

  ngOnInit() {
  //  this.dataSource.paginator = this.paginator;

    this.ps
      .getProducts()
      .subscribe((data: Product[]) => {
        this.products = data;
      });

// if(!localStorage.getItem('foo')){
//   localStorage.setItem('foo','no reload');
//   location.reload();
// }else
// {
//   localStorage.removeItem('foo');
// }

  }





  applyFilter(filtervalue: string) {
    this.ps
      .getProducts()
      .subscribe((data: Product[]) => {
        this.ELEMENT_DATA = data;
        console.log("items ::"+ this.ELEMENT_DATA);
      });

      //dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    //this.dataSource.filter = filtervalue.trim().toLowerCase();
  }


/*
  displayedColumns: string[] = ['Name', 'Category', 'Description', 'Price'];



  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;




  applyFilter(filtervalue: string) {
    this.dataSource.filter = filtervalue.trim().toLowerCase();
  }
/*
  selectedRow(row) {
    console.log(row);
  }*/
}
