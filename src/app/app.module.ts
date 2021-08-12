import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import {monacoConfig} from './config/monaco-config';
import {FormsModule} from '@angular/forms';
import { EditorComponent } from './editor/editor.component';
import { TreeComponent } from './tree/tree.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { TreeX6Component } from './tree-x6/tree-x6.component';
import { TreeCanvasComponent } from './tree-canvas/tree-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    TreeComponent,
    DynamicComponent,
    TreeX6Component,
    TreeCanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MonacoEditorModule.forRoot(monacoConfig),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
