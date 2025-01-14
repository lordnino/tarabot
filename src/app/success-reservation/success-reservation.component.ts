import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-success-reservation',
  imports: [
    CardModule,
    DividerModule,
    FieldsetModule,
    ButtonModule,
    CommonModule,
  ],
  standalone: true,
  templateUrl: './success-reservation.component.html',
  styleUrl: './success-reservation.component.scss',
})
export class SuccessReservationComponent {
  reservation: any = window.localStorage.getItem('last_reservation');
  user: any = window.localStorage.getItem('user');
  mode: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.mode = params.key;
    });
    if (this.reservation) {
      this.reservation = JSON.parse(this.reservation);
    }
    if (this.user) {
      this.user = JSON.parse(this.user);
    }
    console.log(this.reservation);
    console.log(this.user);
  }

  goToReservations() {
    this.router.navigate(['/reservations']);
  }
}
