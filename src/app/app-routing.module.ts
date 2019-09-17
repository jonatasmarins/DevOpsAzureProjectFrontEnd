import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkItemComponent } from './work-item/work-item.component';
import { ConfigurationProjectComponent } from './configuration-project/configuration-project.component';


const routes: Routes = [
  { path: 'workItem', component: WorkItemComponent },
  { path: 'configuration', component: ConfigurationProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
