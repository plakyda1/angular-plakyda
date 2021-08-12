import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditorComponent} from './editor/editor.component';
import { TreeCanvasComponent } from './tree-canvas/tree-canvas.component';
import { TreeX6Component } from './tree-x6/tree-x6.component';
import {TreeComponent} from './tree/tree.component';

const routes: Routes = [{
  path: 'editor',
  component: EditorComponent
},{
  path: 'tree-g6',
  component: TreeComponent
},{
  path: 'tree-x6',
  component: TreeX6Component
},{
  path: 'tree-canvas',
  component: TreeCanvasComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
