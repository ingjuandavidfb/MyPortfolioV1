import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectHeaderComponent } from './project-header/project-header.component';
import { ProjectBodyComponent } from './project-body/project-body.component';
import { ProjectFooterComponent } from './project-footer/project-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectHeaderComponent,
    ProjectBodyComponent,
    ProjectFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
