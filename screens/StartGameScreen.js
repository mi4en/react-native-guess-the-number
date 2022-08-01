import { useState } from 'react'
import { StyleSheet, View, TextInput, Alert, Text } from 'react-native'
import {
	maxNumberInputLength,
	alertTitle,
	alertMessage,
	colors,
} from '../constants'

import ScreenTitle from '../components/ui/ScreenTitle'
import Card from '../components/ui/Card'
import InstrucitonText from '../components/ui/InstrucitonText'
import PrimaryButton from '../components/ui/PrimaryButton'

const StartGameScreen = ({ onPickNumber }) => {
	const [enteredNumber, setEnteredNumber] = useState('')

	const inputHandler = value => {
		setEnteredNumber(value)
	}

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredNumber)

		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(alertTitle, alertMessage, [
				{ text: 'OK', style: 'destructive', onPress: resetInputHandler },
			])
			return
		}

		console.log('enteredInput :>> ', enteredNumber)
		onPickNumber(enteredNumber)
	}

	const resetInputHandler = () => setEnteredNumber('')

	return (
		<View style={styles.rootContainer}>
			<ScreenTitle>Guess My Number</ScreenTitle>
			<Card>
				<InstrucitonText>Enter Number</InstrucitonText>
				<TextInput
					style={styles.numberInput}
					maxLength={maxNumberInputLength}
					keyboardType='number-pad'
					autoCapitalize='none'
					autoCorrect={false}
					value={enteredNumber}
					onChangeText={inputHandler}
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
					</View>
				</View>
			</Card>
		</View>
	)
}

export default StartGameScreen

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		marginTop: 100,
		alignItems: 'center',
	},
	numberInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: colors.accent500,
		borderBottomWidth: 2,
		color: colors.accent500,
		marginVertical: 8,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	buttonsContainer: {
		flexDirection: 'row',
	},
	buttonContainer: {
		flex: 1,
	},
})
