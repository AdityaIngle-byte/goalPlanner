import { Text, View, StyleSheet, Button, TouchableOpacity, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const GoalItem = ({ item, index, onDeleteGoal, onEditGoal }) => {
    return (
        <View style={styles.addedContainerChild}>
            <View>
                <Text style={styles.textItemBullet}>{index + 1}) <Text style={styles.textItemContent}>{item}</Text></Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity onPress={() => onDeleteGoal(item)}>
                        <Ionicons name='trash' size={18} color={'red'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity onPress={() => onEditGoal(item)}>
                        <Entypo name="pencil" size={18} color="green" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    addedContainerChild: {
        margin: 6,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: 'white',
        borderRadius: 6,
        padding: 14
    },
    textItemBullet: {
        fontWeight: "bold",
        color: "black"
    },
    textItemContent: {
        fontWeight: "400",
        fontSize: 16,
        color: "black",
        fontWeight: "bold",
    },
    buttonWrapper: {
        marginLeft: 4,
        justifyContent: "center"
    },
})