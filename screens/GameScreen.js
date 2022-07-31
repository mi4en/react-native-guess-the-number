import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { gameScreenTitle, minNumber, maxNumber } from '../constants'
import { generateRandomBetween } from '../utils'

import ScreenTitle from '../components/ui/ScreenTitle'
import NumberContainer from '../components/game/NumberContainer'

const GameScreen = ({ userNumber }) => {
	const initialGuess = generateRandomBetween(minNumber, maxNumber, userNumber)
	const [currentGuess, setCurrentGuess] = useState(initialGuess)

	return (
		<View style={styles.screen}>
			<ScreenTitle>{gameScreenTitle}</ScreenTitle>
			<NumberContainer>{currentGuess}</NumberContainer>
			<View>
				<Text>Higher/Lower</Text>
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
})
