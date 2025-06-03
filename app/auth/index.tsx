import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { WelcomeTitle } from '@/components/auth';
import { CustomButton } from '@/components/common';
import { SocialButton } from '@/components/common/button';

export default function AuthScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeTitle title={'반가워요!'} subtitle={'당신만의 여정, 지금부터 시작됩니다'} />
      <View>
        <View>
          <SocialButton
            label={'Google로 시작하기'}
            type={'outline'}
            icon={{
              type: 'google',
            }}
          />
          <SocialButton label={'FaceBook으로 시작하기'} type={'outline'} icon={{ type: 'facebook' }} />
          <SocialButton label={'Apple로 시작하기'} type={'outline'} icon={{ type: 'apple' }} />
        </View>

        <View>
          <Text>Or</Text>
        </View>
        <View>
          <CustomButton label={'로그인'} size={'large'} onPress={() => console.log('로그인')} />
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
