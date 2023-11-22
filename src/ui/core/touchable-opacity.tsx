import { TouchableOpacity as NTouchableOpacity } from 'react-native';
import { styled } from 'tamagui';

// TODO: seems tamagui has some incompatible types with react-native
// https://tamagui.dev/docs/core/styled#non-working-react-native-views
export const TouchableOpacity = styled(NTouchableOpacity, {
  name: 'TouchableOpacity',
});
