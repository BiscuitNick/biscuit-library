/// <reference types="react" />
interface selectAttributeProps {
    selectedContentID: string;
    contentObject: {
        contentIDs: string[];
        [key: string]: any;
    };
    updateContent: Function;
    attributes: string[];
}
declare const SelectionSetter: (selectionProps: selectAttributeProps) => JSX.Element | null;
export default SelectionSetter;
