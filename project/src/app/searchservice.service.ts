import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchserviceService {
  searchUrl = 'https://yummly2.p.rapidapi.com/feeds/list-similarities'
  constructor(private http: HttpClient) { }
  get() {

    let headers = new HttpHeaders({
      'X-RapidAPI-Key': 'a356432fb5msh8cc581faab668ccp1f30e1jsn9f9c0cea3104',
      'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
    })
    let params = new HttpParams()
    params = params.append('limit', '18')
    params = params.append('start', '0')
    params = params.append('id', '15-Minute-Baked-Salmon-with-Lemon-9029477')
    params = params.append('apiFeedType', 'moreFrom')
    params = params.append('authorId', 'Yummly')
   return this.http.get(this.searchUrl,{headers:headers,params:params})
  }
}
