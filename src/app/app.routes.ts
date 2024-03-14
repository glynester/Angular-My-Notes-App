import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AddNoteComponent } from '../add-note/add-note.component';
import { NotesListComponent } from '../notes-list/notes-list.component';
import { NoteDetailComponent } from '../note-detail/note-detail.component';
import { PlayAreaComponent } from '../play-area/play-area.component';

// export const routes: Routes = [];

export const routes: Routes = [
  { path: '', title: 'Home Page', component: HomeComponent },
  { path: 'home', title: 'Home Page', component: HomeComponent },
  { path: 'contacts', title: 'Contacts Page', component: ContactsComponent },
  // { path: 'new', component: AddNoteComponent },
  { path: 'notes/new', title: 'New Note', component: AddNoteComponent },
  { path: 'notes', title: 'All Note',component: NotesListComponent },
  { path: 'note/:id', title: 'Note Detail',component: NoteDetailComponent },
  { path: 'play', title: 'Play Area',component: PlayAreaComponent},
  { path: '**', title: 'Page Not Found', component: NotFoundComponent },
];
