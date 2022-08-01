import { useState } from 'react'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useFonts } from 'expo-font'
// import AppLoading from 'expo-app-loading'
import { colors } from './constants'

import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

export default function App() {
	const [userNumber, setUserNumber] = useState(null)
	const [isGameOver, setIsGameOver] = useState(true)
	const [guessRounds, setGuessRounds] = useState(0)

	const [fontsLoaded] = useFonts({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	})

	// if (!fontsLoaded) {
	// 	return <AppLoading />
	// }

	const pickedNumberHandler = pickedNumber => {
		setUserNumber(parseInt(pickedNumber))
		setIsGameOver(false)
	}

	const startNewGameHandler = () => {
		setUserNumber(null)
		setGuessRounds(0)
	}

	const countRoundsHandler = () => setGuessRounds(count => count + 1)

	const gameOverHandler = () => setIsGameOver(true)

	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

	if (userNumber) {
		screen = (
			<GameScreen
				userNumber={userNumber}
				onGameOver={gameOverHandler}
				countRounds={countRoundsHandler}
			/>
		)
	}

	if (isGameOver && userNumber) {
		screen = (
			<GameOverScreen
				userNumber={userNumber}
				roundsCount={guessRounds}
				onStartNewGame={startNewGameHandler}
			/>
		)
	}

	return (
		<LinearGradient
			colors={[colors.primary700, colors.accent500]}
			style={styles.rootScreen}
		>
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

