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
  title = new Array("default");
  url = new Array("default");
  urlToImage = new Array("default");
  author = new Array("default");
  desc = new Array("default");

  titlerel = new Array("default");
  urlrel = new Array("default");
  authorrel = new Array("default");

  titletech = new Array("default");
  urltech = new Array("default");
  urlToImagetech = new Array("default");
  authortech = new Array("default");
  desctech = new Array("default");

  titlereltech = new Array("default");
  urlreltech = new Array("default");
  authorreltech = new Array("default");

  titleeconomy = new Array("default");
  urleconomy = new Array("default");
  urlToImageeconomy = new Array("default");
  authoreconomy = new Array("default");
  desceconomy = new Array("default");

  titlereleconomy = new Array("default");
  urlreleconomy = new Array("default");
  authorreleconomy = new Array("default");

  titleworld = new Array("default");
  urlworld = new Array("default");
  urlToImageworld = new Array("default");
  authorworld = new Array("default");
  descworld = new Array("default");

  titlerelworld = new Array("default");
  urlrelworld = new Array("default");
  authorrelworld = new Array("default");

  titleregion = new Array("default");
  urlregion = new Array("default");
  urlToImageregion = new Array("default");
  authorregion = new Array("default");
  descregion = new Array("default");

  titlerelregion = new Array("default");
  urlrelregion = new Array("default");
  authorrelregion = new Array("default");

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
    .get('http://localhost:3000/regionnews', { responseType: 'json' })
    .subscribe((res) => {
      console.log("whole region news"); console.log(res);
      for (let i = 0 ; i <= Object.keys(res).length; i++) {
        this.titleregion[i] = res[i].title;
        this.descregion[i] = res[i].description.replace(/[0-9]/gi, " ", ).replace(/chars/gi, " " );
        this.urlToImageregion[i] = res[i].urlToImage;
        this.authorregion[i] = res[i].author;
        this.urlregion[i] = res[i].url;
        console.log("getting into region news");
        // console.log(this.title[i]);
        console.log(this.desc[i]);
      }
    });
this.http
    .get('http://localhost:3000/relatedregion', { responseType: 'json' })
    .subscribe((resrel) => {
      for (let i = 0 ; i <= Object.keys(resrel).length; i++) {
        this.titlerelregion[i] = resrel[i].title;
        this.urlrelregion[i] = resrel[i].url;
        this.authorrelregion[i] = resrel[i].author;
        console.log("putting Rel");
        console.log(this.titlerelregion[i]);
      }
    });






  this.http
.get('http://localhost:3000/getnewspk', { responseType: 'json' })
.subscribe((res) => {
  for (let i = 0 ; i <= Object.keys(res).length; i++) {
    this.title[i] = res[i].title;
    this.desc[i] = res[i].description.replace(/[0-9]/gi, " ", ).replace(/chars/gi, " " );
    this.urlToImage[i] = res[i].urlToImage;
    this.author[i] = res[i].author;
    this.url[i] = res[i].url;
    console.log("putting");
    // console.log(this.title[i]);
    console.log(this.desc[i]);
  }
});


this.http
    .get('http://localhost:3000/worldnews', { responseType: 'json' })
    .subscribe((res) => {
      console.log("whole world news"); console.log(res);
      for (let i = 0 ; i <= Object.keys(res).length; i++) {
        this.titleworld[i] = res[i].title;
        this.descworld[i] = res[i].description.replace(/[0-9]/gi, " ", ).replace(/chars/gi, " " );
        this.urlToImageworld[i] = res[i].urlToImage;
        this.authorworld[i] = res[i].author;
        this.urlworld[i] = res[i].url;
        console.log("getting into world news");
        // console.log(this.title[i]);
        console.log(this.desc[i]);
      }
    });
this.http
    .get('http://localhost:3000/relatedworld', { responseType: 'json' })
    .subscribe((resrel) => {
      for (let i = 0 ; i <= Object.keys(resrel).length; i++) {
        this.titlerelworld[i] = resrel[i].title;
        this.urlrelworld[i] = resrel[i].url;
        this.authorrelworld[i] = resrel[i].author;
        console.log("putting Rel");
        console.log(this.titlerelworld[i]);
      }
    });





this.http
    .get('http://localhost:3000/economynews', { responseType: 'json' })
    .subscribe((res) => {
      console.log("whole economy news"); console.log(res);
      for (let i = 0 ; i <= Object.keys(res).length; i++) {
        this.titleeconomy[i] = res[i].title;
        this.desceconomy[i] = res[i].description.replace(/[0-9]/gi, " ", ).replace(/chars/gi, " " );
        this.urlToImageeconomy[i] = res[i].urlToImage;
        this.authoreconomy[i] = res[i].author;
        this.urleconomy[i] = res[i].url;
        console.log("getting into economy news");
        // console.log(this.title[i]);
        console.log(this.desc[i]);
      }
    });

this.http
    .get('http://localhost:3000/relatedeconomy', { responseType: 'json' })
    .subscribe((resrel) => {
      for (let i = 0 ; i <= Object.keys(resrel).length; i++) {
        this.titlereleconomy[i] = resrel[i].title;
        this.urlreleconomy[i] = resrel[i].url;
        this.authorreleconomy[i] = resrel[i].author;
        console.log("putting Rel");
        console.log(this.titlereleconomy[i]);
      }
    });




this.http
    .get('http://localhost:3000/technews', { responseType: 'json' })
    .subscribe((res) => {
      console.log("whole tech news"); console.log(res);
      for (let i = 0 ; i <= Object.keys(res).length; i++) {
        this.titletech[i] = res[i].title;
        this.desctech[i] = res[i].description.replace(/[0-9]/gi, " ", ).replace(/chars/gi, " " );
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
