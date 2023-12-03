import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Button, H1, ScrollView, YStack } from 'tamagui';
import * as z from 'zod';

import { ControlledInput } from '@/ui';

const schema = z.object({
  name: z.string().optional(),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password must be at least 6 characters'),
});

export type FormType = z.infer<typeof schema>;

export type LoginFormProps = {
  onSubmit?: SubmitHandler<FormType>;
};

export const LoginForm = ({ onSubmit = () => {} }: LoginFormProps) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
      }}
    >
      <YStack flex={1} justifyContent="center" p={4} space>
        <H1 testID="form-title" textAlign="center">
          Sign In
        </H1>
        <YStack space>
          <ControlledInput
            testID="name"
            control={control}
            name="name"
            label="Name"
          />
          <ControlledInput
            testID="email-input"
            control={control}
            name="email"
            label="Email"
          />
          <ControlledInput
            testID="password-input"
            control={control}
            name="password"
            label="Password"
            placeholder="***"
            secureTextEntry={true}
          />
          <Button testID="login-button" onPress={handleSubmit(onSubmit)}>
            Login
          </Button>
        </YStack>
      </YStack>
    </ScrollView>
  );
};
