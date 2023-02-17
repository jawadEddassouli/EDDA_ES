import { Component } from '@angular/core';
import { Nano } from './nano/nano.module';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EDDA_ES';

  nani: Nano[]=[new Nano(1, "Dotto"), new Nano(2,"Brontolo"), new Nano(3,"Pisolo"), new Nano(4,"Mammolo"), new Nano(5,"Gongolo"), new Nano(6,"Eolo"), new Nano(7,"Cucciolo") ]

  stringInter : string = "ciao"
  classe = "ita"

  lettera: string = "ciao"
  aggiungi(){
    this.lettera+= "a"
  }
  twoWayBinding= "ciao"
}
