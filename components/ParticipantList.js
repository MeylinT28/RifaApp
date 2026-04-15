import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function ParticipantList({
  lista,
  ganador,
  onSelectWinner,
  onReset
}) {
  return (
    <View>

      <FlatList
        data={lista}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={[
            styles.item,
            item === ganador && styles.ganador
          ]}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.btn} onPress={onSelectWinner}>
        <Text style={styles.btnText}>🎯 Elegir ganador</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.reset} onPress={onReset}>
        <Text style={styles.btnText}>🔄 Reiniciar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 8,
    borderRadius: 12,
    elevation: 2
  },
  ganador: {
    backgroundColor: '#FFF3CD'
  },
  text: {
    fontSize: 16,
    color: '#333'
  },
  btn: {
    backgroundColor: '#4A90E2',
    padding: 14,
    marginTop: 15,
    borderRadius: 12,
    alignItems: 'center'
  },
  reset: {
    backgroundColor: '#FF6B6B',
    padding: 14,
    marginTop: 10,
    borderRadius: 12,
    alignItems: 'center'
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});