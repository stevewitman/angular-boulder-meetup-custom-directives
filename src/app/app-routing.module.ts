import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Example1Component } from './components/example1/example1.component';
import { Example2Component } from './components/example2/example2.component';
import { Example3Component } from './components/example3/example3.component';
import { Example4Component } from './components/example4/example4.component';
import { Example5Component } from './components/example5/example5.component';
import { Example6Component } from './components/example6/example6.component';
import { Example7Component } from './components/example7/example7.component';

const routes: Routes = [
  {
    path: 'ex1',
    component: Example1Component,
  },
  {
    path: 'ex2',
    component: Example2Component,
  },
  {
    path: 'ex3',
    component: Example3Component,
  },
  {
    path: 'ex4',
    component: Example4Component,
  },
  {
    path: 'ex5',
    component: Example5Component,
  },
  {
    path: 'ex6',
    component: Example6Component,
  },
  {
    path: 'ex7',
    component: Example7Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
