import React from 'react';
import { View, StyleSheet } from 'react-native';
import WebNavbar from '../src/components/WebNavbar';

// Next.js uygulamasının ana sarmalayıcısı.
// Burada her sayfanın üstünde WebNavbar görünecek şekilde ayarlıyoruz.

function MyApp({ Component, pageProps }) {
  return (
    <View style={styles.container}>
      {/* Üstte navigasyon çubuğu */}
      <WebNavbar />
      
      {/* Sayfa içeriği */}
      <View style={styles.content}>
        <Component {...pageProps} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100vh', // Web'de tüm ekran yüksekliğini kapla
  },
  content: {
    flex: 1,
  },
});

export default MyApp;
