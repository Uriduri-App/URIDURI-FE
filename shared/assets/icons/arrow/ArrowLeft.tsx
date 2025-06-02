import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';
import { IconProps } from '@/shared/assets/icons/types';
import { Colors } from '@/styles/Colors';

export default function ArrowLeft({ size = 24, color = Colors.textIcon['500'] }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      <G clip-path='url(#clip0_1420_8429)'>
        <Path
          d='M14.4831 16.9655L9.51758 11.9999L14.4831 7.03442'
          stroke={color}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </G>
      <Defs>
        <ClipPath id='clip0_1420_8429'>
          <Rect width={size} height={size} fill='white' />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
