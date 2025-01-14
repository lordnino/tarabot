import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  user: any;

  constructor(private router: Router, private eventService: EventService) {
    this.user = window.localStorage.getItem('user');
    if (this.user) {
      this.user = JSON.parse(this.user);
    }
    console.log(this.user);
    this.eventService.eventObservable.subscribe((data: any) => {
      console.log('dataaaa', data);
      if (data) {
        this.user = JSON.parse(window.localStorage.getItem('user') as any);
      }
    });
  }

  goToLogin() {
    if (window.localStorage.getItem('user')) {
      this.router.navigate(['/reserve-flow']);
      return;
    }
    console.log('goToLogin');
    this.router.navigate(['/login']);
  }

  goToReservations() {
    console.log('goToReservations');
    if (window.localStorage.getItem('user')) {
      console.log('goToReservations !!!!');
      this.router.navigate(['/reservations']);
      return;
    }
    this.router.navigate(['/login']);
  }

  logout() {
    window.localStorage.clear();
    this.router.navigate(['/login']);
    this.user = null;
  }
}
