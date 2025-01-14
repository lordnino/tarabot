import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tarabot';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // this.router.navigate(['/login']);
    console.log(this.activatedRoute);
  }
}
