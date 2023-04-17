import { View, StyleSheet, TextInput, Button, Modal, Image } from 'react-native';
import { useState, useEffect } from 'react';


const GoalInput = (props) => {


    return (
        <Modal visible={props.visible} animationType={"slide"} >
            <View style={styles.inputContainer}>
                <Image
                    source={require('../assets/images/goal.png')}
                    style={styles.image}
                />
                <TextInput
                    value={props.goals}
                    style={styles.textInput}
                    placeholder="Goals for today ?..."
                    onChangeText={(text) => props.setGoals(text)}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        {
                            props.editMode ?
                                <Button title='Done' onPress={props.onEditDone} color={''} />
                                : <Button title='Add Goal' onPress={props.onAddNewGoal} color={'#29AB87'} />

                        }
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' color={'#ff00ff'} onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        padding: 8,
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#80393C"
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 6,
        margin: 8,
        fontSize: 16,
        paddingVertical: 15,
        paddingHorizontal: 10,
        color: "#120438",
        backgroundColor: "#e4d0ff"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 8,
    },
    button: {
        margin: 3,
        width: 100
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: "center"
    }
})

