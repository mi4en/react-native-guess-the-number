import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../../constants'

const PrimaryButton = ({ children, onPress }) => {
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.buttonInnerContainer, styles.pressedIos]
						: styles.buttonInnerContainer
				}
				onPress={onPress}
				android_ripple={{ color: colors.primary600 }}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	)
}

export default PrimaryButton

const styles = StyleSheet.create({
	buttonOuterContainer: { borderRadius: 28, margin: 4, overflow: 'hidden' },
	buttonInnerContainer: {
		backgroundColor: colors.primary500,
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,
	},
	buttonText: {
		color: colors.white,
		textAlign: 'center',
	},
	pressedIos: {
		opacity: 0.75,
	},
})
