import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import Rodape from '../../src/components/Rodape/Rodape';
import Header from '../../src/components/Header/Header';

export default function Suporte() {
  const recursos = [
    { nome: 'Zen App – Meditação Guiada', url: 'https://zenapp.com.br/' },
    { nome: 'Vittude – Psicólogos Online', url: 'https://www.vittude.com/' },
    { nome: 'Cíngulo – Terapia Guiada', url: 'https://www.cingulo.com/' },
    { nome: 'MoodTools – Combate à Depressão', url: 'https://www.moodtools.org/' },
    { nome: 'Meditopia – Meditação e Bem-estar', url: 'https://meditopia.com/' },
    { nome: 'Calm – Meditação e Sono', url: 'https://www.calm.com/' },
    { nome: 'Headspace – Meditação Diária', url: 'https://www.headspace.com/' },
    { nome: 'BetterHelp – Terapia Online', url: 'https://www.betterhelp.com/' },
    { nome: 'SerenMind – Psicologia Digital', url: 'https://serenmind.com/' },
  ];

  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.texto}>Alguns sites e apps especializados em Saúde Mental:</Text>

        {recursos.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => Linking.openURL(item.url)}
          >
            <Text style={styles.cardText}>{item.nome}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Rodape/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 80,
  },
  texto: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight:'bold'
  },
  card: {
    backgroundColor: '#A8DADC',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
