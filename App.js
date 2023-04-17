import { Button, StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { useState, useRef } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import GoalAddButton from './components/GoalAddButton';

export default function App() {

  const [addedGoals, setAddedGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentEditItem, setCurrentEditItem] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [goals, setGoals] = useState('');


  const addNewGoalHandler = () => {
    setAddedGoals([...addedGoals, goals]);
    closeModal();
    setGoals('')
  }


  const openModal = () => {
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
  }

  const onDeleteHandler = (item) => {
    let list = addedGoals.filter((it) => it !== item);
    setAddedGoals(list);
  }

  const onEditHandler = (item) => {
    setEditMode(true);
    setGoals(item);
    setCurrentEditItem(item);
    openModal();
  }



  const onDoneHandler = () => {
    setEditMode(false);
    let indexofElement;
    addedGoals.map((it) => {
      if (it == currentEditItem) {
        indexofElement = addedGoals.indexOf(currentEditItem);
      }
    });

    let tempArray = [...addedGoals];
    tempArray.splice(indexofElement, 1, goals);
    setAddedGoals(tempArray);
    setGoals('');
    closeModal();

  }

  return (
    <ImageBackground
      source={require('./assets/images/plain3.jpg')}
      style={styles.imageBackgroundStyle}
    >
      <View style={styles.parentContainer}>
        <GoalInput
          goals={goals}
          setGoals={setGoals}
          onAddNewGoal={addNewGoalHandler}
          visible={modalVisible}
          onCancel={closeModal}
          editMode={editMode}
          onEditDone={onDoneHandler}
        />
        <GoalAddButton onPress={openModal} />
        <View style={styles.addedGoalsContainer}>
          <Text style={styles.addedGoalsTextStyle}>My Goals</Text>
          <FlatList
            data={addedGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  item={itemData.item}
                  index={itemData.index}
                  onDeleteGoal={onDeleteHandler}
                  onEditGoal={onEditHandler}
                />
              )
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </ImageBackground >
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    paddingTop: 40,
    padding: 10,
    margin: 10
  },
  addedGoalsContainer: {
    marginTop: 16,
    flex: 1,
  },
  addedGoalsTextStyle: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
    marginVertical: 10,
  },

  imageBackgroundStyle: {
    flex: 1,
    opacity: 1,
  },

});
