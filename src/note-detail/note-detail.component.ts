import { Component, inject } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { NOTES, Note } from '../notes';


@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css'
})
export class NoteDetailComponent {
  activeRoute = inject(ActivatedRoute);
  router = inject(Router);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  note = NOTES.find((i) => i.id === this.id);

  delete(note: Note){
    let index = NOTES.indexOf(note, 0); 
    NOTES.splice(index, 1);
    this.router.navigateByUrl('/notes');
  }
  
}
