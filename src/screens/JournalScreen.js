import React, { useState, useEffect } from 'react'; // React ve Hook'ları içe aktarıyoruz
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native'; // Gerekli bileşenler
import AsyncStorage from '@react-native-async-storage/async-storage'; // Yerel depolama için kütüphaneyi içe aktarıyoruz

const JournalScreen = () => {
  // Yazılan yeni günlük metnini tutan state
  const [entry, setEntry] = useState(''); 
  // Kaydedilmiş tüm günlüklerin listesini tutan state
  const [journalEntries, setJournalEntries] = useState([]);

  // Uygulama açıldığında (veya bu sayfa yüklendiğinde) kayıtlı verileri getiriyoruz
  useEffect(() => {
    loadJournalEntries();
  }, []);

  // AsyncStorage'dan verileri çekme fonksiyonu
  const loadJournalEntries = async () => {
    try {
      // 'journal_items' anahtarıyla (key) saklanan veriyi string olarak alıyoruz
      const savedEntries = await AsyncStorage.getItem('journal_items');
      if (savedEntries !== null) {
        // String olarak gelen veriyi geri JSON listesine (objeye) çeviriyoruz
        setJournalEntries(JSON.parse(savedEntries));
      }
    } catch (error) {
      console.error('Veri yüklenirken hata oluştu:', error);
    }
  };

  // Yeni günlüğü kaydetme fonksiyonu
  const saveEntry = async () => {
    if (entry.trim().length === 0) { // Eğer metin boşsa kaydetme
      Alert.alert('Hata', 'Lütfen bir şeyler yazın!');
      return;
    }

    // Yeni giriş için tarih bilgisini de ekleyerek bir obje oluşturuyoruz
    const newEntry = {
      id: Date.now().toString(), // Benzersiz bir ID (milisaniye cinsinden zaman)
      text: entry,              // Kullanıcının yazdığı metin
      date: new Date().toLocaleDateString('tr-TR'), // Bugünün tarihi
    };

    // Mevcut listenin en başına yeni girişi ekliyoruz
    const updatedEntries = [newEntry, ...journalEntries];
    
    try {
      // Yeni listeyi string formatına çevirip telefon hafızasına kaydediyoruz
      await AsyncStorage.setItem('journal_items', JSON.stringify(updatedEntries));
      
      // State'i güncelliyoruz (ekranda hemen görünmesi için)
      setJournalEntries(updatedEntries);
      // Giriş alanını temizliyoruz
      setEntry('');
      Alert.alert('Başarılı', 'Günlüğün kaydedildi!');
    } catch (error) {
      console.error('Kaydedilirken hata oluştu:', error);
    }
  };

  // Tüm günlükleri silme fonksiyonu (Temizlik için)
  const clearAll = async () => {
    try {
      await AsyncStorage.removeItem('journal_items');
      setJournalEntries([]);
      Alert.alert('Bilgi', 'Tüm günlükler silindi.');
    } catch (error) {
      console.error('Silme hatası:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Günlüğüm 📓</Text>

      {/* Günlük Giriş Alanı */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Bugün neler oldu? Yazmaya başla..."
          multiline={true} // Çok satırlı metne izin ver
          value={entry}
          onChangeText={text => setEntry(text)}
        />
        <TouchableOpacity style={styles.saveButton} onPress={saveEntry}>
          <Text style={styles.saveButtonText}>Kaydet</Text>
        </TouchableOpacity>
      </View>

      {/* Kaydedilmiş Girişlerin Listesi */}
      <ScrollView style={styles.listContainer}>
        {journalEntries.map((item) => (
          <View key={item.id} style={styles.entryCard}>
            <Text style={styles.entryDate}>{item.date}</Text>
            <Text style={styles.entryText}>{item.text}</Text>
          </View>
        ))}
        {journalEntries.length === 0 && (
          <Text style={styles.emptyText}>Henüz bir şey yazmadın. İlk günlüğünü ekle!</Text>
        )}
        
        {/* Eğer veri varsa silme butonu göster */}
        {journalEntries.length > 0 && (
          <TouchableOpacity style={styles.clearButton} onPress={clearAll}>
            <Text style={styles.clearButtonText}>Hepsini Temizle</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
};

// Stil Tanımlamaları
const styles = StyleSheet.create({
  container: {
    flex: 1, // Tüm ekranı kapla
    padding: 20,
    backgroundColor: '#FFF9F0', // Günlük kağıdı rengi gibi hafif sarımtırak
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingTop: 40,
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  input: {
    height: 100, // Giriş alanı yüksekliği
    fontSize: 16,
    textAlignVertical: 'top', // Android'de metnin üstten başlamasını sağlar
  },
  saveButton: {
    backgroundColor: '#8E44AD', // Mor renk
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  listContainer: {
    marginTop: 20,
  },
  entryCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderLeftWidth: 5, // Sol tarafa bir şerit ekleyerek defter sayfası görünümü ver
    borderLeftColor: '#8E44AD',
  },
  entryDate: {
    fontSize: 12,
    color: 'grey',
    marginBottom: 5,
  },
  entryText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24, // Satır arası boşluk (okumayı kolaylaştırır)
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    color: 'grey',
    fontStyle: 'italic',
  },
  clearButton: {
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#E74C3C', // Kırmızı silme yazısı
    fontSize: 14,
  }
});

export default JournalScreen;
