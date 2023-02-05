import React from "react";

export type ButtonTypes = {
  title: string;
  id?: string;
  style?: string;
  disabled?: boolean;
  icon?: any;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export type InputFieldTypes = {
  onChange?: React.MouseEventHandler<HTMLInputElement>;
  value?: any;
  style?: string;
};
