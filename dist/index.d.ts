/// <reference types="react" />
interface ColorPickerProps {
    label: string;
    value: string;
    onChange: any;
    onToggle?: any;
    toggleValue?: boolean;
}
declare const ColorPicker: (props: ColorPickerProps) => JSX.Element;

interface SelectAttributeProps {
    id: string;
    label?: string;
    value: string;
    items: string[];
    onChange: any;
}
declare const SelectAttribute: (props: SelectAttributeProps) => JSX.Element;

interface NumberInputProps {
    id: string;
    label?: string;
    value: number;
    onChange: any;
    min?: number;
    max?: number;
    step?: number;
    buttonChange?: number;
}
declare const NumberInput: (props: NumberInputProps) => JSX.Element;

interface ToggleSwitchProps {
    id: string;
    label?: string;
    value: boolean;
    onChange: any;
}
declare const ToggleSwitch: (props: ToggleSwitchProps) => JSX.Element;

interface TextInputProps {
    id: string;
    label: string;
    value: string;
    onChange: any;
}
declare const TextInput: (props: TextInputProps) => JSX.Element;

interface ColorPickerSwitchProps {
    id: string;
    label?: string;
    value: string;
    onChange: any;
    toggleId?: string;
    onToggle?: any;
    toggleValue?: boolean;
}
declare const ColorPickerSwitch: (props: ColorPickerSwitchProps) => JSX.Element;

interface RectProps {
    width: number;
    height: number;
    x: number;
    y: number;
    offsetX?: number;
    offsetY?: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    rotation?: number;
    handleClick?: any;
    handleDrag?: any;
    id?: string;
    fillEnabled?: boolean;
    strokeEnabled?: boolean;
    draggable?: boolean;
    immediateXY?: boolean;
}
declare const MyRect: (props: RectProps) => JSX.Element;

interface BoardProps {
    width: number;
    height: number;
    canvasRef?: object;
    children?: any;
    rectProps?: RectProps;
}
declare const Board: (props: BoardProps) => JSX.Element;

interface CircleProps {
    x: number;
    y: number;
    radius: number;
    fill?: string;
    stroke?: string;
    fillEnabled?: boolean;
    strokeEnabled?: boolean;
    strokeWidth?: number;
    canvasRef?: object;
    draggable?: boolean;
    handleClick?: any;
    handleDrag?: any;
    immediateXY?: boolean;
}
declare const MyCircle: (props: CircleProps) => JSX.Element;

interface ImageProps {
    x: number;
    y: number;
    width: number;
    height: number;
    offsetX?: number;
    offsetY?: number;
    strokeWidth?: number;
    fill?: string;
    stroke?: string;
    preserveAspect?: boolean;
    rotation?: number;
    src: string;
    canvasRef?: object;
    handleClick?: any;
    handleDrag?: any;
    id?: string;
    draggable?: boolean;
    fillEnabled?: boolean;
    strokeEnabled?: boolean;
}
declare const MyImage: (props: ImageProps) => JSX.Element;

interface EyeProps {
    x: number;
    y: number;
    width: number;
    height: number;
    w2h?: number;
    outerSize: number;
    outerShape: string;
    outerFill?: string;
    outerStroke?: string;
    outerRotation?: number;
    innerSize: number;
    innerShape: string;
    innerFill?: string;
    innerStroke?: string;
    innerRotation?: number;
    innerStrokeWidth?: number;
    outerStrokeWidth?: number;
    focalPoint: any;
    sensitivity: number;
    movementFactor: number;
    disableClip?: boolean;
    handleClick?: any;
    handleDrag?: any;
    draggable?: boolean;
    innerFillEnabled?: boolean;
    innerStrokeEnabled?: boolean;
    outerFillEnabled?: boolean;
    outerStrokeEnabled?: boolean;
    id?: string;
}
declare const Eye: (props: EyeProps) => JSX.Element;

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

export { Board, ColorPicker, ColorPickerSwitch, ColorSetters, Eye, MyCircle, MyImage, MyRect, NumberInput, NumberSetters, SelectAttribute, SelectionSetter as SelectionSetters, TextInput, TextSetters, ToggleSetters, ToggleSwitch };
