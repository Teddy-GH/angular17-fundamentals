import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListModule } from './usersList/usersList.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersListModule,
    RegisterModule,
    LoginModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
