import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MountResourceTreeComponent } from './mount-resource-tree/mount-resource-tree.component';
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatTreeModule} from "@angular/material/tree";
import { MountPathExplorerComponent } from './mount-path-explorer/mount-path-explorer.component';
import {HttpClientModule} from "@angular/common/http";
import {FileExplorerModule} from "./file-explorer/file-explorer.module";

@NgModule({
  declarations: [
    AppComponent,
    MountResourceTreeComponent,
    MountPathExplorerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTreeModule,
    HttpClientModule,
    FileExplorerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
