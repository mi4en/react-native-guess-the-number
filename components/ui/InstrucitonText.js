import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { colors } from '../../constants'

const InstrucitonText = ({ children, style }) => {
	return <Text style={[styles.instructionText, style]}>{children}</Text>
}

export default InstrucitonText

const styles = StyleSheet.create({
	instructionText: {
		fontFamily: 'open-sans',
		fontSize: 24,
		color: colors.accent500,
	},
})
