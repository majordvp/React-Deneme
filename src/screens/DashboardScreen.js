import React, { useState, useEffect } from 'react'; // React ve Hook'lar
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, ScrollView, Modal, FlatList } from 'react-native'; // Mobil için gerekli bileşenler

// Şehir listesi
const CITIES = [
  { name: 'İstanbul', lat: 41.0082, lon: 28.9784 },
  { name: 'Ankara', lat: 39.9334, lon: 32.8597 },
  { name: 'İzmir', lat: 38.4237, lon: 27.1428 },
  { name: 'Antalya', lat: 36.8841, lon: 30.7056 },
  { name: 'Bursa', lat: 40.1824, lon: 29.0667 },
  { name: 'Erzurum', lat: 39.9043, lon: 41.2679 },
];

// BU DOSYA SADECE MOBİL CİHAZLAR TARAFINDAN OKUNUR (.js uzantısı)
const DashboardScreen = () => {
  const [selectedCity, setSelectedCity] = useState(CITIES[0]);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetchWeather();
  }, [selectedCity]);

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.lat}&longitude=${selectedCity.lon}&current_weather=true`
      );
      const data = await response.json();
      setWeather(data.current_weather);
      setLoading(false);
    } catch (e) {
      setError('Veri çekilemedi.');
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Mobil Panom 📱</Text>

        <TouchableOpacity 
          style={styles.citySelector} 
          onPress={() => setIsModalVisible(true)}
        >
          <Text style={styles.citySelectorText}>📍 {selectedCity.name} (Dokun)</Text>
        </TouchableOpacity>

        {loading ? (
          <View style={styles.center}>
            <ActivityIndicator size="large" color="#3498db" />
          </View>
        ) : error ? (
          <View style={styles.center}>
            <Text style={{ color: 'red' }}>{error}</Text>
          </View>
        ) : (
          <View style={styles.weatherCard}>
            <Text style={styles.weatherCity}>{selectedCity.name}</Text>
            <Text style={styles.weatherTemp}>{weather?.temperature}°C</Text>
            <Text style={styles.weatherStatus}>Hava Durumu: {weather?.windspeed > 15 ? 'Rüzgarlı' : 'Sakin'}</Text>
          </View>
        )}
      </ScrollView>

      {/* Şehir Seçme Modalı (Mobil Stili) */}
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Şehir Seçin</Text>
            <FlatList
              data={CITIES}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.cityItem} onPress={() => { setSelectedCity(item); setIsModalVisible(false); }}>
                  <Text style={styles.cityItemText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity style={styles.closeButton} onPress={() => setIsModalVisible(false)}>
              <Text style={styles.closeButtonText}>Kapat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// MOBİL ODAKLI STİLLER
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  scrollContent: {
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  citySelector: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 2,
  },
  citySelectorText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
  weatherCard: {
    backgroundColor: '#3498db',
    padding: 40,
    borderRadius: 25,
    alignItems: 'center',
  },
  weatherCity: { color: 'white', fontSize: 24, fontWeight: 'bold' },
  weatherTemp: { color: 'white', fontSize: 60, fontWeight: 'bold' },
  weatherStatus: { color: 'white', fontSize: 16 },
  center: { height: 200, justifyContent: 'center', alignItems: 'center' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: 'white', padding: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30, height: '50%' },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  cityItem: { paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' },
  cityItemText: { fontSize: 18 },
  closeButton: { marginTop: 10, padding: 15, alignItems: 'center' },
  closeButtonText: { color: '#e74c3c', fontSize: 16, fontWeight: 'bold' }
});

export default DashboardScreen;
