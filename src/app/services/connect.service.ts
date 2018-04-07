import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {VerificationService} from "./verification.service";
import { Router } from "@angular/router";

@Injectable()
export class ConnectService {

  url:string;

  constructor(private http:HttpClient) {
  }

  //get request for query
  get(suffix:string){
    this.url = 'http://localhost:8080/CyanJson/' + suffix;

    return this.http.get(this.url, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8'),
    })
  }


  //put request for update
  put(suffix:string, body){
    this.url = 'http://localhost:8080/CyanJson/' + suffix;
    return this.http.put(this.url, body,{
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8'),
    });
  }


  //post request for insert
  post(suffix:string, body){
    this.url = 'http://localhost:8080/CyanJson/' + suffix;
    return this.http.post(this.url, body,{
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8'),
    });
  }


  //delete request for delete
  delete(suffix:string){
    this.url = 'http://localhost:8080/CyanJson/' + suffix;
    return this.http.delete(this.url, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8'),
    });
  }

}
