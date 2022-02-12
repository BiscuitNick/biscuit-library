/// <reference types="react" />
export interface ImageProps {
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
export default MyImage;
