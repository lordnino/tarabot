import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FloatLabelModule, InputTextModule, FormsModule, ButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  national_id: string = '';
  email: string = '';
  password: string = '';
  confirm_password: string = '';
  loading: boolean = false;
  signupLoading: boolean = false;
  telephone: string = '';

  constructor(private router: Router) {}

  register() {
    this.signupLoading = true;
    const user = {
      national_id: this.national_id,
      email: this.email,
      password: this.password,
      telephone: this.telephone,
    };
    window.localStorage.setItem('user', JSON.stringify(user));
  }
}
