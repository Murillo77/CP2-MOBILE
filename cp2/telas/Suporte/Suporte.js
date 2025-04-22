import { View, Text, StyleSheet } from 'react-native';
import Rodape from '../../src/components/Rodape/Rodape';
import Header from '../../src/components/Header/Header';

export default function Suporte() {
  return (
    <View style={styles.container}>
      <Header/>
      <Text style={styles.texto}>Essa é a tela de Suporte!</Text>
      <Rodape/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  texto: {
    fontSize: 18,
  },
});