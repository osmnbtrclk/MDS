import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../restaurants.service';
@Component({
  selector: 'app-update-mds',
  templateUrl: './update-mds.component.html',
  styleUrls: ['./update-mds.component.css']
})

export class UpdateMDSComponent implements OnInit {
  alert=false;
  updateRestourant = new FormGroup(
    {
      name: new FormControl(''),
      type: new FormControl(''),
      state: new FormControl(''),
      county: new FormControl(''),
      date: new FormControl('')

    }

  )

  constructor(private router: ActivatedRoute, private restourant: RestaurantsService) { }

  ngOnInit(): void {

    console.warn(this.router.snapshot.params['id'])
    this.restourant.getRestourant(this.router.snapshot.params['id']).subscribe((result:any) => {
      console.warn(result)

      this.updateRestourant = new FormGroup(
        {
          name: new FormControl(result["name"]),
          type: new FormControl(result.type),
          state: new FormControl(result.state),
          county: new FormControl(result.county),
          date: new FormControl(result.date)

        })
    })
  }

  collection()
  {
    console.warn("Edit:",this.updateRestourant.value)
    this.restourant.updateRestourant(this.router.snapshot.params["id"],this.updateRestourant.value).subscribe((result)=>
    console.warn(result))
    this.alert=true
  }
  closeAlert()
  {
    this.alert=false
  }
}
