import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import Product from 'Product';
import { HttpClient, HttpResponse } from '@angular/common/http';
declare function getsportsnews()

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  columns = ['new1', 'new2', 'status', 'loc'];

  constructor(private ps: ProductsService, private router: Router, private http: HttpClient) {
  }

  title = new Array("default");
  url = new Array("default");
  urlToImage = new Array("default");
  author = new Array("default");
  desc = new Array("default");


  ngOnInit() {
    console.log('ngonit');
    this.http.get('http://localhost:3000/economynews', {responseType: 'json'})
      .subscribe((res) => {
        console.log('whole economy news');
        console.log(res);
        for (let i = 0; i <= Object.keys(res).length; i++) {
          this.title[i] = res[i].title;
          this.desc[i] = res[i].description.replace(/[0-9]/gi, ' ',).replace(/chars/gi, ' ');
          this.urlToImage[i] = res[i].urlToImage;
          this.author[i] = res[i].author;
          this.url[i] = res[i].url;
          console.log('getting  economy  news');
          console.log(this.desc[i]);
        }
      });

  }
}
