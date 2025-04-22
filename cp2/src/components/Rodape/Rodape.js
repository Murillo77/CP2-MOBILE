import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Rodape() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.rodape}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.iconeContainer}>
            <MaterialIcons name='home' size={24} color="#F1FAEE" />
            <Text style={styles.iconeTexto}>Início</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Frases')}>
          <View style={styles.iconeContainer}>
            <MaterialIcons name='chat-bubble-outline' size={24} color="#F1FAEE" />
            <Text style={styles.iconeTexto}>Frases</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Humor')}>
          <View style={styles.iconeContainer}>
            <MaterialIcons name='emoji-emotions' size={24} color="#F1FAEE" />
            <Text style={styles.iconeTexto}>Humor</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Suporte')}>
          <View style={styles.iconeContainer}>
            <MaterialIcons name='support-agent' size={24} color="#F1FAEE" />
            <Text style={styles.iconeTexto}>Suporte</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Devs')}>
          <View style={styles.iconeContainer}>
            <MaterialIcons name='group' size={24} color="#F1FAEE" />
            <Text style={styles.iconeTexto}>Dev's</Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rodape: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#A8DADC',
    zIndex: 10,
    elevation: 1,
  },
  iconeContainer: {
    alignItems: 'center',
  },
  iconeTexto: {
    fontSize: 10,
    color: '#F1FAEE',
    marginTop: 2,
  },
});
