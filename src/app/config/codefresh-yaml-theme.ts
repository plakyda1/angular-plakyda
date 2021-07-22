/// <reference path="../../../node_modules/monaco-editor/monaco.d.ts" />
import IStandaloneThemeData = monaco.editor.IStandaloneThemeData

export const codefreshYamlTheme: IStandaloneThemeData = {
    base: 'vs-dark', // can also be vs-dark or hc-black
    inherit: true, // can also be false to completely replace the builtin rules
    rules: [
        { token: 'type.yaml', foreground: 'BABABA' },
        { token: 'comment.yaml', foreground: '8f8f8f', fontStyle: 'normal none' },
        { token: 'string.yaml', foreground: '6A8759' },
        { token: 'number.yaml', foreground: '6A8759' },
        { token: 'keyword.yaml', foreground: '11B5A4' },
        { token: 'string.regexp.yaml', foreground: '11B5A4' }
    ],
    colors: {
        'editor.foreground': '#171A2D',
        'editor.background': '#171A2D',
        'editorLink.activeForeground': '#518FF6',
        'editorLineNumber.foreground': '#B0C4E7'
    }
}
