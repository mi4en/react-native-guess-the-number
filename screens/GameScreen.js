import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { gameScreenTitle } from '../constants'

import ScreenTitle from '../components/ScreenTitle'

const GameScreen = () => {
	return (
		<View style={styles.screen}>
			<ScreenTitle>{gameScreenTitle}</ScreenTitle>
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
