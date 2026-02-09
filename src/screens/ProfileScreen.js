import React, { useState, useEffect } from 'react'; 
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, TextInput, Modal, FlatList, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'; 
import * as ImagePicker from 'expo-image-picker'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const ROLES = [
  'React Native Öğrencisi 🚀',
  'Yazılım Geliştirici 💻',
  'UI/UX Tasarımcı 🎨',
  'Dijital Girişimci 💡',
  'Öğrenci 📚',
  'Serbest Çalışan (Freelancer) 🏠',
];

// BU DOSYA SADECE MOBİL CİHAZLAR TARAFINDAN OKUNUR (.js)
const ProfileScreen = () => {
  const [image, setImage] = useState(null); 
  const [name, setName] = useState('Geliştirici Kullanıcı'); 
  const [role, setRole] = useState(ROLES[0]);
  const [isRoleModalVisible, setIsRoleModalVisible] = useState(false);

  useEffect(() => {
    loadProfileData();
  }, []);

  const loadProfileData = async () => {
    try {
      const savedImage = await AsyncStorage.getItem('profile_image');
      const savedName = await AsyncStorage.getItem('profile_name');
      const savedRole = await AsyncStorage.getItem('profile_role');
      if (savedImage) setImage(savedImage);
      if (savedName) setName(savedName);
      if (savedRole) setRole(savedRole);
    } catch (e) {
      console.error('Hata:', e);
    }
  };

  const handleNameChange = async (text) => {
    setName(text);
    await AsyncStorage.setItem('profile_name', text);
  };

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) return;
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      await AsyncStorage.setItem('profile_image', result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Profilim 👤</Text>

        <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.profileImage} />
          ) : (
            <View style={styles.placeholderImage}>
              <Text>Seç</Text>
            </View>
          )}
          <View style={styles.editBadge}><Text style={styles.badgeText}>+</Text></View>
        </TouchableOpacity>

        <View style={styles.infoCard}>
          <Text style={styles.label}>AD SOYAD</Text>
          <TextInput style={styles.nameInput} value={name} onChangeText={handleNameChange} />
          <View style={styles.divider} />
          <Text style={styles.label}>ROLÜM</Text>
          <TouchableOpacity onPress={() => setIsRoleModalVisible(true)} style={styles.roleBox}>
             <Text style={styles.roleText}>{role}</Text>
             <Text style={styles.changeText}>Değiştir</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Mobil Alttan Açılan Modal */}
      <Modal visible={isRoleModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
             <Text style={styles.modalTitle}>Rol Seç</Text>
             {ROLES.map(r => (
               <TouchableOpacity key={r} style={styles.roleItem} onPress={() => { setRole(r); setIsRoleModalVisible(false); AsyncStorage.setItem('profile_role', r); }}>
                  <Text>{r}</Text>
               </TouchableOpacity>
             ))}
             <TouchableOpacity style={{marginTop: 20}} onPress={() => setIsRoleModalVisible(false)}>
               <Text style={{color: 'red', textAlign: 'center'}}>Vazgeç</Text>
             </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  scrollContent: { alignItems: 'center', padding: 20, paddingTop: 40 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
  imageContainer: { width: 120, height: 120, borderRadius: 60, backgroundColor: '#DDD', marginBottom: 30, position: 'relative' },
  profileImage: { width: '100%', height: '100%', borderRadius: 60 },
  placeholderImage: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  editBadge: { position: 'absolute', bottom: 0, right: 0, backgroundColor: '#3498db', width: 30, height: 30, borderRadius: 15, justifyContent: 'center', alignItems: 'center' },
  badgeText: { color: 'white', fontWeight: 'bold' },
  infoCard: { width: '100%', backgroundColor: 'white', borderRadius: 15, padding: 20, elevation: 3 },
  label: { fontSize: 12, color: 'grey', marginBottom: 5 },
  nameInput: { fontSize: 18, fontWeight: 'bold', borderBottomWidth: 1, borderBottomColor: '#EEE', paddingVertical: 5 },
  divider: { height: 15 },
  roleBox: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  roleText: { fontSize: 16 },
  changeText: { color: '#3498db', fontWeight: 'bold' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: 'white', padding: 25, borderTopLeftRadius: 30, borderTopRightRadius: 30 },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
  roleItem: { paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#EEE' }
});

export default ProfileScreen;
