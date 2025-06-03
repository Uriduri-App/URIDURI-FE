import type { PressableProps } from 'react-native';
import { ButtonSize, ButtonType } from '../shared/types';

type IconDirection = 'left' | 'right';

type CustomButtonProps = PressableProps & {
  label: string;
  size?: ButtonSize;
  type?: ButtonType;
  isDisable?: boolean;
  icon?: {
    direction?: IconDirection;
  };
};

export type { CustomButtonProps, ButtonType };
