import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso-dto';
import { cursos } from './mock';

@Component({
  selector: 'app-tabla-cursos',
  templateUrl: './tabla-cursos.component.html',
  styleUrls: ['./tabla-cursos.component.css']
})
export class TablaCursosComponent implements OnInit {

  cursos? : Array<Curso>;

  constructor() { }

  ngOnInit(): void {
    this.cursos = cursos;
  }

}
