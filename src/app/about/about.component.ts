import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable, filter, startWith } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AboutService } from './about.service';
import { logger } from '../core/helper/log';
const log = logger('AboutComponent');

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {

  appState$: Observable<boolean>;
  param = { value: 'world' };

  constructor(
    private aboutService: AboutService
  ) { }

  ngOnInit(): void {
    this.appState$ = this.aboutService.getAppState().pipe(
      tap(i => log.debug('getAppState#', i)),
      startWith(false)
    );
  }

  testClick(text: string) {
    log.warn('123', text);

    this.aboutService.updateAppState(!this.aboutService.AppState);
  }
}
