import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import Header from './src/components/Header/Header';
import Dev from './telas/Dev/Dev';
import Frases from './telas/Frases/Frases';
import Humor from './telas/Humor/Humor';
import Suporte from './telas/Suporte/Suporte';
import Rodape from './src/components/Rodape/Rodape';

const Stack = createNativeStackNavigator();

function Home() {
  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.titulo}>Seja Bem-Vindo à MindSafe</Text>

    
        <View style={styles.box}>
          <Text style={styles.boxTitle}>Sobre Nós</Text>
          <Text style={styles.boxText}>
            O MindSafe é um aplicativo voltado à saúde mental. Nossa missão é oferecer suporte emocional de forma prática e acolhedora. Aqui, você encontra recursos para se conectar com suas emoções no dia a dia.
          </Text>
        </View>

    
        <Text style={styles.funcTitle}>Principais Funcionalidades</Text>

        <View style={styles.box}>
          <Text style={styles.boxTitle}>Frases Motivacionais</Text>
          <Text style={styles.boxText}>
            Todos os dias, o MindSafe exibe frases inspiradoras para trazer motivação, positividade e bem-estar ao seu cotidiano.
          </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxTitle}>Registro de Humor</Text>
          <Text style={styles.boxText}>
            Registre como está se sentindo usando 5 emojis, de muito feliz a muito triste. Acompanhe a evolução do seu humor com o tempo e entenda melhor suas emoções.
          </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxTitle}>Dicas de Saúde Mental</Text>
          <Text style={styles.boxText}>
            Descubra indicações de aplicativos e sites confiáveis especializados em saúde mental, ideais para aprofundar seu cuidado emocional e psicológico.
          </Text>
        </View>

      </ScrollView>
      <Rodape />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Frases" component={Frases} />
        <Stack.Screen name="Humor" component={Humor} />
        <Stack.Screen name="Suporte" component={Suporte} />
        <Stack.Screen name="Devs" component={Dev} />
      </Stack.Navigator>
    </NavigationContainer>
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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  funcTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
  },
  box: {
    backgroundColor: '#A8DADC',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  boxText: {
    fontSize: 16,
    lineHeight: 22,
  },
});
