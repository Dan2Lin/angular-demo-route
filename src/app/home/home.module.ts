import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home.component";
import {SolutionComponent} from "../solution/solution.component";
import {AboutComponent} from "../about/about.component";

const routes: Routes = [
  {
    path: '', //注意这里的主路径是空,因为在父模块中已经定义了前缀
    component: HomeComponent,
    children : [
      {path: 'solution', component: SolutionComponent},
      {path: 'about', component: AboutComponent},
      {path: '**', component: SolutionComponent},
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)  //因为是子模块,所以在这里使用的是forChild方法
  ],
  declarations: [
    HomeComponent,  //子模块的组件必须在子模块中声明,否则会导致报错：Component HomeComponent is not part of any NgModule
    SolutionComponent, //同上
    AboutComponent, //同上
  ],
  exports: [
    RouterModule,
    HomeComponent
  ]
})
export class HomeModule { }
