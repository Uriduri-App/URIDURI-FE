import type { PressableProps } from 'react-native';

type ButtonSize = 'large' | 'medium' | 'small';

type ButtonType = 'filled' | 'outline' | 'text';

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

export type { CustomButtonProps, ButtonSize, ButtonType };
