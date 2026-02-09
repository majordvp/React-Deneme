import React from 'react';
import dynamic from 'next/dynamic';

const TasksScreen = dynamic(() => import('../src/screens/TasksScreen'), { ssr: false });

export default function Tasks() {
  return <TasksScreen />;
}
