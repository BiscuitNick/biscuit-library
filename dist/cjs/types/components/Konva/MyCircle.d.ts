/// <reference types="react" />
export interface CircleProps {
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
export default MyCircle;
