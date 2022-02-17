/// <reference types="react" />
export interface NumberInputProps {
    id: string;
    label?: string;
    value: number;
    onChange: any;
    min?: number;
    max?: number;
    step?: number;
    buttonChange?: number;
}
declare const NumberInput: (props: NumberInputProps) => JSX.Element;
export default NumberInput;
