import { StyleSheet } from 'react-native';

import { View, Text } from 'react-native';

export default function LiveChat() {
  return (
    <View style={styles.screen}>
      <Text>Live Chat Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  }
});
