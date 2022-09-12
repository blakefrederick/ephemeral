import { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button, Pressable } from 'react-native'
import Nineteen84 from './components/Nineteen84'

export default function App() {
  const [showBigText, setShowBigText] = useState(true)
  const [showEndText, setShowEndText] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowBigText(false)
    }, Math.random() * (19999 - 6666) + 6666)
  }, [])

  const onPressLearnMore = () => {
    if (!showBigText) {
      setShowEndText(false)
    }
    setShowBigText(false)
  }

  const onPressReset = () => {
    setShowEndText(true)
    setShowBigText(true)
  }

  return (
    <View style={(!showBigText && !showEndText) ? styles.end : styles.container}>
      {showBigText && <Nineteen84 />}
      {!showBigText && showEndText && <Text>There has never been any text here.</Text>}
      <View>
        {!showBigText && showEndText && 
          <Pressable 
          onPress={onPressLearnMore}
          style={styles.button}>
            <Text style={styles.text}>Learn more</Text>
          </Pressable>
        }
      </View>
      <View>
        {showBigText && <Text style={styles.destruct}>Text could self-destruct without warning</Text>}
      </View>

      {(!showBigText && !showEndText) &&
        <View>
          <Pressable onPress={onPressReset}><Text style={styles.white}>Reset</Text></Pressable>
        </View>
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  end: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'bottom',
    justifyContent: 'right',
    height: '100%'
  },
  destruct: {
    color: 'red',
    fontWeight: 'bold',
    padding: 5,
    margin: 5,
  },
  white : {
    color: 'white',
    padding: 35,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 22,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    margin: 30,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
