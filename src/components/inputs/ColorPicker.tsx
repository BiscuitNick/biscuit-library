import React from "react";

export interface ColorPickerProps {
  label: string;
  value: string;
  onChange: any; //TODO cleanup onChange Type

  //TODO
  onToggle?: any; //
  toggleValue?: boolean;
}

const ColorPicker = (props: ColorPickerProps) => {
  const { label, value, onChange } = props;

  return (
    <div className={"inputContainer2Wide"}>
      <label className={"attributeLabel"}>
        <span style={{ margin: "auto" }}>{label}</span>
      </label>

      {/* <ToggleSwitch onChange={onToggle} value={toggleValue} /> */}

      {/* <ToggleSwitch onChange={()=>{console.log("blah")})} value={true} id={"colorTOggle"} label={"colorToggle"} /> */}

      <input
        // disabled={!toggleValue}
        type="color"
        value={value}
        onChange={onChange}
        className={"attributeInput"}
      />
    </div>
  );
};

export default ColorPicker;
