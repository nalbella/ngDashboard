import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { appRoutes } from '../routes';

import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionTripsVolumeComponent } from './sections/section-trips-volume/section-trips-volume.component';
import { SectionLastTripsComponent } from './sections/section-last-trips/section-last-trips.component';
import { SectionLastOffersComponent } from './sections/section-last-offers/section-last-offers.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LieChartComponent } from './charts/lie-chart/lie-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { SectionDriverStatusComponent } from './sections/section-driver-status/section-driver-status.component';
import { DriverComponent } from './driver/driver.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionTripsVolumeComponent,
    SectionLastTripsComponent,
    SectionLastOffersComponent,
    BarChartComponent,
    LieChartComponent,
    PieChartComponent,
    SectionDriverStatusComponent,
    DriverComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
