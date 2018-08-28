import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from  '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ServicesComponent } from './services/services.component';
import { StaffComponent } from './staff/staff.component';
import { SearchComponent } from './search/search.component';

const routerConfig : Routes = [
  {path: 'home', component : HomeComponent},
  {path: 'about', component : AboutComponent},
  {path: 'staff', component : StaffComponent},
  {path: 'service', component : ServicesComponent},
  {path: 'contact', component : ContactComponent},
  {path: 'search', component : SearchComponent},
  {path:'',redirectTo :'/home', pathMatch : "full"},
  // { path : '**', component : PagenotfoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    PagenotfoundComponent,
    ServicesComponent,
    StaffComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routerConfig),
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
