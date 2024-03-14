import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  // `
  //   <div>
  //     <h1>{{title}}</h1>
  //     <p>
  //       Header Component
  //     </p>
  //     <p>
  //       Hello {{name}}!!!
  //     </p>
  //     <p [class.red]="isRed">some text for our page</p>
  //     <button (click)="change()">Switch Background Color</button>
  //   </div>
  // ` ,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  name = "Glenn";
  title = "My Ang Notes";
  isRed = false;

  change() {
    this.isRed = !this.isRed;
  }
}
