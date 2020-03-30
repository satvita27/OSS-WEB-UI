import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KanbanComponent } from './kanbanBoard/kanbar.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'kanbanBoard', component:KanbanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
