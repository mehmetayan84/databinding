import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
})

export class CockpitComponent implements OnInit{

    newServerName:string = '';

    newServerDescription:string = '';

    @Output() serverCreated = new EventEmitter<{serverName:string, serverDescription:string}>();

    @Output() blueprintCreated = new EventEmitter<{blueprintName:string, blueprintDescription:string}>();

    ngOnInit(){

    }

    onAddServer() {
        this.serverCreated.emit({
            serverName:this.newServerName,
            serverDescription:this.newServerDescription
        });  
    }
    
    onAddBlueprint() {
        this.blueprintCreated.emit({
            blueprintName:this.newServerName,
            blueprintDescription:this.newServerDescription
        });
        console.log(this.newServerName + " " + this.newServerDescription);
    }

}