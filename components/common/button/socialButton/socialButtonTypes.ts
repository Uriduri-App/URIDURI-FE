import { PressableProps } from 'react-native';
import { ButtonSize, ButtonType } from '../shared/types';

type SocialType = 'google' | 'facebook' | 'apple';

type SocialButtonProps = PressableProps & {
  label?: string;
  isDisable?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  icon?: {
    type: SocialType;
  };
};

export { SocialButtonProps, SocialType };
