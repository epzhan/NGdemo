import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log('ngOnInit#');
    localStorage.setItem('123', '22');
    localStorage.setItem('222', 'aaa');
  }
}
