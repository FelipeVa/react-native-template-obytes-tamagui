import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { IconProps } from '@tamagui/helpers-icon';
import { Brush, Cog, Newspaper } from '@tamagui/lucide-icons';
import type { ComponentType } from 'react';
import * as React from 'react';
import { useTheme } from 'tamagui';

import { useSelectedTheme } from '@/core';
import { Settings, Style } from '@/screens';

import { FeedNavigator } from './feed-navigator';

type TabParamList = {
  Style: undefined;
  FeedNavigator: undefined;
  Settings: undefined;
};

type TabType = {
  name: keyof TabParamList;
  component: ComponentType<any>;
  label: string;
};

type TabIconsType = {
  [key in keyof TabParamList]: (props: IconProps) => JSX.Element;
};

const Tab = createBottomTabNavigator<TabParamList>();

const tabsIcons: TabIconsType = {
  Style: (props: IconProps) => <Brush {...props} />,
  FeedNavigator: (props: IconProps) => <Newspaper {...props} />,
  Settings: (props: IconProps) => <Cog {...props} />,
};

export type TabList<T extends keyof TabParamList> = {
  navigation: NativeStackNavigationProp<TabParamList, T>;
  route: RouteProp<TabParamList, T>;
};

const tabs: TabType[] = [
  {
    name: 'Style',
    component: Style,
    label: 'Style',
  },
  {
    name: 'FeedNavigator',
    component: FeedNavigator,
    label: 'Feed',
  },
  {
    name: 'Settings',
    component: Settings,
    label: 'Settings',
  },
];

type BarIconType = {
  name: keyof TabParamList;
  color: string;
};

const BarIcon = ({ color, name, ...reset }: BarIconType) => {
  const Icon = tabsIcons[name];
  return <Icon color={color} {...reset} />;
};

export const TabNavigator = () => {
  const theme = useTheme();
  const { selectedTheme } = useSelectedTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarInactiveTintColor:
          selectedTheme === 'dark' ? theme.gray11?.val : theme.gray11.val,
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color }) => <BarIcon name={route.name} color={color} />,
      })}
    >
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        {tabs.map(({ name, component, label }) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={component}
              options={{
                title: label,
                tabBarTestID: `${name}-tab`,
              }}
            />
          );
        })}
      </Tab.Group>
    </Tab.Navigator>
  );
};
