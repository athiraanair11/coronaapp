import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcoronaComponent } from './addcorona/addcorona.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewallcoronaComponent } from './viewallcorona/viewallcorona.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const myroutes=[

  {path:"",component:AddcoronaComponent},
  {path:"view",component:ViewallcoronaComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddcoronaComponent,
    NavbarComponent,
    ViewallcoronaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
