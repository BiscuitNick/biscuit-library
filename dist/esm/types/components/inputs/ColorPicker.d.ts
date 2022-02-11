/// <reference types="react" />
export interface ColorPickerProps {
    label: string;
    value: string;
    onChange: any;
    onToggle?: any;
    toggleValue?: boolean;
}
declare const ColorPicker: (props: ColorPickerProps) => JSX.Element;
export default ColorPicker;
