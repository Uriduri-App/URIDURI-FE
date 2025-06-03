import { Button, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  return (
    <View>
      <Text>Main Page</Text>
      <Button title={'로그인'} onPress={() => router.push('/auth')} />
    </View>
  );
}
