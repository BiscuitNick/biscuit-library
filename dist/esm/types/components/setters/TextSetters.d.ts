/// <reference types="react" />
interface textSetterProps {
    selectedContentID: string;
    contentObject: {
        contentIDs: string[];
        [key: string]: any;
    };
    updateContent: Function;
    attributes: string[];
}
declare const TextSetters: (textProps: textSetterProps) => JSX.Element | null;
export default TextSetters;
