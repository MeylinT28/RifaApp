import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ParticipantInput({ onAdd }) {

  const [nombre, setNombre] = useState('');

  const agregar = () => {
    if (nombre.trim() === '') return;
    onAdd(nombre);
    setNombre('');
  };

  return (
    <View style={styles.container}>

      <TextInput
        placeholder="Nombre del participante"
        placeholderTextColor="#999"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      />

      <TouchableOpacity style={styles.btn} onPress={agregar}>
        <Text style={styles.btnText}>Agregar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 12,
    fontSize: 16
  },
  btn: {
    backgroundColor: '#6C63FF',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});