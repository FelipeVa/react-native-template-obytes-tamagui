import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView, Stack, YStack } from 'tamagui';

import { FocusAwareStatusBar } from '@/ui';

import { ButtonVariants } from './button-variants';
import { ColorVariants } from './color-variants';
import { InputVariants } from './input-variants';
import { TextVariants } from './text-variants';

export const Style = () => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <FocusAwareStatusBar />
      <Stack paddingTop={insets.top}>
        <ScrollView>
          <YStack flex={1} px="$2" gap="$2">
            <TextVariants />
            <ColorVariants />
            <InputVariants />
            <ButtonVariants />
          </YStack>
        </ScrollView>
      </Stack>
    </>
  );
};
