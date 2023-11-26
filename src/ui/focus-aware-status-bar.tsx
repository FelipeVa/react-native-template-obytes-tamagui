import { useIsFocused } from '@react-navigation/native';
import * as React from 'react';
import type { StatusBarStyle } from 'react-native';
import { StatusBar } from 'react-native';

import { useSelectedTheme } from '@/core';

type Props = React.ComponentProps<typeof StatusBar>;
export const FocusAwareStatusBar = (props: Props) => {
  const isFocused = useIsFocused();
  const { selectedTheme } = useSelectedTheme();
  const barStyle = {
    dark: 'light-content',
    light: 'dark-content',
  }[selectedTheme];

  return isFocused ? (
    <StatusBar barStyle={barStyle as StatusBarStyle} {...props} />
  ) : null;
};
