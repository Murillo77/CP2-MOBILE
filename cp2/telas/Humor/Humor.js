import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../src/components/Header/Header';
import Rodape from '../../src/components/Rodape/Rodape';

const moodOptions = [
  { id: 1, label: '😄', value: 'Muito feliz' },
  { id: 2, label: '🙂', value: 'Feliz' },
  { id: 3, label: '😐', value: 'Neutro' },
  { id: 4, label: '🙁', value: 'Triste' },
  { id: 5, label: '😢', value: 'Muito triste' },
];

export default function Humor() {
  const [mood, setMood] = useState(null);
  const [note, setNote] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    (async () => {
      const json = await AsyncStorage.getItem('humorHistorico');
      if (json) setHistory(JSON.parse(json));
    })();
  }, []);

  const salvarEntrada = async () => {
    if (!mood) return;
    const novaEntrada = {
      id: Date.now().toString(),
      mood,
      note,
      date: new Date().toLocaleDateString('pt-BR'),
    };
    const novoHist = [novaEntrada, ...history];
    setHistory(novoHist);
    await AsyncStorage.setItem('humorHistorico', JSON.stringify(novoHist));
    // limpa form
    setMood(null);
    setNote('');
  };

  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.titulo}>Como você está se sentindo hoje?</Text>

      <View style={styles.moodRow}>
        {moodOptions.map(opt => (
          <TouchableOpacity
            key={opt.id}
            style={[
              styles.moodBtn,
              mood === opt.value && styles.moodBtnAtivo,
            ]}
            onPress={() => setMood(opt.value)}>
            <Text style={styles.moodEmoji}>{opt.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Observações (opcional)"
        value={note}
        onChangeText={setNote}
      />

      <Button title="Salvar" onPress={salvarEntrada} color="#4A90E2" />

      <Text style={styles.subtitulo}>Seu progresso</Text>
      <FlatList
        data={history}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemEmoji}>
              {moodOptions.find(m => m.value === item.mood)?.label}
            </Text>
            <View style={styles.itemTextBox}>
              <Text style={styles.itemTexto}>{item.mood}</Text>
              {item.note ? <Text style={styles.itemNota}>{item.note}</Text> : null}
              <Text style={styles.itemData}>{item.date}</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhuma entrada ainda.</Text>}
      />

      <Rodape />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6F8' },
  banner: { width: '100%', height: 140, resizeMode: 'cover' },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 12,
  },
  moodRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 12 },
  moodBtn: {
    padding: 12,
    borderRadius: 30,
    backgroundColor: '#fff',
    elevation: 2,
  },
  moodBtnAtivo: { backgroundColor: '#CDEAFE' },
  moodEmoji: { fontSize: 28 },
  input: {
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  subtitulo: { fontSize: 18, fontWeight: '600', marginLeft: 20, marginTop: 18 },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    elevation: 1,
  },
  itemEmoji: { fontSize: 28, marginRight: 12 },
  itemTextBox: { flex: 1 },
  itemTexto: { fontSize: 16, fontWeight: '600' },
  itemNota: { fontSize: 14, color: '#555' },
  itemData: { fontSize: 12, color: '#888' },
  vazio: { textAlign: 'center', marginTop: 20, color: '#777' },
});
