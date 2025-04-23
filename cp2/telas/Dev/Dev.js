import { View, Text, StyleSheet, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';
import Rodape from '../../src/components/Rodape/Rodape';
import Header from '../../src/components/Header/Header';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Dev() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.boxesContainer}>
        {/* Box do Murillo */}
        <View style={styles.box}>
          <Image source={require('../../assets/murillo.jpg')} style={styles.photo} />
          <Text style={styles.nome}>Murillo Sant'Anna</Text>
          <Text style={styles.rm}>RM: 557183</Text>
          <TouchableOpacity
            style={styles.githubButton}
            onPress={() => Linking.openURL('https://github.com/Murillo77')}
          >
            <Icon name="github" size={18} color="#fff" style={{ marginRight: 8 }} />
            <Text style={styles.githubText}>Ver GitHub</Text>
          </TouchableOpacity>
        </View>

        {/* Box do Samuel */}
        <View style={styles.box}>
          <Image source={require('../../assets/samuel.png')} style={styles.photo} />
          <Text style={styles.nome}>Samuel Damasceno</Text>
          <Text style={styles.rm}>RM: 558876</Text>
          <TouchableOpacity
            style={styles.githubButton}
            onPress={() => Linking.openURL('https://github.com/samueldamasceno')}
          >
            <Icon name="github" size={18} color="#fff" style={{ marginRight: 8 }} />
            <Text style={styles.githubText}>Ver GitHub</Text>
          </TouchableOpacity>
        </View>

        {/* Box do Felipe */}
        <View style={styles.box}>
          <Image source={require('../../assets/felipe.png')} style={styles.photo} />
          <Text style={styles.nome}>Felipe Prometti</Text>
          <Text style={styles.rm}>RM: 555174</Text>
          <TouchableOpacity
            style={styles.githubButton}
            onPress={() => Linking.openURL('https://github.com/felipeprometti')}
          >
            <Icon name="github" size={18} color="#fff" style={{ marginRight: 8 }} />
            <Text style={styles.githubText}>Ver GitHub</Text>
          </TouchableOpacity>
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
    height: 350,
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
    borderRadius: 30,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rm: {
    fontSize: 12,
    color: '#555',
    marginBottom: 10,
  },
  githubButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#24292e',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  githubText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
