import { ID } from '@datorama/akita';

export interface Note {
  id: ID;
  content: string;
  hashTags: string[];
  mentions: string[];
}

export function createNote(params: Partial<Note>) {
  return {} as Note;
}
