/// <reference types="react" />
import { RefObject } from 'react';

interface ColorPickerSwitchProps {
    id: string;
    label?: string;
    value: string;
    onChange: any;
    toggleId: string;
    onToggle: any;
    toggleValue: boolean;
}
declare const ColorPickerSwitch: (props: ColorPickerSwitchProps) => JSX.Element;

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

interface SelectAttributeProps {
    id: string;
    label?: string;
    value: string;
    items: string[];
    onChange: any;
}
declare const SelectAttribute: (props: SelectAttributeProps) => JSX.Element;

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

interface BiscuitProps$1 {
    width?: number;
    height?: number;
    contentIDs: string[];
    contentObject: {
        [key: string]: any;
    };
}
declare const BiscuitBoard: (props: BiscuitProps$1) => JSX.Element;

interface BoardProps {
    width: number;
    height: number;
    canvasRef?: object;
    children?: any;
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
    listening?: boolean;
    contentID: string;
    box?: {
        width: number;
        height: number;
    };
}
declare const AnimatedCircle: (props: CircleProps) => JSX.Element;

interface BiscuitProps {
    contentObject: {
        [key: string]: any;
    };
    contentIDs: string[];
    box: {
        width: number;
        height: number;
        x?: number;
        y?: number;
    };
    canvasRef: any;
    handleClick: any;
    handleDrag: any;
    id: string;
}
declare const Biscuit: (props: BiscuitProps) => JSX.Element;

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
    innerXY: {
        x: number;
        y: number;
    };
    disableClip?: boolean;
    handleClick?: any;
    handleDrag?: any;
    draggable?: boolean;
    innerFillEnabled?: boolean;
    innerStrokeEnabled?: boolean;
    outerFillEnabled?: boolean;
    outerStrokeEnabled?: boolean;
    contentID: string;
    box?: {
        width: number;
        height: number;
    };
}
declare const Eye: (props: EyeProps) => JSX.Element;

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
    contentID: string;
    box?: {
        width: number;
        height: number;
    };
    draggable?: boolean;
    fillEnabled?: boolean;
    strokeEnabled?: boolean;
}
declare const AnimatedImage: (props: ImageProps) => JSX.Element;

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
    contentID: string;
    box?: {
        width: number;
        height: number;
    };
    fillEnabled?: boolean;
    strokeEnabled?: boolean;
    draggable?: boolean;
    immediateXY?: boolean;
    listening?: boolean;
}
declare const AnimatedRectangle: (props: RectProps) => JSX.Element;

interface AnimatedTextProps {
    x: number;
    y: number;
    width: number;
    height: number;
    offsetX?: number;
    offsetY?: number;
    rotation?: number;
    align?: string;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    strokeWidthFactor?: number;
    handleClick?: any;
    handleDrag?: any;
    contentID: string;
    box: {
        width: number;
        height: number;
    };
    canvasRef: any;
    draggable?: boolean;
    immediateXY?: boolean;
    listening?: boolean;
    fillEnabled?: boolean;
    strokeEnabled?: boolean;
    textBoxStrokeEnabled?: boolean;
    textBoxFillEnabled?: boolean;
    fontFamily?: string;
    fontStyle?: string;
    textContent?: string;
    minLines?: number;
    maxLines?: number;
    textBoxStroke?: string;
    textBoxFill?: string;
}
declare const AnimatedText: (props: AnimatedTextProps) => JSX.Element;

interface UseEventListener {
    type: keyof WindowEventMap;
    listener: EventListener;
    element?: RefObject<Element> | Document | Window | null;
    options?: AddEventListenerOptions;
}
declare const useEventListener: ({ type, listener, element, options, }: UseEventListener) => void;

declare function useInterval(callback: () => void, delay: number | null): void;

interface StagePositions {
    canvasRef: any;
    delay?: number;
}
declare const useStagePositions: ({ canvasRef, delay }: StagePositions) => {
    x: number;
    y: number;
};

interface WindowSize {
    width: number;
    height: number;
    windowReady: boolean;
}
declare const useWindowSize: () => WindowSize;

