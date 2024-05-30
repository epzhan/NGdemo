import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaveformComponent } from './waveform.component';

const routes: Routes = [
  {path: 'waveform', component: WaveformComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaveformRoutingModule { }
