import { StyleSheet } from 'react-native';

import { View, Text } from 'react-native';

export default function MessagingPage() {
  return (
    <View style={styles.screen}>
      <Text>Messaging Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
