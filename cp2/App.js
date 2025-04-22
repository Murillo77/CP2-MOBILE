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
    paddingBottom: 80, // espaço pro rodapé
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
});
