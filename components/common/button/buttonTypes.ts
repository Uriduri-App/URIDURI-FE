import type { PressableProps } from 'react-native';

type ButtonSize = 'large' | 'medium' | 'small';

type ButtonType = 'filled' | 'outline' | 'text';

type CustomButtonProps = PressableProps & {
  label: string;
  size?: ButtonSize;
  type?: ButtonType;
  isDisable?: boolean;
};

export type { CustomButtonProps, ButtonSize, ButtonType };
