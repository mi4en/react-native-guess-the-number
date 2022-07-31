import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { colors } from '../../constants'

const ScreenTitle = ({ children }) => {
	return <Text style={styles.title}>{children}</Text>
}

export default ScreenTitle

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: colors.white,
		textAlign: 'center',
		borderWidth: 2,
		borderColor: colors.white,
		padding: 12,
	},
})
