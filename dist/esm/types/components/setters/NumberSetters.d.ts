/// <reference types="react" />
interface NumberSetterProps {
    selectedContentID: string;
    contentObject: {
        contentIDs: string[];
        [key: string]: any;
    };
    updateContent: Function;
    attributes: string[];
}
declare const NumberSetters: (numberProps: NumberSetterProps) => JSX.Element | null;
export default NumberSetters;
