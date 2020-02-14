import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CursosService {

    emitirCursoCriado = new EventEmitter();

    private cursos: string[] = ['Angular2', 'Java', 'CSS'];

    constructor() {
        console.log('CursosService');
    }
    getCursos() {
        return this.cursos;
    }

    addCurso(curso: string) {
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
    }
}