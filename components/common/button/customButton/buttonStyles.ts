import { StyleSheet } from 'react-native';
import { Colors } from '@/styles/Colors';

const buttonSize = {
  large: {
    height: 48,
  },
  medium: {
    height: 44,
  },
  small: {
    height: 40,
  },
};

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

export { buttonStyles, typoStyles, buttonSize };
