import { StyleSheet, View, Image, Text } from 'react-native';

export default function Header() {
  return (
    <View style={[styles.header]}>
      <Text style={styles.titulo}>MindSafe</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent:'center',
    height:80,
    backgroundColor:'#A8DADC',
  },
  titulo:{
    fontSize:25,
    color:'white',
    fontWeight:'bold',
    marginTop:25,
  }
});
