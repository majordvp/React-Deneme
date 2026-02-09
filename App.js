import * as React from 'react'; // React'i içe aktarıyoruz
import { NavigationContainer } from '@react-navigation/native'; // Navigasyon sarmalayıcısını içe aktarıyoruz
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Alt sekme menüsü oluşturucuyu içe aktarıyoruz
import { StatusBar } from 'expo-status-bar'; // Durum çubuğunu (saat, pil vb.) yönetmek için

// Oluşturduğumuz sayfa bileşenlerini (Screens) içe aktarıyoruz
import DashboardScreen from './src/screens/DashboardScreen';
import TasksScreen from './src/screens/TasksScreen';
import JournalScreen from './src/screens/JournalScreen';
import ProfileScreen from './src/screens/ProfileScreen'; // Yeni Profil ekranını ekliyoruz

// Tab navigasyonunu başlatıyoruz
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // NavigationContainer: Uygulamanın tüm navigasyon state'ini (durumunu) tutan ana sarmalayıcıdır
    <NavigationContainer>
      {/* Tab.Navigator: Alt sekme menüsü yapısını kurar */}
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#3498db', // Aktif seçili olan sekmenin rengi
          tabBarInactiveTintColor: 'gray', // Seçili olmayan sekmelerin rengi
        }}
      >
        {/* Tab.Screen: Menüdeki her bir sekmeyi tanımlar */}
        <Tab.Screen 
          name="Pano" 
          component={DashboardScreen} 
          options={{ title: 'Ana Sayfa' }} // Üst barda görünecek başlık
        />
        <Tab.Screen 
          name="Görevler" 
          component={TasksScreen} 
          options={{ title: 'Yapılacaklar' }} 
        />
        <Tab.Screen 
          name="Günlük" 
          component={JournalScreen} 
          options={{ title: 'Günlüğüm' }} 
        />
        <Tab.Screen 
          name="Profil" 
          component={ProfileScreen} 
          options={{ title: 'Profilim' }} 
        />
      </Tab.Navigator>
      
      {/* StatusBar: Telefonun en üstündeki saatin/pilin görünümünü ayarlar (Otomatik mod) */}
      <StatusBar style="auto" /> 
    </NavigationContainer>
  );
}
