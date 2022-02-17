export interface absoluteSizingParams {
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
export default getAbsoluteSizing;
