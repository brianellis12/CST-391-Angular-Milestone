import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My Time Entries';
  version = 1.0;

  constructor(private router: Router) {}

  displayVersion() {
    window.alert(`Version is ${this.version}`);
  }

  displayArtistList() {
    // window.alert('display list here');
    this.router.navigate(['list-artists'], {
      queryParams: { data: new Date() },
    });
  }
}
