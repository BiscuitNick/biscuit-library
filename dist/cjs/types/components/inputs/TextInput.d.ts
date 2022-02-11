/// <reference types="react" />
export interface TextInputProps {
    id: string;
    label: string;
    value: string;
    onChange: any;
}
declare const TextInput: (props: TextInputProps) => JSX.Element;
export default TextInput;
