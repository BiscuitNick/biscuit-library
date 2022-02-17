/// <reference types="react" />
export interface ColorPickerSwitchProps {
    id: string;
    label?: string;
    value: string;
    onChange: any;
    toggleId: string;
    onToggle: any;
    toggleValue: boolean;
}
declare const ColorPickerSwitch: (props: ColorPickerSwitchProps) => JSX.Element;
export default ColorPickerSwitch;
