import React from 'react';
import dynamic from 'next/dynamic';

// SSR: false diyerek bu bileşenin sadece tarayıcıda çalışmasını sağlıyoruz.
// Bu sayede AsyncStorage veya web-özel dosya çakışmalarını önlüyoruz.
const DashboardScreen = dynamic(() => import('../src/screens/DashboardScreen'), { ssr: false });

export default function Home() {
  return <DashboardScreen />;
}
