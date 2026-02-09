import React from 'react';
import dynamic from 'next/dynamic';

const JournalScreen = dynamic(() => import('../src/screens/JournalScreen'), { ssr: false });

export default function Journal() {
  return <JournalScreen />;
}
