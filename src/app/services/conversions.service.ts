import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Observable, from } from 'rxjs';
import { baseURL } from '../shared/baseUrl';
import {catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConversionsService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

    getConversion(request): Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return this.http.post<any>(baseURL + 'units/', request, httpOptions)
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }


    getSpoon(request): Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return this.http.post<any>(baseURL + 'spoon/', request, httpOptions)
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    getMaterial(request): Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return this.http.post<any>(baseURL +  'materials/' , request, httpOptions)
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }
}
