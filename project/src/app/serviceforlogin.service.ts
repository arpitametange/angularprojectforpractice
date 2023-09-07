import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceforloginService {
url='http://localhost:3000/user/'
cardurl='http://localhost:3000/card/'
constructor(private http:HttpClient) { }

postdatafromlogin(body){
 return this.http.post(this.url,body)
}
postdataofcard(body){
  return this.http.post(this.cardurl,body)
}
get(){
  return this.http.get(this.cardurl)
}

//login validation
// check(username,password){
//   if(username=='arpita' && password=='arpita1234'){
//     localStorage.setItem('username','arpita')
//     return true
//   }
//   else{
//     return false

//   }
// }

checkUser(username, password){
  return this.http.get(this.url)
   
 }

}
