import 'react-native-gesture-handler';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import * as SplashScreen from 'expo-splash-screen';
import React, { Suspense } from 'react';
import { StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TamaguiProvider, Text, Theme } from 'tamagui';

import { APIProvider } from '@/api';
import { hydrateAuth, useSelectedTheme } from '@/core';
import { RootNavigator } from '@/navigation';

import tamaguiConfig from '../tamagui.config';

hydrateAuth();
SplashScreen.preventAutoHideAsync();

const App = () => {
  const { selectedTheme } = useSelectedTheme();

  return (
    <TamaguiProvider defaultTheme={selectedTheme} config={tamaguiConfig}>
      <GestureHandlerRootView style={styles.container}>
        <Suspense fallback={<Text>Loading...</Text>}>
          <Theme name="red">
            <BottomSheetModalProvider>
              <APIProvider>
                <RootNavigator />
                <FlashMessage position="top" />
              </APIProvider>
            </BottomSheetModalProvider>
          </Theme>
        </Suspense>
      </GestureHandlerRootView>
    </TamaguiProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
