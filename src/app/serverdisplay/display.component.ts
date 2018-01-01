import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-display',
    templateUrl: './display.component.html',
})

export class DisplayComponent{
    
    @Input('srvElement') element: {type: string, name: string, description: string};

}