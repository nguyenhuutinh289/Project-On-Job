import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import  'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  url:string = 'https://5b841601db24a100142dcda7.mockapi.io/getbooks';
  constructor(private http:HttpClient) {

   }

   getAllBooks(){
    return this.http.get(this.url);
    //  .subscribe(persons => console.log(persons));
   }
}
