import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
//import { HelloComponent } from './hello.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentComponent } from './document/document.component';
import { DocumentService } from './document.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'https://repl.it/@ArupBasu/arupnodesocketchat:4444', options: {} };
@NgModule({
  imports:      [ BrowserModule,HttpClientModule,	FormsModule,SocketIoModule.forRoot(config)],
  declarations: [ AppComponent,  DocumentListComponent, DocumentComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DocumentService]
})
export class AppModule { }
