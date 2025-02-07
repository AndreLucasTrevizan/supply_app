import { StyleSheet, Text, View } from "react-native";

export default function StorageScreen() {
  return (
    <View style={styles.container}>
      <Text>Storagescreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  }
});
