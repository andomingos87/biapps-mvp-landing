import React from "react";
import { IMaskInput } from "react-imask";

type PhoneIMaskProps = {
  value?: string;
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
  name?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  className?: string;
  placeholder?: string;
  autoComplete?: string;
};

const PhoneInputMask = React.forwardRef<HTMLInputElement, PhoneIMaskProps>(
  ({ onChange, onBlur, value, name, ...rest }, ref) => (
    <IMaskInput
      {...rest}
      mask="(00) 00000-0000"
      value={value}
      inputRef={ref}
      name={name}
      autoComplete="tel"
      onAccept={(val: string) => {
        if (onChange) {
          onChange({ target: { name, value: val } });
        }
      }}
      onBlur={onBlur}
      unmask={false}
    />
  )
);
export default PhoneInputMask;

