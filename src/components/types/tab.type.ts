import * as React from "react";

export type Tab = {
  label: string;
  value: string;
  content: string | React.ReactNode;
};
