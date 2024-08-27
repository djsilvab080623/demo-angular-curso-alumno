import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno-dto';
import { alumnos } from './mock';

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent implements OnInit {

  alumnos? : Array<Alumno> = [];

  constructor() { }

  ngOnInit(): void {
    this.alumnos = alumnos;
  }

}
