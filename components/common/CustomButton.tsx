import { Pressable, StyleSheet, Text, View } from 'react-native';
import { fonts } from '@/styles/Fonts';
import { Colors } from '@/styles/Colors';
import { ArrowLeft, ArrowRight } from '@/shared/assets/icons/arrow';

type Props = {
  label: string;
  size?: 'large' | 'medium' | 'small';
  type?: 'filled' | 'outline' | 'text';
  isDisable?: boolean;
};

export default function CustomButton({ label, isDisable = false, size = 'large', type = 'filled' }: Props) {
  const getButtonStyle = (pressed: boolean) => {
    if (isDisable) return buttonStyles[type].disabled;
    return pressed ? buttonStyles[type].pressed : buttonStyles[type].default;
  };

  const getTypoStyle = (pressed: boolean) => {
    if (isDisable) return typoStyles[type].disabled;
    return pressed ? typoStyles[type].pressed : typoStyles[type].default;
  };

  return (
    <Pressable
      onPress={() => console.log('Pressable')}
      accessibilityState={{ disabled: isDisable }}
      disabled={isDisable}
      style={({ pressed }) => [styles.base, getButtonStyle(pressed)]}>
      {({ pressed }) => (
        <View style={styles.typoBase}>
          <ArrowLeft size={24} color={getTypoStyle(pressed).color} />
          <Text style={[styles.label, getTypoStyle(pressed)]}>{label}</Text>
          <ArrowRight size={24} color={getTypoStyle(pressed).color} />
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

const buttonStyles = {
  filled: StyleSheet.create({
    default: {
      backgroundColor: Colors.primary['700'],
    },
    pressed: {
      backgroundColor: Colors.primary['900'],
    },
    disabled: {
      backgroundColor: Colors.neutral['100'],
    },
  }),

  outline: StyleSheet.create({
    default: {
      backgroundColor: 'transparent',
      borderWidth: 1.5,
      borderColor: Colors.primary['700'],
    },
    pressed: {
      backgroundColor: Colors.primary['50'],
      borderWidth: 1.5,
      borderColor: Colors.primary['900'],
    },
    disabled: {
      backgroundColor: 'transparent',
      borderWidth: 1.5,
      borderColor: Colors.neutral['200'],
    },
  }),

  text: StyleSheet.create({
    default: {
      backgroundColor: 'transparent',
    },
    pressed: {
      backgroundColor: Colors.primary['50'],
    },
    disabled: {
      backgroundColor: 'transparent',
    },
  }),
};

const typoStyles = {
  filled: StyleSheet.create({
    default: {
      color: Colors.textIcon['0'],
    },
    pressed: {
      color: Colors.textIcon['0'],
    },
    disabled: {
      color: Colors.neutral['300'],
    },
  }),
  outline: StyleSheet.create({
    default: {
      color: Colors.primary['700'],
    },
    pressed: {
      color: Colors.primary['900'],
    },
    disabled: {
      color: Colors.neutral['300'],
    },
  }),
  text: StyleSheet.create({
    default: {
      color: Colors.primary['700'],
    },
    pressed: {
      color: Colors.primary['900'],
    },
    disabled: {
      color: Colors.neutral['300'],
    },
  }),
};
