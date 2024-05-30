import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WaveformService } from './waveform.service';

@Component({
  selector: 'app-waveform',
  templateUrl: './waveform.component.html',
  styleUrls: ['./waveform.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WaveformComponent {

  facts$:Observable<string>;

  constructor(
    private waveformService: WaveformService
  ) { }

  getMeowFacts() {
    this.facts$ = this.waveformService.getMeowFacts();
  }
}
