import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Rodape() {
  return (
    <View style={styles.container}>
      <View style={styles.rodape}>
        <MaterialIcons name='home' size={20} color="#F1FAEE" />
        <MaterialIcons name='chat-bubble-outline' size={20} color="#F1FAEE" />
        <MaterialIcons name='emoji-emotions' size={20} color="#F1FAEE" />
        <MaterialIcons name='support-agent' size={20} color="#F1FAEE" />
        <MaterialIcons name='group' size={20} color="#F1FAEE" />
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
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 10,
    elevation:1,
    backgroundColor:'#A8DADC'
  }
});
