import { useState } from 'react'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'

export default function App() {
	const [userNumber, setUserNumber] = useState(null)

	const pickedNumberHandler = pickedNumber => setUserNumber(pickedNumber)

	const screen = userNumber ? (
		<GameScreen />
	) : (
		<StartGameScreen onPickNumber={pickedNumberHandler} />
	)

	return (
		<LinearGradient colors={['#4e0329', '#dbd52f']} style={styles.rootScreen}>
			<ImageBackground
				source={require('./assets/background.png')}
				resizeMode='cover'
				imageStyle={styles.backgroundImage}
				style={styles.rootScreen}
			>
				<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.15,
	},
})

