/// <reference types="react" />
import "./ColorPickers.css";
export interface ColorPickerProps {
    id: string;
    label?: string;
    value: string;
    onChange: any;
}
declare const ColorPicker: (props: ColorPickerProps) => JSX.Element;
export default ColorPicker;
