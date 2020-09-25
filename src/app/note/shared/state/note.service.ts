import { Injectable } from '@angular/core';
import {
  NgEntityService,
  NgEntityServiceConfig,
} from '@datorama/akita-ng-entity-service';
import { NoteState, NoteStore } from './note.store';

@NgEntityServiceConfig({
  resourceName: 'notes',
})
@Injectable()
export class NoteService extends NgEntityService<NoteState> {
  constructor(protected store: NoteStore) {
    super(store);
  }

  search(keyword: string) {
    return this.get({ params: [{ name: keyword }] });
  }
}
