import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { WelcomeTitle } from '@/components/auth';

export default function AuthScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeTitle title={'반가워요!'} subtitle={'당신만의 여정, 지금부터 시작됩니다'} />
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
});
