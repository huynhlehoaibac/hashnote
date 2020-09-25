import { Component, OnInit } from '@angular/core';
import { NoteQuery } from '../shared/state/note.query';
import { NoteService } from '../shared/state/note.service';
import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  notes$ = this.noteQuery.selectAll();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private noteQuery: NoteQuery,
    private noteService: NoteService
  ) {}

  ngOnInit(): void {
    this.noteService.get().subscribe();
  }

  onClick(id: number): void {
    this.router.navigate(['../', id, 'edit'], {
      relativeTo: this.route,
    });
  }
}
