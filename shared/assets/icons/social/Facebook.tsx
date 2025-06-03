import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg';
import { IconProps } from '../types';

export default function Facebook({ size = 24 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      <G clipPath='url(#clip0_2009_14250)'>
        <Rect width={size} height={size} rx='12' fill='#1877F2' />
        <Path
          d='M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80078 14.3391 7.875 15.8297 7.875H17.3438V4.92188C17.3438 4.92188 15.9703 4.6875 14.6578 4.6875C11.9156 4.6875 10.125 6.34922 10.125 9.35625V12H7.07812V15.4688H10.125V23.8547C10.7367 23.9508 11.3625 24 12 24C12.6375 24 13.2633 23.9508 13.875 23.8547V15.4688H16.6711Z'
          fill='white'
        />
      </G>
      <Defs>
        <ClipPath id='clip0_2009_14250'>
          <Rect width={size} height={size} rx='12' fill='white' />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
