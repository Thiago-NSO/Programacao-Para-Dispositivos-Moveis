import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const LotsOfStyles = () => {
  const [display, setDisplay] = useState('0');

  const handlePress = (valor) => {
    if (valor === 'C') {
      setDisplay('0');
    } else if (valor === '⌫') {
      setDisplay(display.length > 1 ? display.slice(0, -1) : '0');
    } else if (valor === '√') {
      try {
        const num = parseFloat(display.replace(',', '.'));
        const res = Math.sqrt(num);
        setDisplay(String(res).replace('.', ','));
      } catch (e) {
        setDisplay('Erro');
      }
    } else if (valor === '=') {
      try {
        const expressao = display.replace(/X/g, '*').replace(/÷/g, '/').replace(/,/g, '.');
        const resultado = eval(expressao);
        setDisplay(String(resultado).replace('.', ','));
      } catch (e) {
        setDisplay('Erro');
      }
    } else {
      setDisplay(display === '0' ? valor : display + valor);
    }
  };

  const Botao = ({ label, estiloCor }) => (
    <View style={[styles.containerBotao, estiloCor]}>
      <TouchableOpacity onPress={() => handlePress(label)}>
        <Text style={styles.textoBotao}>{label}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CALCULADORA</Text>
      
      <View style={styles.visorContainer}>
        <Text 
          style={styles.textoResultado} 
          numberOfLines={1} 
          adjustsFontSizeToFit
        >
          {display}
        </Text>
      </View>

      <View style={styles.row}>
        <Botao label="⌫" estiloCor={styles.botaoRosaClaro} />
        <Botao label="C" estiloCor={styles.botaoRosaClaro} />
        <Botao label="%" estiloCor={styles.botaoRosaClaro} />
        <Botao label="÷" estiloCor={styles.botaoAzulClaro} />
      </View>

      <View style={styles.row}>
        <Botao label="7" estiloCor={styles.botaoAzulClaro} />
        <Botao label="8" estiloCor={styles.botaoAzulClaro} />
        <Botao label="9" estiloCor={styles.botaoAzulClaro} />
        <Botao label="X" estiloCor={styles.botaoLaranja} />
      </View>

      <View style={styles.row}>
        <Botao label="4" estiloCor={styles.botaoLaranja} />
        <Botao label="5" estiloCor={styles.botaoRosaMedio} />
        <Botao label="6" estiloCor={styles.botaoRosaMedio} />
        <Botao label="-" estiloCor={styles.botaoRosaMedio} />
      </View>

      <View style={styles.row}>
        <Botao label="1" estiloCor={styles.botaoLaranja} />
        <Botao label="2" estiloCor={styles.botaoRosaEscuro} />
        <Botao label="3" estiloCor={styles.botaoRosaEscuro} />
        <Botao label="+" estiloCor={styles.botaoBege} />
      </View>

      <View style={styles.row}>
        <Botao label="√" estiloCor={styles.botaoBege} />
        <Botao label="0" estiloCor={styles.botaoBege} />
        <Botao label="," estiloCor={styles.botaoBege} />
        <Botao label="=" estiloCor={styles.botaoBege} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBCFD0',
    paddingTop: 50,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#D17A7C',
    marginBottom: 10,
  },
  visorContainer: {
    backgroundColor: '#6C7370',
    width: '90%',
    height: 120,
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderRadius: 15,
    marginBottom: 30,
    borderWidth: 4,
    borderColor: '#E8A5A6',
    overflow: 'hidden',
  },
  textoResultado: {
    color: '#000',
    fontSize: 50,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  containerBotao: {
    width: 70,
    height: 70,
    margin: 5,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  textoBotao: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },
  botaoRosaClaro: { backgroundColor: '#F9E4E6' },
  botaoAzulClaro: { backgroundColor: '#D4E5ED' },
  botaoLaranja: { backgroundColor: '#FF8C00' },
  botaoRosaMedio: { backgroundColor: '#EABACF' },
  botaoRosaEscuro: { backgroundColor: '#F2C9D4' },
  botaoBege: { backgroundColor: '#F9F1C0' },
});

export default LotsOfStyles;