/// <reference types="react" />
interface EditorProps {
    selectedID: string;
    contentObject: {
        [key: string]: any;
    };
    setContentObject: ({}: any) => void;
    updateChangeLog: (id: string, value: any) => void;
}
declare const BiscuitEditor: (editorProps: EditorProps) => JSX.Element | null;
export default BiscuitEditor;
