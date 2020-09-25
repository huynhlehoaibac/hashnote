import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { NoteState, NoteStore } from './note.store';

@Injectable()
export class NoteQuery extends QueryEntity<NoteState> {
  constructor(protected store: NoteStore) {
    super(store);
  }
}
