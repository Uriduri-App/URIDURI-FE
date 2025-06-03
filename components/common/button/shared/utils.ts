import { ButtonSize } from '@/components/common/button/shared/types';
import { buttonSize } from '@/components/common/button/customButton/buttonStyles';

const getButtonSize = (size: ButtonSize) => {
  return buttonSize[size];
};

export { getButtonSize };
