import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { filter, map, mergeMap, takeLast, takeUntil } from 'rxjs/operators';
import { SearchserviceService } from '../searchservice.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchservice:SearchserviceService) { }
  searchQuery
  food:any[]=[]
  ngOnInit() {
  
      this.searchservice.get().subscribe((res:any)=>{
        console.log('search data',res);
  this.food=res.feed
        
      })
      // this.searchservice.get().pipe(filter((item):any =>{
      //   console.log('this iis teh item',item);
        
      // //  item.display.displayName.toLowerCase().includes(this.searchQuery.toLowerCase())
      // }))     s
     }

  
}
