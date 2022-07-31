import { useState } from 'react'
import { StyleSheet, View, TextInput, Alert } from 'react-native'
import {
	maxNumberInputLength,
	alertTitle,
	alertMessage,
	colors,
} from '../constants'

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
		<View style={styles.inputContainer}>
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
		</View>
	)
}

export default StartGameScreen

const styles = StyleSheet.create({
	inputContainer: {
		padding: 16,
		marginTop: 100,
		alignItems: 'center',
		marginHorizontal: 24,
		backgroundColor: colors.primary800,
		borderRadius: 8,
		//  Shadow setting on Andriod
		elevation: 4,
		// Shadow setting on IOS
		shadowColor: colors.black,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
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
