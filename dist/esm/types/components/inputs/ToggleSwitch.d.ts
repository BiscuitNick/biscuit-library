/// <reference types="react" />
export interface ToggleSwitchProps {
    id: string;
    label?: string;
    value: boolean;
    onChange: any;
}
declare const ToggleSwitch: (props: ToggleSwitchProps) => JSX.Element;
export default ToggleSwitch;
