import { StyleSheet, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import StartGameScreen from './screens/StartGameScreen'

export default function App() {
	return (
		<LinearGradient colors={['#4e0329', '#dbd52f']} style={styles.rootScreen}>
			<ImageBackground
				source={require('./assets/background.png')}
				resizeMode='cover'
				imageStyle={styles.backgroundImage}
				style={styles.rootScreen}
			>
				<StartGameScreen />
			</ImageBackground>
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.15,
	},
})

