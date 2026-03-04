import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Calculadora}>CALCULADORA</Text>
      <Text style={styles.Resultado}>-</Text>

      <View style={styles.buttons1}>
        <View style={styles.containerBotao}>
          <TouchableOpacity><Text style={styles.numero}>⌫</Text></TouchableOpacity>
        </View>
        <View style={styles.containerBotao}>
          <TouchableOpacity><Text style={styles.numero}>C</Text></TouchableOpacity>
        </View>
        <View style={styles.containerBotao}>
          <TouchableOpacity><Text style={styles.numero}>%</Text></TouchableOpacity>
        </View>
        <View style={styles.containerBotao}>
          <TouchableOpacity><Text style={styles.numero}>÷</Text></TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttons1}>
        <View style={styles.containerBotao}>
          <TouchableOpacity><Text style={styles.numero}>7</Text></TouchableOpacity>
        </View>
        <View style={styles.containerBotao}>
          <TouchableOpacity><Text style={styles.numero}>8</Text></TouchableOpacity>
        </View>
        <View style={styles.containerBotao}>
          <TouchableOpacity><Text style={styles.numero}>9</Text></TouchableOpacity>
        </View>
        <View style={styles.containerBotao}>
          <TouchableOpacity><Text style={styles.numero}>X</Text></TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttons2}>
        <View style={styles.containerBotao}>
          <TouchableOpacity><Text style={styles.numero}>4</Text></TouchableOpacity>
        </View>
        <View style={styles.containerBotao}>
          <TouchableOpacity><Text style={styles.numero}>5</Text></TouchableOpacity>
        </View>
        <View style={styles.containerBotao}>
          <TouchableOpacity><Text style={styles.numero}>6</Text></TouchableOpacity>
        </View>
        <View style={styles.containerBotao}>
          <TouchableOpacity><Text style={styles.numero}>-</Text></TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttons3}>
        <View style={styles.containerBotao}>
          <TouchableOpacity><Text style={styles.numero}>1</Text></TouchableOpacity>
        </View>
        <View style={styles.containerBotao}>
          <TouchableOpacity><Text style={styles.numero}>2</Text></TouchableOpacity>
        </View>
        <View style={styles.containerBotao}>
          <TouchableOpacity><Text style={styles.numero}>3</Text></TouchableOpacity>
        </View>
        <View style={styles.containerBotao}>
          <TouchableOpacity><Text style={styles.numero}>+</Text></TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttons4}>
        <View style={styles.containerBotao}>
          <TouchableOpacity><Text style={styles.numero}>+/-</Text></TouchableOpacity>
        </View>
        <View style={styles.containerBotao}>
          <TouchableOpacity><Text style={styles.numero}>0</Text></TouchableOpacity>
        </View>
        <View style={styles.containerBotao}>
          <TouchableOpacity><Text style={styles.numero}>,</Text></TouchableOpacity>
        </View>
        <View style={styles.containerBotao}>
          <TouchableOpacity><Text style={styles.numero}>=</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: '#898989',
    flex: 1,
  },

  containerBotao: {
    backgroundColor: '#fff',
    padding: 10, //Espaço entre a escrita e a borda
    margin: 5, //Espaço entre os botões
    minWidth: 60,           //largura
    alignItems: 'center',    
    justifyContent: 'center',
    borderRadius: 10, //Arredondamento
  },
  buttons1: { 
    flexDirection: 'row', 
    justifyContent: 'center' 
  },
  buttons2: { 
    flexDirection: 'row', 
    justifyContent: 'center' 
  },
  buttons3: { 
    flexDirection: 'row', 
    justifyContent: 'center' 
  },
  buttons4: { 
    flexDirection: 'row', 
    justifyContent: 'center' 
  },
  Calculadora: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  Resultado: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30,
  },
  numero: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default LotsOfStyles;