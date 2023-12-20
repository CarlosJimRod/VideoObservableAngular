import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";
import {Post} from "../models/Post";

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
private postUrl = 'https://jsonplaceholder.typicode.com/posts/1'
  constructor(private httpClient : HttpClient) { }

  getPost(): Observable<Post>{
    return this.httpClient.get<Post>(this.postUrl).pipe(delay(2000))
  }
}
