import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';

@NgModule({
  declarations: [DefaultLayoutComponent],
  imports: [CommonModule, RouterModule, ClarityModule, HttpClientModule],
  exports: [DefaultLayoutComponent],
})
export class LayoutModule {}
