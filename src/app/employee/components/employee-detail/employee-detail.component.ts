import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailComponent implements OnInit {

  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(
      take(1),
      tap(i => this.id = this.route.snapshot.url[1].path)
    ).subscribe();
  }
}
