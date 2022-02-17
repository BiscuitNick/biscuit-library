/// <reference types="react" />
export interface RectProps {
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
export default AnimatedRectangle;
