/// <reference types="react" />
import { RectProps } from "./MyRect";
export interface BoardProps {
    width: number;
    height: number;
    canvasRef?: object;
    children?: any;
    rectProps?: RectProps;
}
declare const Board: (props: BoardProps) => JSX.Element;
export default Board;
