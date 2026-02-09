import React from 'react'; // React kütüphanesini içe aktarıyoruz
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'; // UI bileşenlerini içe aktarıyoruz

// 'text' prop'unu (görev metni) ve 'onDelete' (silme fonksiyonu) prop'larını alıyoruz
const TaskItem = ({ text, onDelete, showDelete }) => {
  return (
    <View style={styles.itemContainer}>
      {/* Görev metnini gösteren alan */}
      <Text style={styles.itemText}>{text}</Text>

      {/* Eğer showDelete true ise 'Sil' butonunu göster */}
      {showDelete && (
        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
          <Text style={styles.deleteText}>Sil</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

// Tasarım stilleri
const styles = StyleSheet.create({
  itemContainer: {
    padding: 15, // Kutunun iç boşluğu
    backgroundColor: '#FFF', // Beyaz arkaplan
    borderRadius: 10, // Köşeleri yuvarlat
    marginVertical: 10, // Diğer öğelerle dikey boşluk
    flexDirection: 'row', // Gelecekte yanına bir checkbox eklersek diye satır düzeni
    alignItems: 'center', // İçindekileri hizala
    justifyContent: 'space-between', // İçeriklar arasına boşluk bırak
    // Gölge efekti
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  itemText: {
    fontSize: 16, // Yazı boyutu
    color: '#333', // Koyu gri yazı
    flex: 1, // Metnin buton gelene kadar tüm alanı kaplamasını sağlar
  },
  deleteButton: {
    backgroundColor: '#E74C3C', // Kırmızı renk
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginLeft: 10,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  }
});

export default TaskItem; // Bu bileşeni diğer dosyalarda kullanmak için dışa aktarıyoruz
