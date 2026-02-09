import React, { useState } from 'react'; 
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native'; 
import TaskItem from '../components/TaskItem';

// BU DOSYA SADECE WEB TARAYICILARDA ÇALIŞIR (.web.js)
const TasksScreen = () => {
  const [task, setTask] = useState(''); 
  const [taskItems, setTaskItems] = useState([
    'Web sürümünü incele 🌐',
    'Responsive tasarımı kontrol et 📱',
  ]); 
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

  return (
    <View style={styles.webContainer}>
      {/* Sol Panel: Giriş Alanı ve Bilgi */}
      <View style={styles.leftPanel}>
        <Text style={styles.webTitle}>Görev Yönetimi</Text>
        <Text style={styles.webSubtitle}>Web üzerinde görevlerini eklemek ve yönetmek çok daha kolay.</Text>
        
        <View style={styles.inputCard}>
          <TextInput 
            style={styles.webInput} 
            placeholder={'Yeni bir görev yazın...'} 
            value={task}
            onChangeText={text => setTask(text)}
            onKeyPress={(e) => e.nativeEvent.key === 'Enter' && handleAddTask()} // Enter tuşu desteği
          />
          <TouchableOpacity style={styles.webAddButton} onPress={handleAddTask}>
            <Text style={styles.webAddButtonText}>Görevi Ekle</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsBox}>
          <Text style={styles.statsText}>Toplam Görev: {taskItems.length}</Text>
          <Text style={styles.statsText}>Aktif Seçim: {selectedIndex !== null ? '1 Öğe' : 'Yok'}</Text>
        </View>
      </View>

      {/* Sağ Panel: Görev Listesi */}
      <View style={styles.rightPanel}>
        <Text style={styles.listTitle}>Görev Listesi</Text>
        <ScrollView contentContainerStyle={styles.listContent}>
           {taskItems.map((item, index) => (
             <TouchableOpacity key={index} onPress={() => setSelectedIndex(selectedIndex === index ? null : index)}>
               <TaskItem 
                  text={item} 
                  showDelete={selectedIndex === index}
                  onDelete={() => completeTask(index)}
               />
             </TouchableOpacity>
           ))}
           {taskItems.length === 0 && (
             <View style={styles.emptyState}>
               <Text style={styles.emptyStateText}>Şu an yapılacak bir görev görünmüyor. 🎉</Text>
             </View>
           )}
        </ScrollView>
      </View>
    </View>
  );
}

// WEB ODAKLI MODÜLER TASARIM
const styles = StyleSheet.create({
  webContainer: {
    flex: 1,
    flexDirection: 'row', // Web için iki sütunlu yapı
    backgroundColor: '#F8F9FA',
  },
  leftPanel: {
    width: '40%',
    padding: 40,
    backgroundColor: 'white',
    borderRightWidth: 1,
    borderRightColor: '#E9ecef',
    justifyContent: 'center',
  },
  rightPanel: {
    flex: 1,
    padding: 40,
  },
  webTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 10,
  },
  webSubtitle: {
    fontSize: 18,
    color: '#6c757d',
    marginBottom: 40,
  },
  inputCard: {
    backgroundColor: '#F8F9FA',
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  webInput: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ced4da',
    fontSize: 16,
    marginBottom: 15,
  },
  webAddButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  webAddButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  statsBox: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statsText: {
    fontSize: 14,
    color: '#adb5bd',
    fontWeight: '600',
  },
  listTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40',
  },
  listContent: {
    paddingBottom: 40,
  },
  emptyState: {
    marginTop: 50,
    alignItems: 'center',
  },
  emptyStateText: {
    fontSize: 18,
    color: '#adb5bd',
    fontStyle: 'italic',
  }
});

export default TasksScreen;
