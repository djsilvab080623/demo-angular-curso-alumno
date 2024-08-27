import { Curso } from "src/app/models/curso-dto";

export const cursos : Array<Curso> = [
    {
        materia: 'Javascript',
        dificultad: 9,
        requiere: 'HTML, CSS'
    },
    {
        materia: 'Typescript',
        dificultad: 7,
        requiere: 'Javascript'
    },
    {
        materia: 'Angular',
        dificultad: 10,
        requiere: 'HTML, CSS, TS, JS'
    },
    {
        materia: 'React',
        dificultad: 7,
        requiere: 'HTML, CSS, JS'
    }
]