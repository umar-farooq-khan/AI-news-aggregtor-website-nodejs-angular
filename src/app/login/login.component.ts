/* tslint:disable:quotemark */
import { DataSource } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import data from './jsonn.json';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppServiceService } from '../app-service.service';
declare function senddata();
declare function senddata();
import fx from 'RelatedTech.json';
import tech from 'technology.json';





@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})


export class LoginComponent implements OnInit {
  constructor(private http: HttpClient) {}
  title = new Array("Mary");
  url = new Array("Mary");
  urlToImage = new Array("Mary");
  author = new Array("Mary");
  desc = new Array("Mary");

  titlerel = new Array("Mary");
  urlrel = new Array("Mary");
  authorrel = new Array("Mary");

  titletech = new Array("Mary");
  urltech = new Array("Mary");
  urlToImagetech = new Array("Mary");
  authortech = new Array("Mary");
  desctech = new Array("Mary");

  titlereltech = new Array("Mary");
  urlreltech = new Array("Mary");
  authorreltech = new Array("Mary");
  postId;
  city;
  related;
  responseip;
  country;
  geoapi;
  data;
  stringg;
  news;
  temp;
  techv;

  findrelatednews() {
   // loop ()
      // get first item from data1
      // make a like query again from the database.
      // put it in new data structure

 }





ngOnInit() {
senddata();
console.log("jsonnnn file");
console.log(fx);
this.temp = fx;
this.techv = tech;

console.log();


this.http
.get('http://localhost:3000/getnewspk', { responseType: 'json' })
.subscribe((res) => {
  for (let i = 0 ; i <= Object.keys(res).length; i++) {
    this.title[i] = res[i].title;
    this.desc[i] = res[i].description;
    this.urlToImage[i] = res[i].urlToImage;
    this.author[i] = res[i].author;
    this.url[i] = res[i].url;
    console.log("putting");
    // console.log(this.title[i]);
    console.log(this.desc[i]);
  }
});

this.http
    .get('http://localhost:3000/technews', { responseType: 'json' })
    .subscribe((res) => {
      console.log("whole tech news"); console.log(res);
      for (let i = 0 ; i <= Object.keys(res).length; i++) {
        this.titletech[i] = res[i].title;
        this.desctech[i] = res[i].description;
        this.urlToImagetech[i] = res[i].urlToImage;
        this.authortech[i] = res[i].author;
        this.urltech[i] = res[i].url;
        console.log("getting into tech news");
        // console.log(this.title[i]);
        console.log(this.desc[i]);
      }
    });

this.http
    .get('http://localhost:3000/relatedtech', { responseType: 'json' })
    .subscribe((resrel) => {
      for (let i = 0 ; i <= Object.keys(resrel).length; i++) {
        this.titlereltech[i] = resrel[i].title;
        this.urlreltech[i] = resrel[i].url;
        this.authorreltech[i] = resrel[i].author;
        console.log("putting Rel");
        console.log(this.titlereltech[i]);
      }
    });



this.http
.get('http://localhost:3000/related', { responseType: 'json' })
.subscribe((resrel) => {
  for (let i = 0 ; i <= Object.keys(resrel).length; i++) {
    this.titlerel[i] = resrel[i].title;
    this.urlrel[i] = resrel[i].url;
    this.authorrel[i] = resrel[i].author;
    console.log("putting Rel");
    console.log(this.titlerel[i]);
  }
});


//
// this.geoapi = 'http://www.google.com';
// // this.geoapi= 'http://www.geoplugin.net/json.gp'
// this.http.post(this.geoapi, { responseType: 'json' })
// .subscribe((res) => {
//         console.log('check');
//         console.log(res);
//         this.responseip = res; // response phle kise variable main dalna parta hai phr parse karo
//         console.log( this.responseip.geoplugin_countryCode);
//         if (this.responseip.geoplugin_city === 'Islamabad' || this.responseip.geoplugin_city === 'Lahore'
//           || this.responseip.geoplugin_city === 'Macedonia' || this.responseip.geoplugin_city === 'London') {
//     this.city = this.responseip.geoplugin_city;
//     this.country = this.responseip.geoplugin_countryCode;
//     console.log('calling a function');
//
//     this.http
//   .get('http://localhost:3000/getnewspkreturn', { responseType: 'json' })
//   .subscribe((res) => {
//    this.data1 = res;
//    console.log(this.data1);
//   });
//        } else {
//          this.city = 'Generic city';
//          this.country = 'Generic country';
//        }
//
//       });
//

  }
}
