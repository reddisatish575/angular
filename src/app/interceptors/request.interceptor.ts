import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log("uix reuqest intercept ::: ",request);

    let buildAdditionalHeaders =  new HttpHeaders({ 
      token: 'njdfkvdkjfnvikfnvkd', 
      userId: '645'
     }) 
    if(request.method === 'POST'){
      const newReq = request.clone({ headers : buildAdditionalHeaders})
    return next.handle(newReq);

    }
    

    // this lines send request to our server
    return next.handle(request);
  }
}
