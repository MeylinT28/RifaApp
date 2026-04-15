import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';

import ParticipantInput from './components/ParticipantInput';
import ParticipantList from './components/ParticipantList';

export default function App() {

  const [lista, setLista] = useState([]);
  const [ganador, setGanador] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const agregarNombre = (nombre) => {
    setLista([...lista, nombre]);
  };

  const seleccionarGanador = () => {
    if (lista.length === 0) return;

    const random = Math.floor(Math.random() * lista.length);
    setGanador(lista[random]);
    setModalVisible(true);
  };

  const reiniciarRifa = () => {
    setLista([]);
    setGanador('');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>🎉 Rifa App</Text>

      <ParticipantInput onAdd={agregarNombre} />

      <ParticipantList
        lista={lista}
        ganador={ganador}
        onSelectWinner={seleccionarGanador}
        onReset={reiniciarRifa}
      />

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modal}>
          <View style={styles.modalBox}>
            <Text style={styles.ganador}>🏆 Ganador</Text>
            <Text style={styles.nombre}>{ganador}</Text>

            <TouchableOpacity
              style={styles.btnCerrar}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{ color: 'white' }}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fa',
    padding: 20,
    marginTop: 40
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333'
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  modalBox: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    width: '80%'
  },
  ganador: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  nombre: {
    fontSize: 26,
    marginVertical: 10,
    color: '#6C63FF'
  },
  btnCerrar: {
    backgroundColor: '#6C63FF',
    padding: 10,
    borderRadius: 10
  }
});