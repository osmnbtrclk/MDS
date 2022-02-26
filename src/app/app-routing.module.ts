import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddRestourantComponent} from './add-restourant/add-restourant.component'
import { ListMDSComponent } from './list-mds/list-mds.component';
import { UpdateMDSComponent } from './update-mds/update-mds.component';
import { LoginComponent } from './login/login.component'; 
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {
    component:AddRestourantComponent,
    path:'add'
  },
  {
    component:ListMDSComponent,
    path:'list'
  },
  {
    component:UpdateMDSComponent,
    path:'update/:id'
  },
  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:RegisterComponent,
    path:'register'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