interface eyeBuild {
    focalPoint: any;
    innerRotation?: number;
    outerRotation?: number;
    w2h: number;
    sensitivity: number;
    movementFactor: number;
    innerShape: string;
    outerShape: string;
    innerFill?: string;
    outerFill?: string;
    innerStroke?: string;
    outerStroke?: string;
    disableClip?: boolean;
    r_outerSize: number;
    r_outer2inner: number;
    r_x: number;
    r_y: number;
    r_outerStrokeWidth?: number;
    r_innerStrokeWidth?: number;
    absolutes: {
        x?: number;
        y?: number;
        width: number;
        height: number;
    };
}
declare const buildEyeProps: (params: eyeBuild) => {
    outerSize: number;
    innerSize: number;
    innerStrokeWidth: number;
    outerStrokeWidth: number;
    x: number;
    y: number;
    box: {
        x?: number | undefined;
        y?: number | undefined;
        width: number;
        height: number;
    };
    width: number;
    height: number;
    focalPoint: any;
    innerRotation?: number | undefined;
    outerRotation?: number | undefined;
    w2h: number;
    sensitivity: number;
    movementFactor: number;
    innerShape: string;
    outerShape: string;
    innerFill?: string | undefined;
    outerFill?: string | undefined;
    innerStroke?: string | undefined;
    outerStroke?: string | undefined;
    disableClip?: boolean | undefined;
    r_outerSize: number;
    r_outer2inner: number;
    r_x: number;
    r_y: number;
    r_outerStrokeWidth?: number | undefined;
    r_innerStrokeWidth?: number | undefined;
    absolutes: {
        x?: number;
        y?: number;
        width: number;
        height: number;
    };
};

interface rectBuild {
    rotation?: number;
    fill?: string;
    stroke?: string;
    draggable?: boolean;
    cornerRadius?: number;
    strokeEnabled?: boolean;
    fillEnabled?: boolean;
    r_width: number;
    r_height: number;
    r_x: number;
    r_y: number;
    r_strokeWidth: number;
    absolutes: {
        x?: number;
        y?: number;
        width: number;
        height: number;
    };
}
declare const buildRectProps: (params: rectBuild) => {
    x: number;
    y: number;
    width: number;
    height: number;
    offsetX: number;
    offsetY: number;
    strokeWidth: number;
    box: {
        x?: number | undefined;
        y?: number | undefined;
        width: number;
        height: number;
    };
    rotation?: number | undefined;
    fill?: string | undefined;
    stroke?: string | undefined;
    draggable?: boolean | undefined;
    cornerRadius?: number | undefined;
    strokeEnabled?: boolean | undefined;
    fillEnabled?: boolean | undefined;
    r_width: number;
    r_height: number;
    r_x: number;
    r_y: number;
    r_strokeWidth: number;
    absolutes: {
        x?: number;
        y?: number;
        width: number;
        height: number;
    };
};

interface imageBuild {
    rotation?: number;
    fill?: string;
    stroke?: string;
    draggable?: boolean;
    cornerRadius?: number;
    src: string;
    r_width: number;
    r_height: number;
    r_x: number;
    r_y: number;
    r_strokeWidth: number;
    absolutes: {
        x?: number;
        y?: number;
        width: number;
        height: number;
    };
}
declare const buildImageProps: (params: imageBuild) => {
    x: number;
    y: number;
    width: number;
    height: number;
    offsetX: number;
    offsetY: number;
    strokeWidth: number;
    box: {
        x?: number | undefined;
        y?: number | undefined;
        width: number;
        height: number;
    };
    rotation?: number | undefined;
    fill?: string | undefined;
    stroke?: string | undefined;
    draggable?: boolean | undefined;
    cornerRadius?: number | undefined;
    src: string;
    r_width: number;
    r_height: number;
    r_x: number;
    r_y: number;
    r_strokeWidth: number;
    absolutes: {
        x?: number;
        y?: number;
        width: number;
        height: number;
    };
};

interface textBuild {
    rotation?: number;
    fill?: string;
    stroke?: string;
    draggable?: boolean;
    cornerRadius?: number;
    strokeEnabled?: boolean;
    fillEnabled?: boolean;
    strokeWidthFactor?: number;
    r_width: number;
    r_height: number;
    r_x: number;
    r_y: number;
    absolutes: {
        x?: number;
        y?: number;
        width: number;
        height: number;
    };
}
declare const buildTextProps: (params: textBuild) => {
    x: number;
    y: number;
    width: number;
    height: number;
    offsetX: number;
    offsetY: number;
    box: {
        x?: number | undefined;
        y?: number | undefined;
        width: number;
        height: number;
    };
    rotation?: number | undefined;
    fill?: string | undefined;
    stroke?: string | undefined;
    draggable?: boolean | undefined;
    cornerRadius?: number | undefined;
    strokeEnabled?: boolean | undefined;
    fillEnabled?: boolean | undefined;
    strokeWidthFactor?: number | undefined;
    r_width: number;
    r_height: number;
    r_x: number;
    r_y: number;
    absolutes: {
        x?: number;
        y?: number;
        width: number;
        height: number;
    };
};

