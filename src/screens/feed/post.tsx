import { useRoute } from '@react-navigation/native';
import * as React from 'react';
import { H2, Paragraph, SizableText, YStack } from 'tamagui';

import { usePost } from '@/api';
import type { RouteProp } from '@/navigation/types';
import { ActivityIndicator, FocusAwareStatusBar, SafeAreaView } from '@/ui';

export const Post = () => {
  const { params } = useRoute<RouteProp<'Post'>>();
  const { data, isLoading, isError } = usePost({
    variables: { id: params.id },
  });

  if (isLoading) {
    return (
      <YStack flex={1} justifyContent="center">
        <ActivityIndicator />
      </YStack>
    );
  }
  if (isError) {
    return (
      <YStack flex={1} justifyContent="center">
        <FocusAwareStatusBar />
        <SizableText textAlign="center">Error loading post</SizableText>
      </YStack>
    );
  }

  return (
    <SafeAreaView>
      <YStack flex={1} p="$4">
        <FocusAwareStatusBar />
        <H2>{data.title}</H2>
        <Paragraph>{data.body} </Paragraph>
      </YStack>
    </SafeAreaView>
  );
};
