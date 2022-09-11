import { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Nineteen84 from './components/Nineteen84'

export default function App() {
  const [showBigText, setShowBigText] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowBigText(false)
    }, Math.random() * (45000 - 6666) + 6666)
  }, [])

  return (
    <View style={styles.container}>
      {showBigText && <Nineteen84 />}
      {!showBigText && <Text>There has never been any text here.</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
});
