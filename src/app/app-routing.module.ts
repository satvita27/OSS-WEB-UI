import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KanbanComponent } from './kanbanBoard/kanbar.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'kanbanBoard', component:KanbanComponent,canActivate: [AuthGuard] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
            HttpClientModule,],
  exports: [RouterModule]
})

export class AppRoutingModule { }
