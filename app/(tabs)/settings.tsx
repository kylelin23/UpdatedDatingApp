import { StyleSheet } from 'react-native';

import { View, Text } from 'react-native';

export default function SettingsPage() {
  return (
    <View style={styles.screen}>
      <Text>Settings</Text>
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
