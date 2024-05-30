import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private appState$ = new ReplaySubject<boolean>(1);
  private appState: boolean;

  constructor() { }

  get AppState(): boolean{
    return this.appState;
  }

  getAppState(): Observable<boolean> {
    return this.appState$.asObservable();
  }

  setAppState(value: boolean) {
    this.appState$.next(value);
  }

  updateAppState(value: boolean) {
    this.appState = value;
    this.setAppState(this.appState);
  }
}
