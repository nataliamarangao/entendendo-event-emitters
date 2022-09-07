import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilhoComponent } from './components/pai/filho/filho.component';
import { PaiComponent } from './components/pai/pai.component';

const routes: Routes = [
  { path: 'pai', component: PaiComponent },
  { path: 'filho', component: FilhoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
