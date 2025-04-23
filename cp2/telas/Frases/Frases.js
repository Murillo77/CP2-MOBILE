import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button, Image } from 'react-native';

const Frases = () => {
  const [frase, setFrase] = useState(null);
  const [autor, setAutor] = useState(null);
  const [loading, setLoading] = useState(true);

  const buscarFrase = async () => {
    setLoading(true);
    try {
      const resposta = await fetch('https://zenquotes.io/api/random');
      const dados = await resposta.json();
      setFrase(dados[0].q);
      setAutor(dados[0].a);
    } catch (error) {
      setFrase('Erro ao buscar frase. Verifique sua conexão.');
      setAutor('');
    }
    setLoading(false);
  };

  useEffect(() => {
    buscarFrase();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../../assets/frases.png')} />
      <Text style={styles.titulo}>Frase do Dia</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#4A90E2" />
      ) : (
        <>
          <Text style={styles.frase}>"{frase}"</Text>
          <Text style={styles.autor}>— {autor}</Text>
        </>
      )}

      <Button title="Nova frase" onPress={buscarFrase} color="#4A90E2" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F6F8',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  frase: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  autor: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
  },
  img: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default Frases;