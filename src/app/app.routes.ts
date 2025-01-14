import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ReserveFlowComponent } from './reserve-flow/reserve-flow.component';
import { SuccessReservationComponent } from './success-reservation/success-reservation.component';
import { AllReservationsComponent } from './all-reservations/all-reservations.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'reserve-flow',
    component: ReserveFlowComponent,
  },
  {
    path: 'success',
    component: SuccessReservationComponent,
  },
  {
    path: 'reservations',
    component: AllReservationsComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];
