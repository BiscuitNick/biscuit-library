/// <reference types="react" />
interface toggleSwitchesProps {
    selectedContentID: string;
    contentObject: {
        contentIDs: string[];
        [key: string]: any;
    };
    updateContent: Function;
    attributes: string[];
}
declare const ToggleSetters: (toggleProps: toggleSwitchesProps) => JSX.Element | null;
export default ToggleSetters;
