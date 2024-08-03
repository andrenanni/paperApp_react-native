import React from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, ActivityIndicator, MD2Colors, Avatar } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.teste} >
        <Avatar.Icon size={100} icon="folder"/>
      </View>

      <Button icon="google-downasaur" mode="contained" onPress={() => console.log('Pressed')}>
        Press me
      </Button>

      {/* <ActivityIndicator animating={true} color={'crimson'} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  teste: {
    paddingBottom:20
  }
});
