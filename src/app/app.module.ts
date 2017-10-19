import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { SociatyComponent } from './sociaty/sociaty.component';
import { HotnewsComponent } from './hotnews/hotnews.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren :'./home/home.module#HomeModule'
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
  declarations: [
    AppComponent,
    NewsComponent,
    SociatyComponent,
    HotnewsComponent,
    WelcomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
