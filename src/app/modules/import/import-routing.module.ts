import { ImportComponent } from './import.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: ImportComponent,
    children: [
      { path: 'portfolio/:id', component: ImportComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportRoutingModule { }
