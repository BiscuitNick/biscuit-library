/// <reference types="react" />
export interface BoardProps {
    width: number;
    height: number;
    canvasRef?: object;
    children?: any;
}
declare const Board: (props: BoardProps) => JSX.Element;
export default Board;
