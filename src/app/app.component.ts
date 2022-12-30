import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ejemploAngular';

  protected mostrarName(nombreZona:string) {
    console.log(nombreZona);
    
  }
}
