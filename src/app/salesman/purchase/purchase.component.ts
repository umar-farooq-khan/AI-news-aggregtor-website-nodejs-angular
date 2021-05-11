import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  constructor(private http: HttpClient) { }
  title = new Array("default");
  url = new Array("default");
  urlToImage = new Array("default");
  author = new Array("default");
  desc = new Array("default");
  ngOnInit() {
    this.http.get('http://localhost:3000/entertainmentnews', {responseType: 'json'})
      .subscribe((res) => {
        console.log('whole only entertain news');
        console.log(res);
        for (let i = 0; i <= Object.keys(res).length; i++) {
          this.title[i] = res[i].title;
          this.desc[i] = res[i].description.replace(/[0-9]/gi, ' ',).replace(/chars/gi, ' ');
          this.urlToImage[i] = res[i].urlToImage;
          this.author[i] = res[i].author;
          this.url[i] = res[i].url;
          console.log('getting only entertain  news');
          console.log(this.desc[i]);
        }
      });
  }

}
