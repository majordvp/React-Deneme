import React, { useState, useEffect } from 'react'; 
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, TextInput, ScrollView } from 'react-native'; 
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

// BU DOSYA SADECE WEB TARAYICILARDA ÇALIŞIR (.web.js)
const ProfileScreen = () => {
  const [image, setImage] = useState(null); 
  const [name, setName] = useState('Geliştirici Kullanıcı'); 
  const [role, setRole] = useState(ROLES[0]);

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
    <View style={styles.webContainer}>
      <Text style={styles.webTitle}>Profil Ayarları</Text>
      
      <View style={styles.contentLayout}>
        {/* Sol Taraf: Fotoğraf ve İsim */}
        <View style={styles.leftCard}>
          <TouchableOpacity onPress={pickImage} style={styles.imageWrapper}>
            {image ? (
              <Image source={{ uri: image }} style={styles.webProfileImage} />
            ) : (
              <View style={styles.webPlaceholder}><Text>Görsel Seç</Text></View>
            )}
            <View style={styles.webEditOverlay}><Text style={styles.overlayText}>Değiştir</Text></View>
          </TouchableOpacity>
          <TextInput 
            style={styles.webNameInput} 
            value={name} 
            onChangeText={handleNameChange}
            placeholder="İsminiz..."
          />
          <Text style={styles.webRoleText}>{role}</Text>
        </View>

        {/* Sağ Taraf: Rol Seçimi ve Ayarlar */}
        <View style={styles.rightCard}>
          <Text style={styles.cardHeader}>Rolümü Değiştir</Text>
          <View style={styles.roleGrid}>
            {ROLES.map((r) => (
              <TouchableOpacity 
                key={r} 
                style={[styles.roleOption, role === r && styles.roleOptionActive]}
                onPress={() => { setRole(r); AsyncStorage.setItem('profile_role', r); }}
              >
                <Text style={[styles.roleOptionText, role === r && styles.roleOptionTextActive]}>{r}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.webInfoBox}>
            <Text style={styles.webInfoTitle}>Web Deneyimi Bilgisi</Text>
            <Text style={styles.webInfoText}>
              Burada mobilin aksine bir 'Modal' (pencere) yerine tüm rolleri ekranda net bir şekilde görebileceğin bir **Seçim Izgarası (Grid)** kullandık. 
              Geniş ekranın avantajını kullanarak ayarları tek bakışta görebilmeni sağladık.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  webContainer: {
    flex: 1,
    padding: 60,
    backgroundColor: '#F8F9FA',
  },
  webTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#212529',
  },
  contentLayout: {
    flexDirection: 'row',
    gap: 40,
  },
  leftCard: {
    width: 350,
    backgroundColor: 'white',
    padding: 40,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 15,
  },
  rightCard: {
    flex: 1,
    backgroundColor: 'white',
    padding: 40,
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 15,
  },
  imageWrapper: {
    width: 180,
    height: 180,
    borderRadius: 90,
    overflow: 'hidden',
    marginBottom: 20,
    position: 'relative',
    borderWidth: 5,
    borderColor: '#F8F9FA',
  },
  webProfileImage: {
    width: '100%',
    height: '100%',
  },
  webPlaceholder: {
    flex: 1,
    backgroundColor: '#E9ECEF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  webEditOverlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 10,
    alignItems: 'center',
  },
  overlayText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  webNameInput: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#3498db',
    width: '100%',
    paddingVertical: 10,
    marginBottom: 10,
  },
  webRoleText: {
    fontSize: 16,
    color: '#6C757D',
  },
  cardHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#343A40',
  },
  roleGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  roleOption: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#DEE2E6',
  },
  roleOptionActive: {
    backgroundColor: '#3498db',
    borderColor: '#3498db',
  },
  roleOptionText: {
    fontSize: 14,
    color: '#495057',
  },
  roleOptionTextActive: {
    color: 'white',
    fontWeight: 'bold',
  },
  webInfoBox: {
    marginTop: 40,
    padding: 20,
    backgroundColor: '#E7F3FF',
    borderRadius: 12,
  },
  webInfoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 8,
  },
  webInfoText: {
    fontSize: 14,
    color: '#0056B3',
    lineHeight: 20,
  }
});

export default ProfileScreen;
