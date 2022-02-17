export interface imageBuild {
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
export default buildImageProps;
