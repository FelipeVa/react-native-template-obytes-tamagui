import { config } from '@tamagui/config/v2-native';
import { createTamagui } from 'tamagui';

const tamaguiConfig = createTamagui(config);

export type Config = typeof tamaguiConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Config {}
}

export default tamaguiConfig;
