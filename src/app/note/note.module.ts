import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { LayoutModule } from '@layout/layout.module';
import { TextareaHighlightModule } from 'src/app/textarea-highlight';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { NoteRoutingModule } from './note-routing.module';

@NgModule({
  declarations: [ListComponent, CreateComponent],
  imports: [
    CommonModule,
    NoteRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    ClarityModule,
    TextareaHighlightModule,
  ],
})
export class NoteModule {}
