import React, { useState } from 'react'; 
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'; 
import TaskItem from '../components/TaskItem';

// BU DOSYA SADECE MOBİL CİHAZLAR TARAFINDAN OKUNUR (.js)
const TasksScreen = () => {
  const [task, setTask] = useState(''); 
  const [taskItems, setTaskItems] = useState([]); 
  const [selectedIndex, setSelectedIndex] = useState(null); 

  const handleAddTask = () => {
    if (task.length > 0) {
      setTaskItems([...taskItems, task]);
      setTask('');
      setSelectedIndex(null);
    }
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
    setSelectedIndex(null);
  }

  const handleTaskPress = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  }

  return (
    <View style={styles.container}>
      {/* Mobil Görünüm: Klasik Liste Düzeni */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.tasksWrapper}>
          <Text style={styles.title}>Mobil Görevlerim 📋</Text>
          <View style={styles.items}>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => handleTaskPress(index)}>
                  <TaskItem 
                    text={item} 
                    showDelete={selectedIndex === index}
                    onDelete={() => completeTask(index)}
                  /> 
                </TouchableOpacity>
              )
            })}
             {taskItems.length === 0 && <Text style={styles.emptyText}>Henüz görev yok.</Text>}
          </View>
        </View>
      </ScrollView>

      {/* Ekranın altına sabitlenmiş mobil input alanı */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        style={styles.writeTaskWrapper}
      >
        <TextInput 
          style={styles.input} 
          placeholder={'Görev yaz...'} 
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 100, // Alttaki input alanı için pay bırakıyoruz
  },
  tasksWrapper: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 20,
  },
  emptyText: {
    textAlign: 'center', 
    marginTop: 20, 
    color: 'grey', 
    fontStyle: 'italic'
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    elevation: 5,
  },
  addText: {
    fontSize: 24,
  },
});

export default TasksScreen;
