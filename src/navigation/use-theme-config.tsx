import type { Theme } from '@react-navigation/native';
import {
  DarkTheme as _DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { useTheme } from 'tamagui';

import { useSelectedTheme } from '@/core';

export function useThemeConfig() {
  const theme = useTheme();
  const { selectedTheme } = useSelectedTheme();
  const colorScheme = useColorScheme();

  const DarkTheme: Theme = useMemo(
    () => ({
      ..._DarkTheme,
      colors: {
        ..._DarkTheme.colors,
        primary: theme.color.val,
        background: '#000000',
        text: theme.color?.val,
        border: theme.gray2?.val,
        card: theme.gray1.val,
      },
    }),
    [theme]
  );

  const LightTheme: Theme = useMemo(
    () => ({
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        primary: theme.color.val,
        background: '#ffffff',
      },
    }),
    [theme]
  );

  if (selectedTheme === 'dark') return DarkTheme;

  return {
    dark: DarkTheme,
    light: LightTheme,
  }[selectedTheme === 'system' ? (colorScheme as string) : selectedTheme];
}
