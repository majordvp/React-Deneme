import React from 'react';
import dynamic from 'next/dynamic';

const ProfileScreen = dynamic(() => import('../src/screens/ProfileScreen'), { ssr: false });

export default function Profile() {
  return <ProfileScreen />;
}
