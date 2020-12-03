import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookListComponent} from './components/book-list/book-list.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
    {
      path: 'books',
      children: [
        {path: 'list', component: BookListComponent}
      ]
    },
    {path: 'home', component: HomeComponent},
    {path: '**', component: HomeComponent, pathMatch: 'full'}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
