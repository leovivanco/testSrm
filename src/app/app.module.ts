import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SearchComponent } from './components/side-bar/search/search.component';
import { MenuComponent } from './components/side-bar/menu/menu.component';
import { PanelComponent } from './components/panel/panel.component';
import { BreadCrumbComponent } from './components/panel/bread-crumb/bread-crumb.component';
import { HeaderPanelComponent } from './components/panel/header-panel/header-panel.component';
import { AtalhosComponent } from './components/panel/atalhos/atalhos.component';
import { AlertasComponent } from './components/panel/alertas/alertas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    SearchComponent,
    MenuComponent,
    PanelComponent,
    BreadCrumbComponent,
    HeaderPanelComponent,
    AtalhosComponent,
    AlertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
