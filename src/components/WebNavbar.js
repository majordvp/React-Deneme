import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'next/router';

// Bu bileşen sadece Next.js tarafında kullanılacak.
// Mobil tarafta Tab.Navigator olduğu için buraya ihtiyaç yok.

const WebNavbar = () => {
  const router = useRouter();

  const navItems = [
    { label: 'Ana Sayfa', path: '/' },
    { label: 'Yapılacaklar', path: '/tasks' },
    { label: 'Günlüğüm', path: '/journal' },
    { label: 'Profilim', path: '/profile' },
  ];

  return (
    <View style={styles.navbar}>
      <Text style={styles.logo}>Daily Companion Web 🌐</Text>
      <View style={styles.menu}>
        {navItems.map((item) => (
          <TouchableOpacity 
            key={item.path} 
            onPress={() => router.push(item.path)}
            style={[styles.menuItem, router.pathname === item.path && styles.activeItem]}
          >
            <Text style={[styles.menuText, router.pathname === item.path && styles.activeText]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    // Web gölge efekti
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3498db',
  },
  menu: {
    flexDirection: 'row',
  },
  menuItem: {
    marginLeft: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  activeItem: {
    backgroundColor: '#3498db',
  },
  menuText: {
    fontSize: 16,
    color: '#7f8c8d',
    fontWeight: '500',
  },
  activeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default WebNavbar;
