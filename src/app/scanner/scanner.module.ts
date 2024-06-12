import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScannerRoutingModule } from './scanner-routing.module';
import { ScannerComponent } from './scanner.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ScannerService } from './scanner.service';

@NgModule({
  declarations: [
    ScannerComponent
  ],
  imports: [
    CommonModule,
    ScannerRoutingModule,
    ZXingScannerModule
  ],
  providers: [ScannerService]
})
export class ScannerModule { }
