import { color } from '@tamagui/themes';
import React from 'react';
import { SizableText, Stack, YStack } from 'tamagui';

import { Title } from './title';

type ColorName = keyof typeof color;

export const ColorVariants = () => {
  return (
    <>
      <Title text="Colors" />
      {(Object.keys(color) as ColorName[]).map((name) => (
        <ColorVariant name={name} key={name} />
      ))}
    </>
  );
};

const ColorVariant = ({ name }: { name: ColorName }) => {
  return (
    <YStack pt="$2">
      <SizableText fontWeight="500">{name.toUpperCase()}</SizableText>
      <Stack
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-between"
        alignContent="space-between"
      >
        <ColorCard value={name} />
      </Stack>
    </YStack>
  );
};

const ColorCard = ({ value }: { value: string }) => {
  return (
    <Stack
      flex={1}
      alignItems="center"
      justifyContent="center"
      backgroundColor={`$${value}`}
      width="100%"
      height="$2"
    >
      <SizableText>{value}</SizableText>
    </Stack>
  );
};
