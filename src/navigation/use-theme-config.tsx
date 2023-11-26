import type { Theme } from '@react-navigation/native';
import {
  DarkTheme as _DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { useMemo } from 'react';
import { useTheme } from 'tamagui';

import { useSelectedTheme } from '@/core';

export function useThemeConfig() {
  const theme = useTheme();
  const { selectedTheme } = useSelectedTheme();

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

  return {
    dark: DarkTheme,
    light: LightTheme,
  }[selectedTheme];
}
