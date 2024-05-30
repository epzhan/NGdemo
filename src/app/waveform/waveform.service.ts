import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MeowFacts } from './waveform';

const MEOW_FACT_URL = 'https://meowfacts.herokuapp.com/';

@Injectable()
export class WaveformService {

  constructor(
    private http: HttpClient
  ) { }

  getMeowFacts(): Observable<string> {
    return this.http.get<MeowFacts>(MEOW_FACT_URL).pipe(
      map((res: MeowFacts) => {
        return res.data[0];
      })
    );
  }
}
