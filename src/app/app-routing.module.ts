import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NewsComponent} from './news/news.component';
import {SolutionComponent} from './solution/solution.component';
import {AboutComponent} from './about/about.component';
import {SociatyComponent} from './sociaty/sociaty.component';
import {HotnewsComponent} from './hotnews/hotnews.component';
import {WelcomeComponent} from "./welcome/welcome.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children : [
      {path: 'solution', component: SolutionComponent},
      {path: 'about', component: AboutComponent},
      {path: '**', component: SolutionComponent},
    ]
  },
  {
    path: 'news',
    component: NewsComponent,
    children : [
      {path: 'sociaty', component: SociatyComponent},
      {path: 'hotnews', component: HotnewsComponent},
      {path: '**', component: SociatyComponent},
    ]
  },
  {
    path: 'news/:nid',
    component: NewsComponent
  },
  {
    /*通配符:默认显示首页*/
    path: '**',
    component: WelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
