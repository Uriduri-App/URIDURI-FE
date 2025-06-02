import { Pressable, StyleSheet, Text, View } from 'react-native';
import { fonts } from '@/styles/Fonts';
import { ArrowLeft, ArrowRight } from '@/shared/assets/icons/arrow';
import { CustomButtonProps } from '@/components/common/button/buttonTypes';
import { getButtonSize, getButtonStyle, getTypoStyle } from '@/components/common/button/buttonUtils';

export default function CustomButton({
  label,
  isDisable = false,
  size = 'large',
  type = 'filled',
  ...props
}: CustomButtonProps) {
  return (
    <Pressable
      {...props}
      accessibilityState={{ disabled: isDisable }}
      disabled={isDisable}
      style={({ pressed }) => [styles.base, getButtonSize(size), getButtonStyle(pressed, type, isDisable)]}>
      {({ pressed }) => (
        <View style={styles.typoBase}>
          <ArrowLeft size={24} color={getTypoStyle(pressed, type, isDisable).color} />
          <Text style={[styles.label, getTypoStyle(pressed, type, isDisable)]}>{label}</Text>
          <ArrowRight size={24} color={getTypoStyle(pressed, type, isDisable).color} />
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 48,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    ...fonts.button.Btn1,
  },

  typoBase: {
    gap: 4,
    flexDirection: 'row',
  },
});
