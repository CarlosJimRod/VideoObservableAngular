import { Component } from '@angular/core';
import {Post} from "./models/Post";
import {PostServiceService} from "./services/post-service.service";
import {catchError, delay, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hasError: Boolean = false
  post$: Observable<Post>

  constructor(private postService : PostServiceService) {
    this.post$ = postService.getPost().pipe(catchError(error => {
      console.error(error)
      this.hasError=true
      throw new Error(error)
    }))
  }
}
