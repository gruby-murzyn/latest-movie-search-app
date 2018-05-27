import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { MoveComponent} from './move/move.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './services/movies.service';
import { FormsModule } from '@angular/forms';  //<<<< import it here
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule, MatGridListModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
@NgModule({ // NgModule is a way to organize your dependencies for 1. the compiler and 2. dependency injection.
  declarations: [ //declarations are to make directives (including components and pipes) from the current module available to other directives in the current module. 
    AppComponent,
    MoviesComponent,
    MoveComponent,
    LoginComponent
  
  ],
  imports: [ //imports makes the exported declarations of other modules available in the current module
    BrowserModule,
    HttpModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'', component: MoviesComponent},
      {path:'login', component: LoginComponent},
      {path:'movie/:id', component: MoveComponent}
    ]),
    JsonpModule
  ],
  providers:[MoviesService],//providers are to make services and values known to DI.
  bootstrap: [AppComponent]
})
export class AppModule { }
