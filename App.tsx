import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import * as SQLite from 'expo-sqlite';

interface Tarefa {
  id: number;
  nome: string;
}
export default function App() {
  const [banco, setBanco] = useState<SQLite.SQLiteDatabase | null>(null);
  const [Tarefa, setTarefa] = useState<string>('');
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
