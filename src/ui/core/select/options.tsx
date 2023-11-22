import type { BottomSheetModal } from '@gorhom/bottom-sheet';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { Check } from '@tamagui/lucide-icons';
import type { ThemeableStackProps } from '@tamagui/stacks/src/ThemeableStack';
import * as React from 'react';
import { SizableText, ThemeableStack, useTheme } from 'tamagui';

import { Modal } from '../modal';

export type Option = { label: string; value: string | number };

type OptionsProps = {
  options: Option[];
  onSelect: (option: Option) => void;
  value?: string | number;
};

function keyExtractor(item: Option) {
  return `select-item-${item.value}`;
}

export const Options = React.forwardRef<BottomSheetModal, OptionsProps>(
  ({ options, onSelect, value }, ref) => {
    const height = options.length * 70 + 100;
    const snapPoints = React.useMemo(() => [height], [height]);
    const theme = useTheme();
    const renderSelectItem = React.useCallback(
      ({ item }: { item: Option }) => (
        <Option
          key={`select-item-${item.value}`}
          label={item.label}
          selected={value === item.value}
          onPress={() => onSelect(item)}
        />
      ),
      [onSelect, value]
    );

    return (
      <Modal
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{
          backgroundColor: theme.background?.val,
        }}
      >
        <BottomSheetFlatList
          data={options}
          keyExtractor={keyExtractor}
          renderItem={renderSelectItem}
        />
      </Modal>
    );
  }
);

const Option = React.memo(
  ({
    label,
    selected = false,
    ...props
  }: ThemeableStackProps & {
    selected?: boolean;
    label: string;
  }) => {
    return (
      <ThemeableStack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        py="$3"
        px="$3"
        borderBottomWidth={1}
        borderBottomColor="$gray8"
        pressTheme
        {...props}
      >
        <SizableText>{label}</SizableText>
        {selected && <Check />}
      </ThemeableStack>
    );
  }
);
