import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tieneCursos : boolean = true;
  
  changeTable(): void{
    this.tieneCursos = !this.tieneCursos;
  }

}
