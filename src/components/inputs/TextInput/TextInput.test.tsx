import React from "react";
import { render } from "@testing-library/react";
import TextInput from "./TextInput";

describe("TextInput", () => {
  test("Renders TogleSwitch", () => {
    render(
      <TextInput
        id="TextInputId"
        value={"some text"}
        onChange={(e: { target: { value: any } }) =>
          console.log(!e.target.value)
        }
      />
    );
  });
});
