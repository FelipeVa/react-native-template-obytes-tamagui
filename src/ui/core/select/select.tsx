import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons';
import * as React from 'react';
import {
  Adapt,
  Fieldset,
  Label,
  Select as TSelect,
  type SelectProps as TSelectProps,
  Sheet,
  SizableText,
  Stack,
} from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient';

export interface SelectProps extends TSelectProps {
  label?: string;
  disabled?: boolean;
  error?: string;
  options?: { label: string; value: string }[];
  placeholder?: string;
}

// eslint-disable-next-line max-lines-per-function
export const Select = (props: SelectProps) => {
  const {
    label,
    value,
    error,
    options = [],
    placeholder = 'select...',
    disabled = false,
  } = props;

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
      <TSelect
        id={props.id || props.name}
        defaultValue={value}
        onValueChange={props.onValueChange}
      >
        <TSelect.Trigger
          id={props.id || props.name}
          iconAfter={ChevronDown}
          borderColor={error ? '$red10' : '$borderColor'}
          disabled={disabled}
        >
          <TSelect.Value placeholder={placeholder} />
        </TSelect.Trigger>

        <Adapt when="sm" platform="touch">
          <Sheet modal dismissOnSnapToBottom>
            <Sheet.Frame>
              <Sheet.ScrollView>
                <Adapt.Contents />
              </Sheet.ScrollView>
            </Sheet.Frame>
            <Sheet.Overlay />
          </Sheet>
        </Adapt>

        <TSelect.Content zIndex={200000}>
          <TSelect.ScrollDownButton
            alignItems="center"
            justifyContent="center"
            position="relative"
            w="100%"
            h="$3"
          >
            <Stack zIndex={10}>
              <ChevronUp size={20} />

              <LinearGradient
                start={[0, 0]}
                end={[0, 1]}
                fullscreen
                colors={['$background', '$backgroundTransparent']}
                br="$4"
              />
            </Stack>
          </TSelect.ScrollDownButton>

          <TSelect.Viewport minWidth={200}>
            <TSelect.Group>
              <TSelect.Label>{label}</TSelect.Label>
              {options.map((item, i) => {
                return (
                  <TSelect.Item index={i} key={item.value} value={item.value}>
                    <TSelect.ItemText color="$color">
                      {item.label}
                    </TSelect.ItemText>
                    <TSelect.ItemIndicator ml="auto">
                      <Check size={16} />
                    </TSelect.ItemIndicator>
                  </TSelect.Item>
                );
              })}
            </TSelect.Group>
          </TSelect.Viewport>
        </TSelect.Content>
      </TSelect>
      {error && <SizableText color="$red10">{error}</SizableText>}
    </Fieldset>
  );
};
