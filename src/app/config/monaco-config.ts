import { NgxMonacoEditorConfig } from 'ngx-monaco-editor'

import { codefreshYamlTheme } from './codefresh-yaml-theme'

export const monacoConfig: NgxMonacoEditorConfig = {
    baseUrl: 'assets',
    defaultOptions: { scrollBeyondLastLine: false },
    onMonacoLoad: () => {
        monaco.editor.defineTheme('codefreshYAML', codefreshYamlTheme)
    }
}
