import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Header from './src/components/Header/Header';
import Rodape from './src/components/Rodape/Rodape';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Header/>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.titulo}>CP2 MOBILE</Text>
        </ScrollView>
        <Rodape/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#F1FAEE'
  },
  titulo:{
    fontWeight:'bold'
  }, 
  scrollContent:{
    padding:90,
  }
});
