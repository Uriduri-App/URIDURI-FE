import { StyleSheet, Text, View } from 'react-native';
import { fonts } from '@/styles/Fonts';

type Props = {
  title: string;
  subtitle: string;
};

export default function WelcomeTitle(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.subTitle}>{props.subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  },
  title: {
    ...fonts.headline.h2,
    textAlign: 'center',
  },
  subTitle: {
    ...fonts.body.b1,
    textAlign: 'center',
  },
});
