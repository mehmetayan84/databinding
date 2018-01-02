import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
})

export class CockpitComponent implements OnInit{

    //newServerName:string = '';

    //newServerDescription:string = '';

    @ViewChild('serverDescriptionInput') serverDescriptionInput:ElementRef;

    @Output() serverCreated = new EventEmitter<{serverName:string, serverDescription:string}>();

    @Output() blueprintCreated = new EventEmitter<{blueprintName:string, blueprintDescription:string}>();

    ngOnInit(){

    }

    onAddServer(nameInput:HTMLInputElement) {
        this.serverCreated.emit({
            serverName:nameInput.value,
            serverDescription:this.serverDescriptionInput.nativeElement.value
        });  
    }
    
    onAddBlueprint(nameInput:HTMLInputElement) {
        this.blueprintCreated.emit({
            blueprintName:nameInput.value,
            blueprintDescription:this.serverDescriptionInput.nativeElement.value
        });
    }

}