import { RefObject } from "react";
interface UseEventListener {
    type: keyof WindowEventMap;
    listener: EventListener;
    element?: RefObject<Element> | Document | Window | null;
    options?: AddEventListenerOptions;
}
declare const useEventListener: ({ type, listener, element, options, }: UseEventListener) => void;
export default useEventListener;
