import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Test Server', description:'Just a test'}];

  onServerAdded(serverData:{serverName:string, serverDescription:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      description: serverData.serverDescription
    });
  }

  onBlueprintAdded(blueprintData:{blueprintName:string, blueprintDescription:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      description: blueprintData.blueprintDescription
    });
  }

}
