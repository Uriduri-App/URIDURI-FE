import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { fonts } from '@/styles/Fonts';

export default function AuthScreen() {
  return (
    <SafeAreaView
      style={{
        marginTop: 24,
      }}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTitle}>반가워요!</Text>
        <Text style={styles.welcomeSubTitle}>당신만의 여정, 지금부터 시작됩니다</Text>
      </View>

      <View>
        <View>
          <Text>구글</Text>
          <Text>페이스북</Text>
          <Text>애플</Text>
        </View>

        <View>
          <Text>Or</Text>
        </View>
        <View>
          <Text>Login</Text>
        </View>
      </View>

      <View>
        <Text>Sign up Footer</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  welcomeContainer: {
    padding: 16,
    gap: 16,
  },
  welcomeTitle: {
    ...fonts.headline.h2,
    textAlign: 'center',
  },
  welcomeSubTitle: {
    ...fonts.body.b1,
    textAlign: 'center',
  },
});
