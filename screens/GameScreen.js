import { Alert, StyleSheet, View } from 'react-native'
import { useState, useEffect } from 'react'
import { gameScreenTitle, minNumber, maxNumber } from '../constants'
import { generateRandomBetween } from '../utils'

import ScreenTitle from '../components/ui/ScreenTitle'
import Card from '../components/ui/Card'
import InstrucitonText from '../components/ui/InstrucitonText'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'

let minBoundary = 1
let maxBoundary = 100

const GameScreen = ({ userNumber, onGameOver }) => {
	const initialGuess = generateRandomBetween(minNumber, maxNumber, userNumber)
	const [currentGuess, setCurrentGuess] = useState(initialGuess)

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver()
		}
	}, [currentGuess, userNumber, onGameOver])

	const nextGuessHandler = direction => {
		if (
			(direction === 'lower' && currentGuess < userNumber) ||
			(direction === 'greater' && currentGuess > userNumber)
		) {
			Alert.alert('Gotcha!', "Don't cheat!", [
				{ text: 'Sorry!', style: 'cancel' },
			])
			return
		}

		if (direction === 'lower') {
			maxBoundary = currentGuess
		} else {
			minBoundary = currentGuess + 1
		}

		const newRandomNumber = generateRandomBetween(
			minBoundary,
			maxBoundary,
			currentGuess,
		)

		setCurrentGuess(newRandomNumber)
	}

	return (
		<View style={styles.screen}>
			<ScreenTitle>{gameScreenTitle}</ScreenTitle>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<InstrucitonText>Higher or lower?</InstrucitonText>
				<View style={styles.buttonsContainer}>
					<PrimaryButton onPress={() => nextGuessHandler('lower')}>
						-
					</PrimaryButton>
					<PrimaryButton onPress={() => nextGuessHandler('greater')}>
						+
					</PrimaryButton>
				</View>
			</Card>
			{/* <View>Log Rounds</View> */}
		</View>
	)
}

export default GameScreen

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'stretch',
	},
})
