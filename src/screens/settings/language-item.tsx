import * as React from 'react';
import { ListItem } from 'tamagui';

import { translate, useSelectedLanguage } from '@/core';
import type { Language } from '@/core/i18n/resources';
import type { Option } from '@/ui';
import { Options, useModalRef } from '@/ui';

export const LanguageItem = () => {
  const { language, setLanguage } = useSelectedLanguage();
  const optionsRef = useModalRef();
  const open = React.useCallback(
    () => optionsRef.current?.present(),
    [optionsRef]
  );
  const onSelect = React.useCallback(
    (option: Option) => {
      setLanguage(option.value as Language);
      optionsRef.current?.dismiss();
    },
    [setLanguage, optionsRef]
  );

  const langs = React.useMemo(
    () => [
      { label: translate('settings.english'), value: 'en' },
      { label: translate('settings.arabic'), value: 'ar' },
    ],
    []
  );

  const selectedLanguage = React.useMemo(
    () => langs.find((lang) => lang.value === language),
    [language, langs]
  );

  return (
    <>
      <ListItem
        title={translate('settings.language')}
        subTitle={selectedLanguage?.label}
        onPress={open}
      />
      <Options
        ref={optionsRef}
        options={langs}
        onSelect={onSelect}
        value={selectedLanguage?.value}
      />
    </>
  );
};
