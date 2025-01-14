import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-reservations',
  imports: [TableModule, CardModule, DividerModule, ButtonModule, CommonModule],
  standalone: true,
  templateUrl: './all-reservations.component.html',
  styleUrl: './all-reservations.component.scss',
})
export class AllReservationsComponent {
  reservations: any = window.localStorage.getItem('reservations');
  user: any = window.localStorage.getItem('user');

  constructor(private router: Router) {
    if (this.reservations) {
      this.reservations = JSON.parse(this.reservations);
    }
    if (this.user) {
      this.user = JSON.parse(this.user);
    }
    console.log(this.reservations);
    console.log(this.user);
  }

  goToReservation(reservation: any) {
    window.localStorage.setItem(
      'last_reservation',
      JSON.stringify(reservation)
    );
    this.router.navigateByUrl('/success?key=view');
    // this.router.navigate(['/reservations']);
  }
}
