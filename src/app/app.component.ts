import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from  '../header/header.component';
import { NotesListComponent } from '../notes-list/notes-list.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators  } from '@angular/forms';

import { AddNoteComponent } from '../add-note/add-note.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AddNoteComponent, NotesListComponent, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myNotesApp';
  name = 'dude';
  showName(){
    alert(this.name);
  }
  name1 = new FormControl('Bob');
  colour = new FormControl('purple');
  showName1() {
    alert(this.name1.value);
  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  login() {
    alert(
      this.loginForm.value.username +
      ' | ' + 
      this.loginForm.value.password
    );
  }

  

}


