import * as React from 'react';
import type { FieldValues } from 'react-hook-form';
import { useController } from 'react-hook-form';

import type { InputControllerType } from '../input';
import type { SelectProps } from './select';
import { Select } from './select';

interface ControlledSelectProps<T extends FieldValues>
  extends Omit<SelectProps, 'name'>,
    InputControllerType<T> {}

// only used with react-hook-form
export function ControlledSelect<T extends FieldValues>(
  props: ControlledSelectProps<T>
) {
  const { name, control, rules, ...selectProps } = props;

  const { field, fieldState } = useController({ control, name, rules });
  return (
    <Select
      onValueChange={field.onChange}
      value={field.value}
      error={fieldState.error?.message}
      {...selectProps}
    />
  );
}
