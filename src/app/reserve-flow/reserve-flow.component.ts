import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { CardModule } from 'primeng/card';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { RolesAndPermComponent } from '../roles-and-perm/roles-and-perm.component';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DatePickerModule } from 'primeng/datepicker';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserve-flow',
  standalone: true,
  imports: [
    ButtonModule,
    StepperModule,
    CardModule,
    SelectModule,
    FormsModule,
    RolesAndPermComponent,
    CommonModule,
    CheckboxModule,
    FloatLabelModule,
    InputTextModule,
    DatePickerModule,
    DividerModule,
    FieldsetModule,
  ],
  templateUrl: './reserve-flow.component.html',
  styleUrl: './reserve-flow.component.scss',
})
export class ReserveFlowComponent {
  governrate: any;
  branch: any;
  service: any;
  roles: any;
  user_data: any = {
    first_name: '',
    second_name: '',
    third_name: '',
    foruth_name: '',
    national_id: '',
    birth_date: '01/01/1999',
    gender: '',
    job: '',
    address: '',
    type: '',
  };
  reserve_date: any = '01/01/2025';

  types: any[] = [
    {
      id: 1,
      name: 'اول مره',
    },
    {
      id: 2,
      name: 'تجديد',
    },
    {
      id: 3,
      name: 'بدل فاقد',
    },
    {
      id: 4,
      name: 'بدل تالف',
    },
  ];

  genders: any[] = [
    {
      id: 1,
      name: 'ذكر',
    },
    {
      id: 2,
      name: 'أنثى',
    },
  ];

  services: any[] = [
    {
      id: 1,
      name: 'بطاقه رقم قومي',
    },
    {
      id: 2,
      name: 'شهاده ميلاد',
    },
    {
      id: 3,
      name: 'شهاده وفاه',
    },
    {
      id: 4,
      name: 'شهاده زواج',
    },
    {
      id: 5,
      name: 'قيد عائلي',
    },
  ];

  branches = [
    {
      id: 1,
      name: 'سيتي ستارز',
    },
    {
      id: 2,
      name: 'سيتي سنتر الماظه',
    },
    {
      id: 3,
      name: 'داندي مول',
    },
    {
      id: 3,
      name: 'ماكسيم مول',
    },
  ];
  governrates = [
    { id: 1, name: 'القاهرة' },
    { id: 2, name: 'الجيزة' },
    { id: 3, name: 'الإسكندرية' },
    { id: 4, name: 'الدقهلية' },
    { id: 5, name: 'الشرقية' },
    { id: 6, name: 'القليوبية' },
    { id: 7, name: 'البحيرة' },
    { id: 8, name: 'الغربية' },
    { id: 9, name: 'المنوفية' },
    { id: 10, name: 'كفر الشيخ' },
    { id: 11, name: 'دمياط' },
    { id: 12, name: 'بورسعيد' },
    { id: 13, name: 'الإسماعيلية' },
    { id: 14, name: 'السويس' },
    { id: 15, name: 'الفيوم' },
    { id: 16, name: 'بني سويف' },
    { id: 17, name: 'المنيا' },
    { id: 18, name: 'أسيوط' },
    { id: 19, name: 'سوهاج' },
    { id: 20, name: 'قنا' },
    { id: 21, name: 'أسوان' },
    { id: 22, name: 'الأقصر' },
    { id: 23, name: 'البحر الأحمر' },
    { id: 24, name: 'مطروح' },
    { id: 25, name: 'شمال سيناء' },
    { id: 26, name: 'جنوب سيناء' },
    { id: 27, name: 'الوادي الجديد' },
  ];

  user: any;
  times: any;
  selected_time: any;

  constructor(private router: Router) {
    console.log('constructor');
    if (window.localStorage.getItem('user')) {
      this.user = JSON.parse(window.localStorage.getItem('user') as any);
      console.log(this.user);
      this.user_data.national_id = this.user.national_id;
    }
    this.times = this.generateTimeInevals();
    console.log(this.times);
  }

  generateTimeInevals() {
    const timeIntervals = [];

    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const formattedHour = String(hour).padStart(2, '0');
        const formattedMinute = String(minute).padStart(2, '0');
        timeIntervals.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return timeIntervals;
  }

  selectTime(time: string) {
    this.selected_time = time;
  }

  pay() {
    const reservation = {
      user: this.user,
      reserve_date: this.reserve_date,
      selected_time: this.selected_time,
      service: this.service,
      roles: this.roles,
      user_data: this.user_data,
      branch: this.branch,
      governrate: this.governrate,
    };
    window.localStorage.setItem(
      'last_reservation',
      JSON.stringify(reservation)
    );
    let reservations;
    if (window.localStorage.getItem('reservations')) {
      reservations = JSON.parse(
        window.localStorage.getItem('reservations') as any
      );
      reservations.push(reservation);
    } else {
      reservations = [reservation];
    }
    window.localStorage.setItem('reservations', JSON.stringify(reservations));
    this.router.navigate(['/success']);
  }
}
