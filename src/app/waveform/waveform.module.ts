import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { WaveformRoutingModule } from './waveform-routing.module';
import { WaveformComponent } from './waveform.component';
import { WaveformService } from './waveform.service';

@NgModule({
  declarations: [
    WaveformComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    WaveformRoutingModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [WaveformService]
})
export class WaveformModule { }
