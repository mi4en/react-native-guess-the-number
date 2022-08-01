import { Alert, StyleSheet, View, Text, FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { gameScreenTitle, minNumber, maxNumber } from '../constants'
import { generateRandomBetween } from '../utils'
import { colors } from '../constants'

import ScreenTitle from '../components/ui/ScreenTitle'
import Card from '../components/ui/Card'
import InstrucitonText from '../components/ui/InstrucitonText'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'

let minBoundary = 1
let maxBoundary = 100

const GameScreen = ({ userNumber, onGameOver, countRounds }) => {
	const initialGuess = generateRandomBetween(minNumber, maxNumber, userNumber)
	const [currentGuess, setCurrentGuess] = useState(initialGuess)
	const [guessRounds, setGuessRounds] = useState([initialGuess])

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver()
		}
	}, [currentGuess, userNumber, onGameOver])

	useEffect(() => {
		minBoundary = 1
		maxBoundary = 100
	}, [])

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

		countRounds()

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
		setGuessRounds(prevGuessRounds => [newRandomNumber, ...prevGuessRounds])
	}

	return (
		<View style={styles.screen}>
			<ScreenTitle>{gameScreenTitle}</ScreenTitle>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<InstrucitonText style={styles.instructionText}>
					Higher or lower?
				</InstrucitonText>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={() => nextGuessHandler('lower')}>
							<Ionicons name='md-remove' size={24} color={colors.white} />
						</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={() => nextGuessHandler('greater')}>
							<Ionicons name='md-add' size={24} color={colors.white} />
						</PrimaryButton>
					</View>
				</View>
			</Card>
			<View>
				{/* {guessRounds.map((round, index) => (
					<Text key={index}>{round}</Text>
				))} */}
				<FlatList
					data={guessRounds}
					renderItem={itemData => <Text>{itemData.item}</Text>}
					keyExtractor={item => item}
				/>
			</View>
		</View>
	)
}

export default GameScreen

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
	},
	instructionText: {
		marginBottom: 12,
	},
	buttonsContainer: {
		flexDirection: 'row',
	},
	buttonContainer: {
		flex: 1,
	},
})
