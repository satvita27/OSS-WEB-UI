import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { KanbanComponent } from './kanbanBoard/kanbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    KanbanComponent,
    HeaderComponent,
    FooterComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
platformBrowserDynamic().bootstrapModule(AppModule);
