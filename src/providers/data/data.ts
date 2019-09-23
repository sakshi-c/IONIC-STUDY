import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class DataProvider {

  private url: string ="https://jsonplaceholder.typicode.com/todos/1";
  constructor(private http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  getmessage(){
    return this.http.get(this.url)
  
 }
}
