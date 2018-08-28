import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookServiceService } from './../Service/book.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [BookServiceService]

})
export class SearchComponent implements OnInit, OnDestroy {
  arr: any;
  arrTest: any;
  dtOptions: DataTables.Settings = {};

  dtTrigger = new Subject();
  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };

    this.bookService.getAllBooks()
      .subscribe(res => {
        this.arr = res;
        this.arrTest = res;
        console.log(this.arr);

        this.dtTrigger.next();
      });

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}

// t = {
//   "id": "{{i}}",
//   "barcode": "barcode {{i}}",
//   "type": false,
//   "page": 58,
//   "status": false,
//   "titid": [
//     {
//       "name": "Sách {{i}}"
//     },
//     {
//       "content": "Mục 1 :  {{i}} Mục 2 :  {{i}}"
//     },
//     {
//       "description": "Mô tả {{i}}"
//     },
//     {
//       "lang": "english"
//     },
//     {
//       "authors": [
//         { "Author {{i}}": "{{i}}" },
//         { "Author {{i + 1}}": "{{i + 1}}" }
//       ]
//     },
//     {
//       "categories": [
//         { "Category {{i}}": "{{i}}" },
//         { "Category {{i + 1}}": "{{i + 1}}" }
//       ]
//     }
//   ]
// }