declare const eyeDefaults: {
    innerXY: {
        x: number;
        y: number;
    };
    innerRotation: number;
    outerRotation: number;
    w2h: number;
    sensitivity: number;
    movementFactor: number;
    innerShape: string;
    outerShape: string;
    innerFill: string;
    outerFill: string;
    innerStroke: string;
    outerStroke: string;
    disableClip: boolean;
    innerStrokeEnabled: boolean;
    innerFillEnabled: boolean;
    outerStrokeEnabled: boolean;
    outerFillEnabled: boolean;
    r_outerSize: number;
    r_outer2inner: number;
    r_x: number;
    r_y: number;
    r_innerStrokeWidth: number;
    r_outerStrokeWidth: number;
};

declare const imageDefaults: {
    rotation: number;
    draggable: boolean;
    cornerRadius: number;
    keepAspectRatio: boolean;
    verticalAlign: string;
    horizontalAlign: string;
    fillEnabled: boolean;
    strokeEnabled: boolean;
    fill: string;
    stroke: string;
    src: string;
    r_x: number;
    r_y: number;
    r_width: number;
    r_height: number;
    r_strokeWidth: number;
};

declare const rectDefaults: {
    rotation: number;
    fill: string;
    stroke: string;
    draggable: boolean;
    cornerRadius: number;
    immediateXY: boolean;
    strokeEnabled: boolean;
    fillEnabled: boolean;
    r_x: number;
    r_y: number;
    r_width: number;
    r_height: number;
    r_strokeWidth: number;
};

declare const textDefaults: {
    rotation: number;
    fill: string;
    stroke: string;
    textBoxFill: string;
    textBoxStroke: string;
    align: string;
    draggable: boolean;
    cornerRadius: number;
    immediateXY: boolean;
    strokeEnabled: boolean;
    fillEnabled: boolean;
    textBoxStrokeEnabled: boolean;
    textBoxFillEnabled: boolean;
    fontFamily: string;
    fontStyle: string;
    textContent: string;
    minLines: number;
    maxLines: number;
    strokeWidthFactor: number;
    r_x: number;
    r_y: number;
    r_width: number;
    r_height: number;
};

