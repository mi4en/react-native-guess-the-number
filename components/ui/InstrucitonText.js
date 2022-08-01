import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { colors } from '../../constants'

const InstrucitonText = ({ children }) => {
	return <Text style={styles.instructionText}>{children}</Text>
}

export default InstrucitonText

const styles = StyleSheet.create({
	instructionText: {
		fontSize: 24,
		color: colors.accent500,
	},
})
