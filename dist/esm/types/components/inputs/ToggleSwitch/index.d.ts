/// <reference types="react" />
export interface ToggleSwitchProps {
    id: string;
    label?: string;
    value: boolean;
    onChange: any;
    round?: boolean;
    color?: string;
}
declare const ToggleSwitch: ({ round, ...props }: ToggleSwitchProps) => JSX.Element;
export default ToggleSwitch;
