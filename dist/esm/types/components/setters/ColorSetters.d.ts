/// <reference types="react" />
interface ColorSettersProps {
    selectedContentID: string;
    contentObject: {
        contentIDs: string[];
        [key: string]: any;
    };
    updateContent: Function;
    attributes: string[];
}
declare const ColorSetters: (colorProps: ColorSettersProps) => JSX.Element | null;
export default ColorSetters;
