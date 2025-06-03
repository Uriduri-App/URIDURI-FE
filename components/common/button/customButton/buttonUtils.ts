import { buttonSize, buttonStyles, typoStyles } from '@/components/common/button/customButton/buttonStyles';
import { ButtonSize, ButtonType } from '@/components/common/button/customButton/buttonTypes';

const getButtonStyle = (pressed: boolean, type: ButtonType, isDisable: boolean) => {
  if (isDisable) return buttonStyles[type].disabled;
  return pressed ? buttonStyles[type].pressed : buttonStyles[type].default;
};

const getTypoStyle = (pressed: boolean, type: ButtonType, isDisable: boolean) => {
  if (isDisable) return typoStyles[type].disabled;
  return pressed ? typoStyles[type].pressed : typoStyles[type].default;
};

const getButtonSize = (size: ButtonSize) => {
  return buttonSize[size];
};

export { getButtonStyle, getTypoStyle, getButtonSize };
