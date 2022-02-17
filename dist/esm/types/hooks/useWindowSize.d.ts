interface WindowSize {
    width: number;
    height: number;
    windowReady: boolean;
}
declare const useWindowSize: () => WindowSize;
export default useWindowSize;
