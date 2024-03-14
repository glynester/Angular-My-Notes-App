import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-play-area',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule,],
  templateUrl: './play-area.component.html',
  styleUrl: './play-area.component.css'
})
export class PlayAreaComponent {
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
