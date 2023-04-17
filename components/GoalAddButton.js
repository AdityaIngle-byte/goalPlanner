import { View, StyleSheet, Pressable, Text } from 'react-native';

const GoalAddButton = (props) => {
    return (
        <View style={styles.buttonContainer}>
            <Pressable
                style={({ pressed }) => pressed ? [styles.button, { opacity: 0.5 }] : styles.button}
                android_ripple={{ color: "#660000" }}
                onPress={props.onPress}
            >
                <Text style={styles.addNewGoalTextStyle}>Add New Goal</Text>
            </Pressable>
        </View>
    )
}

export default GoalAddButton


const styles = StyleSheet.create({
    buttonContainer: {
        borderWidth: 1,
        borderColor: "#660000",
        backgroundColor: "#80393C",
        borderRadius: 8,
    },
    button: {
        padding: 8,
    },
    addNewGoalTextStyle: {
        color: "white",
        textAlign: "center",
        fontSize: 14
    },
})