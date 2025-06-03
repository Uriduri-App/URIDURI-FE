import { socialButtonStyles, socialTypoStyles } from './socialButtonStyle';

const getSocialButtonStyle = (pressed: boolean, type: ButtonType, isDisable: boolean) => {
  if (isDisable) return socialButtonStyles[type].disabled;
  return pressed ? socialButtonStyles[type].pressed : socialButtonStyles[type].default;
};

const getSocialTypoStyle = (pressed: boolean, type: ButtonType, isDisable: boolean) => {
  if (isDisable) return socialTypoStyles[type].disabled;
  return pressed ? socialTypoStyles[type].pressed : socialTypoStyles[type].default;
};

export { getSocialButtonStyle, getSocialTypoStyle };
