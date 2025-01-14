import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FloatLabelModule, InputTextModule, FormsModule, ButtonModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  national_id: string = '';
  email: string = '';
  password: string = '';
  loading: boolean = false;
  signupLoading: boolean = false;
  telephone: string = '';

  constructor(private router: Router) {
    if (window.localStorage.getItem('user')) {
      this.router.navigate(['/reserve-flow']);
    }
  }

  login() {
    this.loading = true;
    const user = {
      national_id: this.national_id,
      email: this.email,
      password: this.password,
      telephone: this.telephone,
    };
    window.localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/reserve-flow']);
  }

  register() {
    this.signupLoading = true;
    this.router.navigate(['/register']);
  }
}
