import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  // Create a BehaviorSubject with an initial value
  private eventSubject = new BehaviorSubject<any>(null);

  // Expose the BehaviorSubject as an Observable
  eventObservable = this.eventSubject.asObservable();

  // Emit data to subscribers
  emitEvent(data: any) {
    this.eventSubject.next(data);
  }
}
