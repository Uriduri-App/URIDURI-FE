import { Pressable, StyleSheet, Text, View } from 'react-native';
import { fonts } from '@/styles/Fonts';
import { Google } from '@/shared/assets/icons/social';
import { getSocialButtonStyle, getSocialTypoStyle } from './socialButtonUtils';
import { getButtonSize } from '../shared/utils';
import { SocialButtonProps } from './socialButtonTypes';

export default function SocialButton({
  label,
  isDisable = false,
  size = 'large',
  type = 'filled',
  ...props
}: SocialButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.base, getButtonSize(size), getSocialButtonStyle(pressed, type, isDisable)]}
      {...props}
      disabled={isDisable}
      accessibilityState={{ disabled: isDisable }}>
      {({ pressed }) => (
        <View style={styles.typoBase}>
          <Google size={24} />

          {label && <Text style={[styles.label, getSocialTypoStyle(pressed, type, isDisable)]}>{label}</Text>}
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  typoBase: {
    gap: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  label: {
    ...fonts.button.Btn1,
    marginTop: 3.5,
  },
});
