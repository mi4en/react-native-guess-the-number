import { Alert, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { gameScreenTitle } from '../constants'
import { generateRandomBetween } from '../utils'

import ScreenTitle from '../components/ui/ScreenTitle'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'

let minNumber = 1
let maxNumber = 100

const GameScreen = ({ userNumber }) => {
	const initialGuess = generateRandomBetween(minNumber, maxNumber, userNumber)
	const [currentGuess, setCurrentGuess] = useState(initialGuess)

	const nextGuessHandler = direction => {
		if (
			(direction === 'lower' && currentGuess < userNumber) ||
			(direction === 'greater' && currentGuess > userNumber)
		) {
			Alert.alert("Don't cheat!", [{ text: 'Sorry!', style: 'cancel' }])
			return
		}

		if (direction === 'lower') {
			maxNumber = currentGuess
		} else {
			minNumber = currentGuess + 1
		}

		const newRandomNumber = generateRandomBetween(
			minNumber,
			maxNumber,
			currentGuess,
		)

		setCurrentGuess(newRandomNumber)
	}

	return (
		<View style={styles.screen}>
			<ScreenTitle>{gameScreenTitle}</ScreenTitle>
			<NumberContainer>{currentGuess}</NumberContainer>
			<View>
				<Text>Higher or lower?</Text>
				<View style={styles.buttonsContainer}>
					<PrimaryButton onPress={() => nextGuessHandler('lower')}>
						-
					</PrimaryButton>
					<PrimaryButton onPress={() => nextGuessHandler('greater')}>
						+
					</PrimaryButton>
				</View>
			</View>
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
		// flexDirection: 'row',
	},
})
