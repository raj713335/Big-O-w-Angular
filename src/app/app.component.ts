import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bigo';

  collapseSidebar: boolean = false;

  toggleSidebar() {
    
    if(this.collapseSidebar == true)
    {
      this.collapseSidebar = false;
    }
    else
    {
      this.collapseSidebar = true;
    }
  }
}
