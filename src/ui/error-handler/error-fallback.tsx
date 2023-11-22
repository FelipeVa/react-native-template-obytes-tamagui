import * as React from 'react';
import { Button, Paragraph, YStack } from 'tamagui';

export function ErrorFallback({ resetErrorBoundary }: any) {
  return (
    <YStack flex={1} flexDirection="row" justifyContent="center" px="$2">
      <YStack>
        <Paragraph> Something went wrong: </Paragraph>
        <Button onPress={resetErrorBoundary}>Try again</Button>
      </YStack>
    </YStack>
  );
}
