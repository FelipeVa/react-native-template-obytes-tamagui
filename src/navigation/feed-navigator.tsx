import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Button } from 'tamagui';

import { AddPost, Feed, Post } from '@/screens';

export type FeedStackParamList = {
  Feed: undefined;
  Post: { id: number };
  AddPost: undefined;
};

const Stack = createNativeStackNavigator<FeedStackParamList>();

const GoToAddPost = () => {
  const { navigate } = useNavigation();
  return (
    <Button
      onPress={() => navigate('AddPost')}
      unstyled
      fontSize="$4"
      color="$red9"
    >
      Create
    </Button>
  );
};

export const FeedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => <GoToAddPost />,
        }}
      >
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Post" component={Post} />
      </Stack.Group>

      <Stack.Screen name="AddPost" component={AddPost} />
    </Stack.Navigator>
  );
};
