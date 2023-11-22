import React from 'react';
import { Button, YStack } from 'tamagui';

import { Title } from './title';

export const ButtonVariants = () => {
  return (
    <>
      <Title text="Buttons" />
      <YStack space>
        <Button size="$6">Large</Button>
        <Button>Button</Button>
        <Button variant="outlined">Outlined</Button>
        <Button disabled>Disabled</Button>
        <Button themeInverse size="$3">
          Inverse
        </Button>
      </YStack>
    </>
  );
};
