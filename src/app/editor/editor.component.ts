import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {

  editorOptions = {
    theme: 'codefreshYAML',
    language: 'yaml',
    fontSize: 14,
    minimap: {
      enabled: false
    }
  }
  code: any = 'sldkngew: jerbgergb\n' +
    'kind: regerg\n' +
    'metadata:\n' +
    '  name: dkjdkjsdkjsdkj\n' +
    'spec:\n';

}
