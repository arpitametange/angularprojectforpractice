import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddtocardSERVICEService {
  public cartItemList:any=[]
  public productList=new BehaviorSubject<any>([])
    constructor() { }
    getProducts(){
      return this.productList.asObservable();
    }
    setProduct(product:any){
      this.cartItemList.push(...product);
      this.productList.next(product)
  
    }
    addToCard(product:any){
      this.cartItemList.push(product)
      this.productList.next(this.cartItemList)
      this.getTotalPrice();
      console.log('list',this.cartItemList);
      
      
    }
    getTotalPrice():number{
      let grandTotal=0
      this.cartItemList.map((a:any)=>{
        grandTotal+=a.total;
      })
      return grandTotal;
    
    }
  
    removeCartItem(product:any){
      console.log('product',product);
      
      this.cartItemList.map((a:any,index:any)=>{
        if (product.id===a.id) {
          this.cartItemList.splice(index,1);
          
        }
      })
    }
  
    removeAllCard(){
      this.cartItemList=[]
      this.productList.next(this.cartItemList)
    }
  }
  