interface contentItemProps {
    contentID: string;
    fontStyle?: string;
    fontFamily?: string;
    focalPoint?: number;
    innerRotation?: number;
    outerRotation?: number;
    w2h?: number;
    sensitivity?: number;
    movementFactor?: number;
    innerShape?: string;
    outerShape?: string;
    innerFill?: string;
    outerFill?: string;
    innerStroke?: string;
    outerStroke?: string;
    disableClip?: boolean;
    rotation?: number;
    fill?: string;
    stroke?: string;
    draggable?: boolean;
    cornerRadius?: number;
    r_strokeWidth?: number;
    textContent?: string;
    minLines?: number;
    maxLines?: number;
    r_outerSize?: number;
    r_outer2inner?: number;
    r_x?: number;
    r_y?: number;
    r_width?: number;
    r_height?: number;
    r_radius?: number;
}
declare const applyDefaults: (contentItem: contentItemProps) => {
    contentID: string;
    fontStyle?: string | undefined;
    fontFamily?: string | undefined;
    focalPoint?: number | undefined;
    innerRotation: number;
    outerRotation: number;
    w2h: number;
    sensitivity: number;
    movementFactor: number;
    innerShape: string;
    outerShape: string;
    innerFill: string;
    outerFill: string;
    innerStroke: string;
    outerStroke: string;
    disableClip: boolean;
    rotation?: number | undefined;
    fill?: string | undefined;
    stroke?: string | undefined;
    draggable?: boolean | undefined;
    cornerRadius?: number | undefined;
    r_strokeWidth?: number | undefined;
    textContent?: string | undefined;
    minLines?: number | undefined;
    maxLines?: number | undefined;
    r_outerSize: number;
    r_outer2inner: number;
    r_x: number;
    r_y: number;
    r_width?: number | undefined;
    r_height?: number | undefined;
    r_radius?: number | undefined;
    innerXY: {
        x: number;
        y: number;
    };
    innerStrokeEnabled: boolean;
    innerFillEnabled: boolean;
    outerStrokeEnabled: boolean;
    outerFillEnabled: boolean;
    r_innerStrokeWidth: number;
    r_outerStrokeWidth: number;
} | {
    contentID: string;
    fontStyle?: string | undefined;
    fontFamily?: string | undefined;
    focalPoint?: number | undefined;
    innerRotation?: number | undefined;
    outerRotation?: number | undefined;
    w2h?: number | undefined;
    sensitivity?: number | undefined;
    movementFactor?: number | undefined;
    innerShape?: string | undefined;
    outerShape?: string | undefined;
    innerFill?: string | undefined;
    outerFill?: string | undefined;
    innerStroke?: string | undefined;
    outerStroke?: string | undefined;
    disableClip?: boolean | undefined;
    rotation: number;
    fill: string;
    stroke: string;
    draggable: boolean;
    cornerRadius: number;
    r_strokeWidth: number;
    textContent?: string | undefined;
    minLines?: number | undefined;
    maxLines?: number | undefined;
    r_outerSize?: number | undefined;
    r_outer2inner?: number | undefined;
    r_x: number;
    r_y: number;
    r_width: number;
    r_height: number;
    r_radius?: number | undefined;
    keepAspectRatio: boolean;
    verticalAlign: string;
    horizontalAlign: string;
    fillEnabled: boolean;
    strokeEnabled: boolean;
    src: string;
} | {
    contentID: string;
    fontStyle?: string | undefined;
    fontFamily?: string | undefined;
    focalPoint?: number | undefined;
    innerRotation?: number | undefined;
    outerRotation?: number | undefined;
    w2h?: number | undefined;
    sensitivity?: number | undefined;
    movementFactor?: number | undefined;
    innerShape?: string | undefined;
    outerShape?: string | undefined;
    innerFill?: string | undefined;
    outerFill?: string | undefined;
    innerStroke?: string | undefined;
    outerStroke?: string | undefined;
    disableClip?: boolean | undefined;
    rotation: number;
    fill: string;
    stroke: string;
    draggable: boolean;
    cornerRadius: number;
    r_strokeWidth: number;
    textContent?: string | undefined;
    minLines?: number | undefined;
    maxLines?: number | undefined;
    r_outerSize?: number | undefined;
    r_outer2inner?: number | undefined;
    r_x: number;
    r_y: number;
    r_width: number;
    r_height: number;
    r_radius?: number | undefined;
    immediateXY: boolean;
    strokeEnabled: boolean;
    fillEnabled: boolean;
} | {
    contentID: string;
    fontStyle: string;
    fontFamily: string;
    focalPoint?: number | undefined;
    innerRotation?: number | undefined;
    outerRotation?: number | undefined;
    w2h?: number | undefined;
    sensitivity?: number | undefined;
    movementFactor?: number | undefined;
    innerShape?: string | undefined;
    outerShape?: string | undefined;
    innerFill?: string | undefined;
    outerFill?: string | undefined;
    innerStroke?: string | undefined;
    outerStroke?: string | undefined;
    disableClip?: boolean | undefined;
    rotation: number;
    fill: string;
    stroke: string;
    draggable: boolean;
    cornerRadius: number;
    r_strokeWidth?: number | undefined;
    textContent: string;
    minLines: number;
    maxLines: number;
    r_outerSize?: number | undefined;
    r_outer2inner?: number | undefined;
    r_x: number;
    r_y: number;
    r_width: number;
    r_height: number;
    r_radius?: number | undefined;
    textBoxFill: string;
    textBoxStroke: string;
    align: string;
    immediateXY: boolean;
    strokeEnabled: boolean;
    fillEnabled: boolean;
    textBoxStrokeEnabled: boolean;
    textBoxFillEnabled: boolean;
    strokeWidthFactor: number;
} | null;

interface absoluteSizingParams {
    relatives: {
        r_x: number;
        r_y: number;
        r_width: number;
        r_height: number;
    };
    box: {
        width: number;
        height: number;
        x?: number;
        y?: number;
    };
}
declare const getAbsoluteSizing: (params: absoluteSizingParams) => {
    x: number;
    y: number;
    width: number;
    height: number;
    offsetX: number;
    offsetY: number;
};

interface getInnerPositionParams {
    focalPoint: {
        x: number;
        y: number;
    };
    x: number;
    y: number;
    width: number;
    height: number;
    movementFactor: number;
    outerSize: number;
    sensitivity: number;
}
declare const getInnerPosition: (params: getInnerPositionParams) => {
    x: number;
    y: number;
};

interface getRatioParams {
    ratio: number;
    sum: number;
}
declare const getRatio: (params: getRatioParams) => number[];

declare const getRefElement: <T>(element?: T | RefObject<Element> | undefined) => Element | T | null | undefined;

declare const getStageData: (canvasRef: any) => any;

declare const isSSR: boolean;

declare const getTextLines: (props: any) => any[] | null;

export { AnimatedImage as AniamtedImage, AnimatedCircle, AnimatedRectangle, AnimatedText, Biscuit, BiscuitBoard, Board, ColorPickerSwitch, Eye, NumberInput, SelectAttribute, TextInput, ToggleSwitch, applyDefaults, buildEyeProps, buildImageProps, buildRectProps, buildTextProps, eyeDefaults, getAbsoluteSizing, getInnerPosition, getRatio, getRefElement, getStageData, getTextLines, imageDefaults, isSSR, rectDefaults, textDefaults, useEventListener, useInterval, useStagePositions, useWindowSize };
