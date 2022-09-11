import { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Nineteen84 from './components/Nineteen84'

export default function App() {
  const [showText, setShowText] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowText(false)
    }, Math.random() * (45000 - 7000) + 7000)
  }, [])

  return (
    <View style={styles.container}>
      {showText && <Nineteen84 />}
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
