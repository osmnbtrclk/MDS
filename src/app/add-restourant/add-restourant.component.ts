import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestaurantsService } from '../restaurants.service';
@Component({
  selector: 'app-add-restourant',
  templateUrl: './add-restourant.component.html',
  styleUrls: ['./add-restourant.component.css']
})
export class AddRestourantComponent implements OnInit {
  alert:boolean=false
  addRestourant = new FormGroup(
    {
      name: new FormControl(''),
      type:new FormControl(''),
      state:new FormControl(''),
      county:new FormControl(''),
      date:new FormControl('')

    }
  )
  constructor(private restourant:RestaurantsService) { }

  ngOnInit(): void {
  }
  collectRestourant()
  {
    // console.warn(this.addRestourant.value)
    this.restourant.saveRestourant(this.addRestourant.value).subscribe((result)=>
    {
      console.warn("res",result)
      this.alert=true
      this.addRestourant.reset({});
    })
   
    
  }
  closeAlert(){
    this.alert=false
  }
}
