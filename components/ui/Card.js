import { StyleSheet, View } from 'react-native'
import { colors } from '../../constants'

const Card = ({ children }) => {
	return <View style={styles.cardContainer}>{children}</View>
}

export default Card

const styles = StyleSheet.create({
	cardContainer: {
		padding: 16,
		marginTop: 32,
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
})
