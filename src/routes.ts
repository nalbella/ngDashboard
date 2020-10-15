import { Routes } from '@angular/router';
import { SectionTripsVolumeComponent } from './app/sections/section-trips-volume/section-trips-volume.component';
import { SectionLastTripsComponent } from './app/sections/section-last-trips/section-last-trips.component';
import { SectionLastOffersComponent } from './app/sections/section-last-offers/section-last-offers.component';
import { SectionDriverStatusComponent } from './app/sections/section-driver-status/section-driver-status.component';

export const appRoutes: Routes = [
    { path: 'tripsVolume', component: SectionTripsVolumeComponent},
    { path: 'lastTrips', component: SectionLastTripsComponent},
    { path: 'lastOffers', component: SectionLastOffersComponent},
    { path: 'driverStatus', component: SectionDriverStatusComponent},

    { path: '', redirectTo: '/trips', pathMatch: 'full'},
];