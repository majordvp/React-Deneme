import React, { useState, useEffect } from 'react'; // React ve Hook'lar
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, ScrollView, FlatList } from 'react-native'; // Web için modal yerine düz yapı kullanabiliriz

// Şehir listesi
const CITIES = [
  { name: 'İstanbul', lat: 41.0082, lon: 28.9784 },
  { name: 'Ankara', lat: 39.9334, lon: 32.8597 },
  { name: 'İzmir', lat: 38.4237, lon: 27.1428 },
  { name: 'Antalya', lat: 36.8841, lon: 30.7056 },
  { name: 'Bursa', lat: 40.1824, lon: 29.0667 },
  { name: 'Erzurum', lat: 39.9043, lon: 41.2679 },
];

// BU DOSYA SADECE TARAYICI (WEB) TARAFINDAN OKUNUR (.web.js uzantısı sayesinde)
const DashboardScreen = () => {
  const [selectedCity, setSelectedCity] = useState(CITIES[0]);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    }
  };

  return (
    <View style={styles.webWrapper}>
      {/* Yan Menü (Sidebar) - Sadece Web UI özelliği */}
      <View style={styles.sidebar}>
        <Text style={styles.sidebarTitle}>Şehirler</Text>
        <ScrollView>
          {CITIES.map((city) => (
            <TouchableOpacity 
              key={city.name} 
              style={[styles.sidebarItem, selectedCity.name === city.name && styles.activeItem]}
              onPress={() => setSelectedCity(city)}
            >
              <Text style={[styles.sidebarItemText, selectedCity.name === city.name && styles.activeItemText]}>
                {city.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Ana İçerik Alanı */}
      <View style={styles.mainContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Web Yönetim Paneli</Text>
          <Text style={styles.headerSubtitle}>Bugün İstanbul için hava verileri analiz ediliyor.</Text>
        </View>

        <View style={styles.cardContainer}>
          {/* Hava Durumu Kartı */}
          <View style={styles.statsCard}>
            <Text style={styles.cardLabel}>Anlık Sıcaklık</Text>
            {loading ? (
              <ActivityIndicator color="#3498db" />
            ) : (
              <Text style={styles.cardValue}>{weather?.temperature}°C</Text>
            )}
            <Text style={styles.cardInfo}>{selectedCity.name} şehri verisi</Text>
          </View>

          {/* Rüzgar Kartı */}
          <View style={styles.statsCard}>
            <Text style={styles.cardLabel}>Rüzgar Hızı</Text>
            <Text style={styles.cardValue}>{weather?.windspeed} km/s</Text>
            <Text style={styles.cardInfo}>Yön: Kuzeydoğu</Text>
          </View>

          {/* Durum Kartı */}
          <View style={[styles.statsCard, { borderLeftColor: '#27ae60' }]}>
            <Text style={styles.cardLabel}>Sistem Durumu</Text>
            <Text style={[styles.cardValue, { color: '#27ae60', fontSize: 24 }]}>Çevrimiçi</Text>
            <Text style={styles.cardInfo}>Tüm servisler çalışıyor</Text>
          </View>
        </View>

        {/* Bilgi Kutusu */}
        <View style={styles.infoBox}>
          <Text style={styles.infoBoxTitle}>Neden Farklı Görünüyor?</Text>
          <Text style={styles.infoBoxText}>
            Web sürümünde ekranın genişliği sayesinde bir **Yan Menü (Sidebar)** kullanabildik. 
            Mobil sürümde yerimiz dar olduğu için alttan açılan bir pencere (Modal) kullanmıştık. 
            Burada ise bilgiler yan yana kartlar (Grid) halinde dizildi. 
            İşte gerçek platform deneyimi budur! 🚀
          </Text>
        </View>
      </View>
    </View>
  );
};

// WEB ÖZEL STİLLERİ (Admin Paneli Havasında)
const styles = StyleSheet.create({
  webWrapper: {
    flex: 1,
    flexDirection: 'row', // Web'de yan yana dizilim (Sidebar + Content)
    backgroundColor: '#f0f2f5',
  },
  sidebar: {
    width: 250,
    backgroundColor: 'white',
    borderRightWidth: 1,
    borderRightColor: '#ddd',
    padding: 20,
  },
  sidebarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
  },
  sidebarItem: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 5,
  },
  activeItem: {
    backgroundColor: '#3498db',
  },
  sidebarItemText: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  activeItemText: {
    color: 'white',
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1,
    padding: 40,
  },
  header: {
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    marginTop: 5,
  },
  cardContainer: {
    flexDirection: 'row', // Kartları yan yana diz
    flexWrap: 'wrap', // Sığmazsa alta geç
    gap: 20, // Kartlar arası boşluk
  },
  statsCard: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 15,
    width: 250,
    elevation: 3,
    borderLeftWidth: 5,
    borderLeftColor: '#3498db',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  cardLabel: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  cardValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  cardInfo: {
    fontSize: 12,
    color: '#bdc3c7',
  },
  infoBox: {
    marginTop: 40,
    backgroundColor: '#e3f2fd',
    padding: 25,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#90caf9',
  },
  infoBoxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1565c0',
    marginBottom: 10,
  },
  infoBoxText: {
    fontSize: 15,
    color: '#1976d2',
    lineHeight: 22,
  }
});

export default DashboardScreen;
