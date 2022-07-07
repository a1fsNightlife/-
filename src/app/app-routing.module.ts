import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatenschutzComponent } from './components/datenschutz/datenschutz.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: 'todoList', component: TodoListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
