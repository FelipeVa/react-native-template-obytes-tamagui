import { SafeAreaView as NSafeAreaView } from 'react-native-safe-area-context';
import { styled, View } from 'tamagui';

export const SafeAreaView = styled(NSafeAreaView, {
  name: 'SafeAreaView',
  flex: 1,
});

export { View };
