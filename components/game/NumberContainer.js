import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../constants'

const NumberContainer = ({ children }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	)
}

export default NumberContainer

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: colors.accent500,
		borderRadius: 8,
		padding: 24,
		margin: 24,
		alignItems: 'center',
		justifyContent: 'center',
	},
	numberText: {
		color: colors.accent500,
		fontSize: 36,
		fontFamily: 'open-sans-bold',
	},
})
