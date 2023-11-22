import React from 'react';

import { Input, Select, View } from '@/ui';

import { Title } from './title';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const InputVariants = () => {
  const [value, setValue] = React.useState<string | undefined>();
  return (
    <>
      <Title text="Form" />
      <View>
        <Input
          name="default"
          label="Default"
          placeholder="Lorem ipsum dolor sit amet"
        />
        <Input name="error" label="Error" error="This is a message error" />
        <Input name="focused" label="Focused" />
        <Select
          label="Select"
          placeholder="Placeholder"
          options={options}
          value={value}
          onValueChange={(changeValue) => setValue(changeValue)}
          error="This is a message error"
        />
      </View>
    </>
  );
};
