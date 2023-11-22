import * as React from 'react';
import type { TextInput } from 'react-native';
import { Fieldset, Input as TInput, Label, SizableText } from 'tamagui';
import type { InputProps } from 'tamagui/src/views/Input';

import { isRTL } from '@/core';

export interface NInputProps extends InputProps {
  name: string;
  label?: string;
  disabled?: boolean;
  error?: string;
}

export const Input = React.forwardRef<TextInput, NInputProps>((props, ref) => {
  const { label, error, ...inputProps } = props;

  const textDirection = isRTL ? 'right' : 'left';
  return (
    <Fieldset>
      {label ? (
        <Label
          color={error ? '$red10' : '$color'}
          htmlFor={props.id || props.name}
        >
          {label}
        </Label>
      ) : null}
      <TInput
        id={props.id || props.name}
        testID="STextInput"
        writingDirection={isRTL ? 'rtl' : 'ltr'}
        borderColor={error ? '$red10' : '$borderColor'}
        textAlign={textDirection}
        ref={ref}
        {...inputProps}
      />
      {error && <SizableText color="$red10">{error}</SizableText>}
    </Fieldset>
  );
});
