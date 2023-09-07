import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url='https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser'

  constructor(private http:HttpClient) {
    this.get()
    }
    get(){
    let  headers=new HttpHeaders ({
      'X-RapidAPI-Key': 'a356432fb5msh8cc581faab668ccp1f30e1jsn9f9c0cea3104',
      'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
      })
        let params = new HttpParams();
  params=params.append('nutrition-type', 'cooking')
  params=params.append('category[0]','generic-foods')
  params=params.append( 'health[0]','alcohol-free')
    return  this.http.get(this.url,{headers:headers,params:params})
    }
//for add to card
    getalldata(){
      let  headers=new HttpHeaders ({
        'X-RapidAPI-Key': 'a356432fb5msh8cc581faab668ccp1f30e1jsn9f9c0cea3104',
        'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        })
          let params = new HttpParams();
    params=params.append('nutrition-type', 'cooking')
    params=params.append('category[0]','generic-foods')
    params=params.append( 'health[0]','alcohol-free')


      return this.http.get<any>(this.url,{headers:headers,params:params}).pipe(map((res:any)=>{
       return res
      }))
     }
}
