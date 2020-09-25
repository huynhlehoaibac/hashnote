import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Note } from './note.model';

export interface NoteState extends EntityState<Note> {}

@StoreConfig({ name: 'note' })
@Injectable()
export class NoteStore extends EntityStore<NoteState> {
  constructor() {
    super();
  }
}
