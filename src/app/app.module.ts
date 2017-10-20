import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { SociatyComponent } from './sociaty/sociaty.component';
import { HotnewsComponent } from './hotnews/hotnews.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { AdminComponent } from './admin/admin.component';
import {AuthGuardService} from "./service/auth-guard.service";
import {LoginService} from "./service/login.service";
import {DialogService} from "./service/dialog.service";

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
    path: 'admin',
    component: AdminComponent,
    canActivate :[AuthGuardService],
    canDeactivate:[AuthGuardService]
  },
  {
    path: 'news/:nid',
    component: NewsComponent
  },
  {
    path: 'chat',
    component: ChatComponent,
    outlet: 'aux'   //输出到name=aux的插座上
  },
  {
    path: 'login',
    component: LoginComponent
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
    LoginComponent,
    ChatComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuardService,
    LoginService,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
