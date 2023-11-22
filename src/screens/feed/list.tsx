import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { SizableText, YStack } from 'tamagui';

import type { Post } from '@/api';
import { usePosts } from '@/api';
import { EmptyList, FocusAwareStatusBar } from '@/ui';

import { Card } from './card';

export const Feed = () => {
  const { data, isLoading, isError } = usePosts();
  const { navigate } = useNavigation();

  const renderItem = React.useCallback(
    ({ item }: { item: Post }) => (
      <Card {...item} onPress={() => navigate('Post', { id: item.id })} />
    ),
    [navigate]
  );

  if (isError) {
    return (
      <YStack>
        <SizableText> Error Loading data </SizableText>
      </YStack>
    );
  }
  return (
    <YStack flex={1}>
      <FocusAwareStatusBar />
      <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => `item-${index}`}
        ListEmptyComponent={<EmptyList isLoading={isLoading} />}
        estimatedItemSize={300}
      />
    </YStack>
  );
};
