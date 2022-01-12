import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatenschutzComponent } from './components/datenschutz/datenschutz.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
