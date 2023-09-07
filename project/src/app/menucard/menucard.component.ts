import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
import { ServiceforloginService } from '../serviceforlogin.service';
import { AddtocardSERVICEService } from '../addtocard-service.service';

@Component({
  selector: 'app-menucard',
  templateUrl: './menucard.component.html',
  styleUrls: ['./menucard.component.css']
})
export class MenucardComponent implements OnInit   {
menu:any=[]
totalength:number=0
// public product:any=[]
array:any=[]
// public grandTotal !:number;

  constructor(private service:ServiceService,private ADDOTCARDSERVICE:AddtocardSERVICEService,private loginservice:ServiceforloginService){


    this.service.get().subscribe((res:any)=>{
      console.log('result',res);
      this.menu=res.hints

})


   }
  ngOnInit(): void {
    this.ADDOTCARDSERVICE.getProducts().subscribe(res=>{
      this.totalength=res.length
          })

          this.service.getalldata().subscribe((res:any)=>{
            console.log('this is the data',res);
            this.array=res
          })

          
  }
   
  get(){
    this.loginservice.get().subscribe(res=>{
  console.log('get method of menucard',res);
  
    })
  }

  addtocart(item:any){
    let obje={
      item:item
    }
    this.ADDOTCARDSERVICE.addToCard(item)
    this.loginservice.postdataofcard(obje).subscribe(
     )
       
  }
}