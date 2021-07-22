import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import {monacoConfig} from './config/monaco-config';
import {FormsModule} from '@angular/forms';
import { EditorComponent } from './editor/editor.component';
import { TreeComponent } from './tree/tree.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    TreeComponent
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
