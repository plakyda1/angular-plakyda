import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditorComponent} from './editor/editor.component';
import {TreeComponent} from './tree/tree.component';

const routes: Routes = [{
  path: 'editor',
  component: EditorComponent
},{
  path: 'tree',
  component: TreeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
