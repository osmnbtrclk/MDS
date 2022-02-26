import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
url=" http://localhost:3000/restaurants" 
  constructor(private http:HttpClient) { }
  getList()
   {
    return this.http.get(this.url);
   }
   saveRestourant(data:any)
   {
     
    return this.http.post(this.url,data)
   }

   deleteRestourant(id:any)
   {
    return this.http.delete(`${this.url}/${id}`)
   }

   getRestourant(id:any)
   {
    return this.http.get(`${this.url}/${id}`)
   }

   updateRestourant(id:any,data:any)
   {
    return this.http.put(`${this.url}/${id}`,data)
   }
}
