import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
@Component({
  selector: 'app-list-mds',
  templateUrl: './list-mds.component.html',
  styleUrls: ['./list-mds.component.css']
})
export class ListMDSComponent implements OnInit {

  constructor(private mdsrestourant: RestaurantsService) { }
  collection: any = [];
  ngOnInit(): void {
    this.mdsrestourant.getList().subscribe((result) => {
      console.warn(result)
      this.collection = result
    })
  }
  deleteRestourant(item:any)
  {
    this.collection.splice(item-1,1)
    this.mdsrestourant.deleteRestourant(item).subscribe((result)=> {
    console.warn("resu",result)
})
  }
}
