import React, { useEffect, useRef, useState } from "react";

import useWindowSize from "../../../hooks/useWindowSize";
import Board from "./Board";
import Biscuit from "../Content";
import BiscuitEditor from "../../Editors/BiscuitEditor";

export interface BiscuitProps {
  width?: number;
  height?: number;
  contentIDs: string[];
  contentObject: {
    [key: string]: any;
  };
}

const Konva = require("konva");
Konva.showWarnings = false;

const BiscuitBoard = (props: BiscuitProps) => {
  const { contentIDs: initIDs, contentObject: initContentObject } = props;

  const { width, height } = useWindowSize();
  const canvasRef = useRef<any>(null);
  const dragItem = useRef<any>(null);

  const [selectedID, setSelectedID] = useState("");
  const [contentIDs, setContentIDs] = useState(initIDs);
  const [contentObject, setContentObject] = useState(initContentObject);
  const [changeLog, setChangeLog] = useState<any>([]);

  const contentItem = contentObject[selectedID];
  const squareWH = Math.min(width, height);

  const handleClick = (e: { target: { attrs: any } }) => {
    const attrs = e.target.attrs;
    const { contentID } = attrs;

    setSelectedID(contentID || "");
  };

  const handleDrag = (e: { target: { attrs: any } }) => {
    const attrs = e.target.attrs;
    const { contentID, x, y, box } = attrs;

    setSelectedID(contentID);

    if (dragItem.current != contentID) {
      dragItem.current = contentID;
    } else {
      dragItem.current = "";

      const contentItem = contentObject[contentID];

      let newR_X = x / box.width; //squareWH;
      let newR_Y = y / box.height; //squareWH;

      let timeStamp = new Date().getTime();
      let lastTime = changeLog[changeLog.length - 1]?.timeStamp || 0;
      let diff = timeStamp - lastTime;
      if (diff > 1000) {
        setChangeLog([
          ...changeLog,
          {
            contentID,
            attr: "r_x",
            r_x: newR_X,
            r_y: newR_Y,
            method: "drag",
            timeStamp,
          },
        ]);
      } else {
        let copyLog = [...changeLog];
        copyLog[copyLog.length - 1] = {
          contentID,
          attr: "r_x",
          r_x: newR_X,
          r_y: newR_Y,
          method: "drag",
          timeStamp,
        };
        setChangeLog(copyLog);
      }

      setContentObject({
        ...contentObject,
        [contentID]: {
          ...contentItem,
          r_x: newR_X,
          r_y: newR_Y,
        },
      });
    }
  };

  const updateChangeLog = (attr: string, value: any, method = "input") => {
    let timeStamp = new Date().getTime();

    let lastChange = changeLog.length
      ? changeLog[changeLog.length - 1]
      : { timeStamp: 0, attr: null, id: null };
    let { timeStamp: lastTime, attr: lastAttr, id: lastID } = lastChange;

    let diff = timeStamp - lastTime;
    if (diff > 1000 || attr !== lastAttr || selectedID !== lastID) {
      setChangeLog([
        ...changeLog,
        {
          contentID: selectedID,
          attr,
          [attr]: value,
          method,
          timeStamp,
        },
      ]);
    } else {
      let copyLog = [...changeLog];
      copyLog[copyLog.length - 1] = {
        contentID: selectedID,
        attr,
        [attr]: value,
        method,
        timeStamp,
      };
      setChangeLog(copyLog);
    }
  };

  useEffect(() => {}, [changeLog.length]);

  return (
    <>
      <Board width={width} height={height} canvasRef={canvasRef}>
        <Biscuit
          box={{ width, height }}
          contentObject={contentObject}
          contentIDs={contentIDs}
          canvasRef={canvasRef}
          handleClick={handleClick}
          handleDrag={handleDrag}
          key={"b1"}
          id={"b1"}
        />
      </Board>
      <div style={{ position: "absolute", left: 0, top: 0 }}>
        <BiscuitEditor
          {...{
            selectedID,
            contentObject,
            setContentObject,
            updateChangeLog,
          }}
        />
      </div>
    </>
  );
};

export default BiscuitBoard;
