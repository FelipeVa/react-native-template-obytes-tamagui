import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';
import { SizableText, Stack } from 'tamagui';

import { NoData } from '@/ui';

type EmptyListProps = {
  isLoading: boolean;
};

export const EmptyList = memo(({ isLoading }: EmptyListProps) => {
  return (
    <Stack flex={1} alignItems="center" justifyContent="center" minHeight={400}>
      {!isLoading ? (
        <Stack>
          <NoData />
          <SizableText pt="$4" textAlign="center">
            Sorry! No data found
          </SizableText>
        </Stack>
      ) : (
        <ActivityIndicator />
      )}
    </Stack>
  );
});
