import { StyleSheet } from 'react-native';
import { Colors } from '@/styles/Colors';

const socialButtonStyles = {
  filled: StyleSheet.create({
    default: {
      backgroundColor: Colors.primary['50'],
    },
    pressed: {
      backgroundColor: Colors.primary['50'],
    },
    disabled: {
      backgroundColor: Colors.neutral['300'],
    },
  }),

  outline: StyleSheet.create({
    default: {
      backgroundColor: 'transparent',
      borderWidth: 1.5,
      borderColor: Colors.neutral['200'],
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

const socialTypoStyles = {
  filled: StyleSheet.create({
    default: {
      color: Colors.textIcon['600'],
    },
    pressed: {
      color: Colors.textIcon['600'],
    },
    disabled: {
      color: Colors.neutral['300'],
    },
  }),
  outline: StyleSheet.create({
    default: {
      color: Colors.textIcon['600'],
    },
    pressed: {
      color: Colors.textIcon['600'],
    },
    disabled: {
      color: Colors.textIcon['300'],
    },
  }),
  text: StyleSheet.create({
    default: {
      color: Colors.textIcon['600'],
    },
    pressed: {
      color: Colors.textIcon['600'],
    },
    disabled: {
      color: Colors.textIcon['300'],
    },
  }),
};

export { socialButtonStyles, socialTypoStyles };
