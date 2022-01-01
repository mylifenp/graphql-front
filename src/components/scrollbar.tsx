import "simplebar/dist/simplebar.min.css";
import React, { forwardRef, Ref } from "react";
import SimpleBar from "simplebar-react";
import { styled } from "@mui/material/styles";

const ScrollbarRoot = styled(SimpleBar)``;

export const Scrollbar = forwardRef((props, ref: any) => {
  return (
    <ScrollbarRoot ref={ref} {...props}>
      {props.children}
    </ScrollbarRoot>
  );
});
