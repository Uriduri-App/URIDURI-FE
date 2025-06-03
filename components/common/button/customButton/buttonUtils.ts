import { buttonStyles, typoStyles } from './buttonStyles';
import { ButtonType } from './buttonTypes';

const getButtonStyle = (pressed: boolean, type: ButtonType, isDisable: boolean) => {
  if (isDisable) return buttonStyles[type].disabled;
  return pressed ? buttonStyles[type].pressed : buttonStyles[type].default;
};

const getTypoStyle = (pressed: boolean, type: ButtonType, isDisable: boolean) => {
  if (isDisable) return typoStyles[type].disabled;
  return pressed ? typoStyles[type].pressed : typoStyles[type].default;
};

export { getButtonStyle, getTypoStyle };
