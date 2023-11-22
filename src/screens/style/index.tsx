import React from 'react';
import { ScrollView, YStack } from 'tamagui';

import { FocusAwareStatusBar } from '@/ui';

import { ButtonVariants } from './button-variants';
import { ColorVariants } from './color-variants';
import { InputVariants } from './input-variants';
import { TextVariants } from './text-variants';

export const Style = () => {
  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView>
        <YStack flex={1} px="$2" pt="$10">
          <TextVariants />
          <ColorVariants />
          <InputVariants />
          <ButtonVariants />
        </YStack>
      </ScrollView>
    </>
  );
};
