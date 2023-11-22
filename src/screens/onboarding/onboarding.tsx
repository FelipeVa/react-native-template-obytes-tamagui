import React from 'react';
import { Button, H2, Paragraph, YStack } from 'tamagui';

import { useIsFirstTime } from '@/core/hooks';
import { FocusAwareStatusBar, SafeAreaView } from '@/ui';

import { Cover } from './cover';

export const Onboarding = () => {
  const [_, setIsFirstTime] = useIsFirstTime();
  return (
    <YStack flex={1} h="100%" alignItems="center" justifyContent="center">
      <FocusAwareStatusBar />
      <YStack width="100%" flex={1}>
        <Cover />
      </YStack>
      <YStack justifyContent="flex-end" space>
        <H2 fontWeight="bold">Obytes Starter</H2>
        <Paragraph>The right way to build your mobile app</Paragraph>

        <Paragraph>🚀 Production-ready </Paragraph>
        <Paragraph>🥷 Developer experience + Productivity</Paragraph>
        <Paragraph>🧩 Minimal code and dependencies</Paragraph>
        <Paragraph>💪 well maintained third-party libraries</Paragraph>
      </YStack>
      <SafeAreaView mt={6}>
        <Button
          onPress={() => {
            setIsFirstTime(false);
          }}
        >
          Let's Get Started
        </Button>
      </SafeAreaView>
    </YStack>
  );
};
