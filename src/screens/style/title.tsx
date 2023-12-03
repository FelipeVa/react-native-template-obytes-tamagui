import * as React from 'react';
import { H3, Stack, View } from 'tamagui';

type TitleProps = {
  text: string;
};

export const Title = ({ text }: TitleProps) => {
  return (
    <Stack flexDirection="row" alignItems="center" paddingBottom="$2">
      <H3 pr="$1">{text}</H3>
      <View flex={1} height={2} />
    </Stack>
  );
};
