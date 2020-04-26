import { EventEmitter } from '@angular/core';

export class EventEmitterService {

    private static emitters: {
        [refreshEvento: string]: EventEmitter<any>
    } = {}

    static get (refreshEvento:string): EventEmitter<any> {
        if (!this.emitters[refreshEvento])
            this.emitters[refreshEvento] = new EventEmitter<any>();
        return this.emitters[refreshEvento];
    }

}