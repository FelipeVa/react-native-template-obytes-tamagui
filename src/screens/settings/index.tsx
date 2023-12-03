import { Env } from '@env';
import {
  Book,
  Github,
  Globe,
  Info,
  LogOut,
  Share,
  ShieldQuestion,
  Sparkles,
  Star,
} from '@tamagui/lucide-icons';
import * as React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { H4, H5, ListItem, ScrollView, Stack, YGroup, YStack } from 'tamagui';

import { translate, useAuth } from '@/core';
import { FocusAwareStatusBar } from '@/ui';

import { LanguageItem } from './language-item';
import { ThemeItem } from './theme-item';

const SettingsAbout = () => {
  return (
    <YStack>
      <H4>{translate('settings.about')}</H4>
      <YGroup bordered size="$4">
        <YGroup.Item>
          <ListItem
            pressTheme
            icon={Star}
            title={translate('settings.app_name')}
            subTitle={Env.NAME}
          />
          <ListItem
            pressTheme
            icon={Star}
            title={translate('settings.version')}
            subTitle={Env.VERSION}
          />
        </YGroup.Item>
      </YGroup>
    </YStack>
  );
};

const SettingsSupportUs = () => {
  return (
    <YStack>
      <H4>{translate('settings.support_us')}</H4>
      <YGroup bordered size="$4">
        <YGroup.Item>
          <ListItem
            pressTheme
            icon={Share}
            title={translate('settings.share')}
          />
          <ListItem
            pressTheme
            icon={Sparkles}
            title={translate('settings.rate')}
          />
          <ListItem
            pressTheme
            icon={Info}
            title={translate('settings.support')}
          />
        </YGroup.Item>
      </YGroup>
    </YStack>
  );
};

const SettingsLinks = () => {
  return (
    <YStack>
      <H4>{translate('settings.links')}</H4>
      <YGroup bordered size="$4">
        <YGroup.Item>
          <ListItem
            pressTheme
            icon={ShieldQuestion}
            title={translate('settings.privacy')}
          />
          <ListItem
            pressTheme
            icon={Book}
            title={translate('settings.terms')}
          />
          <ListItem
            pressTheme
            icon={Github}
            title={translate('settings.github')}
          />
          <ListItem
            pressTheme
            icon={Globe}
            title={translate('settings.website')}
          />
        </YGroup.Item>
      </YGroup>
    </YStack>
  );
};

export const Settings = () => {
  const signOut = useAuth.use.signOut();
  const insets = useSafeAreaInsets();

  return (
    <>
      <FocusAwareStatusBar />
      <Stack paddingTop={insets.top}>
        <ScrollView>
          <YStack px="$2" gap="$4">
            <YStack>
              <H4>{translate('settings.title')}</H4>
              <H5>{translate('settings.generale')}</H5>
              <YGroup bordered size="$4">
                <YGroup.Item>
                  <LanguageItem />
                  <ThemeItem />
                </YGroup.Item>
              </YGroup>
            </YStack>

            <SettingsAbout />

            <SettingsSupportUs />

            <SettingsLinks />

            <YStack pb="$3">
              <YGroup bordered size="$4">
                <YGroup.Item>
                  <ListItem
                    pressTheme
                    icon={LogOut}
                    title={translate('settings.logout')}
                    onPress={signOut}
                  />
                </YGroup.Item>
              </YGroup>
            </YStack>
          </YStack>
        </ScrollView>
      </Stack>
    </>
  );
};
