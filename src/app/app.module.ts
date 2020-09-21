import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PrevNextComponent } from './shared/components/prev-next/prev-next.component';
import { SvgIconsModule } from './shared/components/svg-icons/svg-icons.module';
import { NgbPaginationModule, NgbAlertModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from "./shared/services/data.service";
import { FormsModule } from '@angular/forms';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PortalComponent } from './components/portal/portal.component';
import { HttpClientModule } from "@angular/common/http"


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavigationComponent,
    PrevNextComponent,
    PortfolioComponent,
    PortalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TableModule,
    PaginatorModule,
    SvgIconsModule,
    NgbDropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
