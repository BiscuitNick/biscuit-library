import { RefObject } from "react";
declare const getRefElement: <T>(element?: T | RefObject<Element> | undefined) => Element | T | null | undefined;
export default getRefElement;
