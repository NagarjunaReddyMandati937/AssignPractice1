import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice1';
  clicked = 'details displayed';
  show_text = false;
  log = [];

  onclick(){
    this.clicked='not displayed';
  }
  onToogle(){
    this.show_text=! this.show_text;
    this.log.push(this.log.length+1);
   // this.log.push(new Date);


  }
}
