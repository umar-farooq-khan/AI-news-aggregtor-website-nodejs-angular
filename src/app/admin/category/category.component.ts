import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private http: HttpClient) { }

  title = new Array("default");
  url = new Array("default");
  urlToImage = new Array("default");
  author = new Array("default");
  desc = new Array("default");

  ngOnInit() {
    this.http.get('http://localhost:3000/technews', {responseType: 'json'})
      .subscribe((res) => {
        console.log('whole only tech news');
        console.log(res);
        for (let i = 0; i <= Object.keys(res).length; i++) {
          this.title[i] = res[i].title;
          this.desc[i] = res[i].description.replace(/[0-9]/gi, ' ',).replace(/chars/gi, ' ');
          this.urlToImage[i] = res[i].urlToImage;
          this.author[i] = res[i].author;
          this.url[i] = res[i].url;
          console.log('getting only tech  news');
          console.log(this.desc[i]);
        }
      });

  }

}
