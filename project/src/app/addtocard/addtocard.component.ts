import { Component, OnInit } from '@angular/core';
import { ServiceforloginService } from '../serviceforlogin.service';
import { AddtocardSERVICEService } from '../addtocard-service.service';
import { ServiceService } from '../service.service';
import { MatDialog } from '@angular/material';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-addtocard',
  templateUrl: './addtocard.component.html',
  styleUrls: ['./addtocard.component.css']
})
export class AddtocardComponent implements OnInit {
  cheeze :any =[];

  constructor(private loginservice:ServiceforloginService,private service: ServiceService,private ADDOTCARDSERVICE:AddtocardSERVICEService,private dialog:MatDialog) { }
  menu:any=[]
  totalength:number=0
  public product:any=[]
  array:any=[]
  public grandTotal !:number;
  
  ngOnInit():void {
//     this.service.get().subscribe((res:any)=>{
//       console.log('result',res);
//       this.menu=res.hints

// })

this.loginservice.postdataofcard(this.menu)


this.menu= this.ADDOTCARDSERVICE.cartItemList


    this.ADDOTCARDSERVICE.getProducts().subscribe(res=>{
      this.product=res;
      this.grandTotal=this.ADDOTCARDSERVICE.getTotalPrice()
  })

  this.ADDOTCARDSERVICE.getProducts().subscribe(res=>{
    this.totalength=res.length
        })
  }

  removeItem(item:any){
this.ADDOTCARDSERVICE.removeCartItem(item)
console.log('item',item);


  }
  emptyCart(){
    this.ADDOTCARDSERVICE.removeAllCard()
  }
// addtocardsert(){
//  this.menu= this.ADDOTCARDSERVICE.cartItemList
// }
// viewdetails(){
//   let dialog=this.dialog.open()
//   dialog.afterClosed().subscribe(result => {
//     console.log(`Dialog result: ${result}`);
//   });

// }
//post card data in json 
}
