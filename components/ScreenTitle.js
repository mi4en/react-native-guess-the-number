import { StyleSheet, Text } from 'react-native'
import React from 'react'

const ScreenTitle = ({ children }) => {
	return <Text style={styles.title}>{children}</Text>
}

export default ScreenTitle

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#ddb52f',
		textAlign: 'center',
		borderWidth: 2,
		borderColor: '#ddb52f',
		padding: 12,
	},
})
