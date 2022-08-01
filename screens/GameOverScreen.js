import { StyleSheet, View, Image, Text } from 'react-native'

import ScreenTitle from '../components/ui/ScreenTitle'
import PrimaryButton from '../components/ui/PrimaryButton'
import { colors } from '../constants'

const GameOverScreen = ({ roundsCount, userNumber, onStartNewGame }) => {
	return (
		<View style={styles.rootContainer}>
			<ScreenTitle>GAME OVER!</ScreenTitle>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={require('../assets/success.png')} />
			</View>
			<Text style={styles.summaryText}>
				Your phone needed <Text style={styles.accentText}>{roundsCount}</Text>{' '}
				rounds to guess the number{' '}
				<Text style={styles.accentText}>{userNumber}</Text>{' '}
			</Text>
			<PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
		</View>
	)
}

export default GameOverScreen

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		padding: 24,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 150,
		borderWidth: 3,
		borderColor: colors.primary800,
		overflow: 'hidden',
		margin: 36,
	},
	image: {
		width: '100%',
		height: '100%',
	},
	summaryText: {
		fontFamily: 'open-sans',
		fontSize: 24,
		textAlign: 'center',
		marginBottom: 24,
	},
	accentText: {
		fontFamily: 'open-sans-bold',
		color: colors.primary600,
	},
})
