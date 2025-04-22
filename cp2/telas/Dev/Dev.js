import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Rodape from '../../src/components/Rodape/Rodape';
import Header from '../../src/components/Header/Header';

export default function Dev() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.boxesContainer}>
        {/* Box do Murillo */}
        <View style={styles.box}>
          <Image source={require('../../assets/nike.png')} style={styles.photo} />
          <Text style={styles.nome}>Murillo Sant'Anna</Text>
          <Text style={styles.rm}>RM: 557183</Text>
          <Text style={styles.description}>Eu fiz a parte do design e implementação do código.</Text>
        </View>

        {/* Box do Samuel */}
        <View style={styles.box}>
          <Image source={require('../../assets/nike.png')} style={styles.photo} />
          <Text style={styles.nome}>Samuel Damasceno</Text>
          <Text style={styles.rm}>RM: 123456</Text>
          <Text style={styles.description}>Samuel fez a integração com a API.</Text>
        </View>

        {/* Box do Felipe */}
        <View style={styles.box}>
          <Image source={require('../../assets/felipe.png')} style={styles.photo} />
          <Text style={styles.nome}>Felipe Prometti</Text>
          <Text style={styles.rm}>RM: 654321</Text>
          <Text style={styles.description}>Felipe fez a tela de suporte.</Text>
        </View>
      </ScrollView>

      <Rodape />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxesContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 80,
  },
  box: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  photo: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rm: {
    fontSize: 12,
    color: '#555',
  },
  description: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
});
