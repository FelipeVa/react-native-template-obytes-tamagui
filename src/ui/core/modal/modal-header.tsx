import { X } from '@tamagui/lucide-icons';
import * as React from 'react';
import { SizableText, Stack, ThemeableStack } from 'tamagui';

type ModalHeaderProps = {
  title?: string;
  dismiss: () => void;
};

export const ModalHeader = React.memo(
  ({ title, dismiss }: ModalHeaderProps) => {
    return (
      <Stack flex={1} flexDirection="row" py="$4" px="$2">
        <Stack h={24} w={24} />
        <Stack flex={1}>
          <SizableText textAlign="center" fontWeight="900">
            {title}
          </SizableText>
        </Stack>
        <CloseButton close={dismiss} />
      </Stack>
    );
  }
);

const CloseButton = ({ close }: { close: () => void }) => {
  return (
    <ThemeableStack
      pressTheme
      h="$1.5"
      w="$1.5"
      alignItems="center"
      justifyContent="center"
      onPress={close}
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      accessibilityLabel="close modal"
      accessibilityRole="button"
      accessibilityHint="closes the modal"
    >
      <X />
    </ThemeableStack>
  );
};
