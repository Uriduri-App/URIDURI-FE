import { IconProps } from '@/shared/assets/icons/types';
import { Colors } from '@/styles/Colors';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

export default function ArrowRight({ size = 24, color = Colors.textIcon['500'] }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      <Defs>
        <ClipPath id='clip0'>
          <Rect width={size} height={size} fill='white' />
        </ClipPath>
      </Defs>
      <G clipPath='url(#clip0)'>
        <Path
          d='M9.51758 7.03442L14.4831 11.9999L9.51758 16.9655'
          stroke={color}
          strokeWidth={1.5}
          strokeMiterlimit={10}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </G>
    </Svg>
  );
}
