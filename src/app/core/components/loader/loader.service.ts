import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { logger } from '../../helper/log';
const log = logger('LoaderService');

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private apiCount = 0;
  private isLoading$ = new Subject<boolean>();

  constructor() { }

  getIsLoading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  show() {
    log.debug(`show# ${this.apiCount}`);
    log.debug('show#2', this.apiCount);
    if (this.apiCount === 0) {
      this.isLoading$.next(true);
    }
    this.apiCount++;
  }

  hide() {
    log.debug(`hide# ${this.apiCount}`);
    this.apiCount--;
    if (this.apiCount === 0) {
      this.isLoading$.next(false);
    }
  }
}
