import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Appinfo } from 'src/app/core/model/appinfo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private appinfo$ = new ReplaySubject<Appinfo>(1);
  private appinfo: Appinfo;

  constructor() { }

  get AppInfo(): Appinfo {
    return this.appinfo;
  }

  getAppinfo(): Observable<Appinfo> {
    return this.appinfo$.asObservable();
  }

  // setAppinfo(value: Appinfo) {
  //   this.appinfo$.next(value);
  // }

  setNewAppinfo(value: Appinfo) {
    this.appinfo = value;
    this.appinfo$.next(this.appinfo);
  }
}
