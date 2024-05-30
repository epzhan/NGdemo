import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, tap, map } from 'rxjs/operators';
import { Appinfo } from '../model/appinfo.model';
import { DataService } from './data.service';

const CONFIG_URL = '../assets/config.dev.json';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(
    private http: HttpClient,
    private dataService: DataService
  ) { }

  // private getTesting(): Observable<Appinfo> {
  //   return this.http.get<Appinfo>(CONFIG_URL);
  // }

  getConfig(): Observable<string> {
    return this.http.get<Appinfo>(CONFIG_URL).pipe(
      //tap(i => console.log('testing-getConfig 12 12 #', i)),
      switchMap((i: Appinfo) => {
        //console.log(i.description);
        this.dataService.setNewAppinfo(i);
        return of(i.description);
      })
    );
  }
}
