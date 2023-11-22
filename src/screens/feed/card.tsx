import React from 'react';
import { Image, SizableText, Stack, YStack } from 'tamagui';

import type { Post } from '@/api';

type Props = Post & { onPress?: () => void };

export const Card = ({ title, body, onPress = () => {} }: Props) => {
  return (
    <YStack
      m="$2"
      p="$2"
      overflow="hidden"
      borderRadius="$5"
      bg="$background"
      onPress={onPress}
    >
      <Image
        h="$16"
        w="100%"
        source={{
          uri: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        }}
      />

      <Stack>
        <SizableText fontSize="$5" numberOfLines={1} fontWeight="900">
          {title}
        </SizableText>
        <SizableText fontSize="$4" numberOfLines={3}>
          {body}
        </SizableText>
      </Stack>
    </YStack>
  );
};
