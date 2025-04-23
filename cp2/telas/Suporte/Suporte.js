import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';

import Rodape from '../../src/components/Rodape/Rodape';
import Header from '../../src/components/Header/Header';

export default function Suporte() {
  const recursos = [
    { nome: 'Zen App – Meditação Guiada', url: 'https://zenapp.com.br/', icon: 'wind' },
    { nome: 'Vittude – Psicólogos Online', url: 'https://www.vittude.com/', icon: 'user' },
    { nome: 'Cíngulo – Terapia Guiada', url: 'https://www.cingulo.com/', icon: 'activity' },
    { nome: 'MoodTools – Combate à Depressão', url: 'https://www.moodtools.org/', icon: 'heart' },
    { nome: 'Meditopia – Meditação e Bem-estar', url: 'https://meditopia.com/', icon: 'coffee' },
    { nome: 'Calm – Meditação e Sono', url: 'https://www.calm.com/', icon: 'moon' },
    { nome: 'Headspace – Meditação Diária', url: 'https://www.headspace.com/', icon: 'sun' },
    { nome: 'BetterHelp – Terapia Online', url: 'https://www.betterhelp.com/', icon: 'message-circle' },
    { nome: 'SerenMind – Psicologia Digital', url: 'https://serenmind.com/', icon: 'feather' },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Animated.View entering={FadeInDown.duration(600)} style={styles.alertBox}>
          <Icon name="alert-circle" size={24} color="#1D3557" style={styles.icon} />
          <Text style={styles.alertTitle}>Saúde mental é coisa séria!</Text>
          <Text style={styles.alertText}>
            Cuidar da mente é essencial e nunca deve ser tratado como frescura. Se estiver passando por momentos difíceis, não hesite em buscar ajuda.
          </Text>
          <Text style={styles.alertContato}>📞 CVV - 188 (24h, gratuito)</Text>
        </Animated.View>

        <Text style={styles.texto}>Alguns sites e apps especializados em Saúde Mental:</Text>

        {recursos.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => Linking.openURL(item.url)}
          >
            <Icon name={item.icon} size={20} color="#1D3557" style={styles.cardIcon} />
            <Text style={styles.cardText}>{item.nome}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Rodape />
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
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#A8DADC',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardIcon: {
    marginRight: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flexShrink: 1,
  },
  alertBox: {
    backgroundColor: '#DFD6F0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    alignItems: 'center',
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1D3557',
    textAlign: 'center',
  },
  alertText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  alertContato: {
    fontSize: 14,
    color: '#457B9D',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    marginBottom: 10,
  },
});
