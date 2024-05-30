import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'employee', redirectTo: '/employee', pathMatch: 'full' },
  { path: 'employee/:id', redirectTo: '/employee/:id' },
  { path: 'about', redirectTo: '/about', pathMatch: 'full' },
  { path: 'waveform', redirectTo: '/waveform', pathMatch: 'full' },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
