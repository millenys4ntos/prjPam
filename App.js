import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Olá mundo!</Text>
      <StatusBar style="auto"/>
      <View style={styles.bloco}>
      <Text style={styles.textoB}>Valor 1</Text>
        <TextInput 
          style={styles.input}
          keyboardType= "numeric"
        />
      </View>
      <View style={styles.bloco}>
      <Text style={styles.textoB}>Valor 2</Text>
        <TextInput 
          style={styles.input}
          keyboardType= "numeric"
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Somar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDDDDE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#000',
    fontSize:30,
  },
  textoB: {
    fontSize: 20,
    marginTop: '10px',
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    bordercolor: '#000',
    borderWidth: 2,
    fontSize: 30,
    width: '80%',
  
  },
  bloco: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: '#000',
    width: '80%',
    textAlign: 'center',
    marginTop: '12px'
  },
  textoBotao: {
    color: '#fff',
    fontSize:30,
    textAlign: 'center',
    alignItems: 'center'
  }
});
