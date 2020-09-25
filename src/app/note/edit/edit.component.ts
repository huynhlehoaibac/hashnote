import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ID } from '@datorama/akita';
import { switchMap } from 'rxjs/operators';
import { Note } from '../shared/state/note.model';
import { NoteQuery } from '../shared/state/note.query';
import { NoteService } from '../shared/state/note.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EditComponent implements OnInit {
  note$ = this.noteQuery.selectEntity(1);

  content: string;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private noteService: NoteService,
    private noteQuery: NoteQuery
  ) {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => params.get('id')),
      switchMap((id: ID) => this.noteService.get(id))
    ).subscribe();

    // this.noteService.get();

    this.form = this.fb.group({
      content: [],
    });

    this.note$.subscribe((note: Note) => {
      this.form.patchValue({ content: note.content });
    });
  }

  ngOnInit(): void {}

  onEdit(): void {
    const data = this.form.value;
  }
}
