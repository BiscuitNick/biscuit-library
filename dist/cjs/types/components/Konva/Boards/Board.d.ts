/// <reference types="react" />
export interface BoardProps {
    width: number;
    height: number;
    children?: any;
}
declare const Board: (props: BoardProps) => JSX.Element;
export default Board;
