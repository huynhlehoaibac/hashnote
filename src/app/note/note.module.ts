import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { LayoutModule } from '@layout/layout.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TextareaHighlightModule } from 'src/app/textarea-highlight';
import { environment } from 'src/environments/environment';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { NoteRoutingModule } from './note-routing.module';
import { InMemoryDataService } from './shared/in-memory-data.service';
import { NoteQuery } from './shared/state/note.query';
import { NoteService } from './shared/state/note.service';
import { NoteStore } from './shared/state/note.store';

@NgModule({
  declarations: [ListComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    NoteRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    ClarityModule,
    TextareaHighlightModule,
    HttpClientModule,
    environment.production
      ? []
      : HttpClientInMemoryWebApiModule.forFeature(InMemoryDataService, {
          delay: 100,
        }),
  ],
  providers: [
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: {
        baseUrl: '/api',
      },
    },
    NoteQuery,
    NoteStore,
    NoteService,
  ],
})
export class NoteModule {}
