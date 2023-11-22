import { zodResolver } from '@hookform/resolvers/zod';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { showMessage } from 'react-native-flash-message';
import { Button, YStack } from 'tamagui';
import { z } from 'zod';

import { useAddPost } from '@/api';
import { ControlledInput, showErrorMessage } from '@/ui';

const schema = z.object({
  title: z.string().min(10),
  body: z.string().min(120),
});

type FormType = z.infer<typeof schema>;

export const AddPost = () => {
  const { control, handleSubmit } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  const { mutate: addPost } = useAddPost();

  const onSubmit = (data: FormType) => {
    addPost(
      { ...data, userId: 1 },
      {
        onSuccess: () => {
          showMessage({
            message: 'Post added successfully',
            type: 'success',
          });
          // here you can navigate to the post list and refresh the list data
          //queryClient.invalidateQueries(usePosts.getKey());
        },
        onError: () => {
          showErrorMessage('Error adding post');
        },
      }
    );
  };
  return (
    <YStack flex={1} p="$3.5">
      <ControlledInput
        name="title"
        label="Title"
        control={control}
        testID="title"
      />
      <ControlledInput
        name="body"
        label="Content"
        control={control}
        multiline
        testID="body-input"
      />
      <Button mt="$4" onPress={handleSubmit(onSubmit)} testID="add-post-button">
        Add Post
      </Button>
    </YStack>
  );
};
