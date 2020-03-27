import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import DocumentPicker from 'react-native-document-picker'

const App: React.SFC = () => {
  const [document, setDocument] = useState('')

  const pickDocument = async () => {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles]
    })

    setDocument(res.name)
  }

  const cleanDocument = () => {
    setDocument('')
    alert('document cleaned')
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="green" />
      <SafeAreaView style={styles.container}>
        { document ?
        <View style={styles.document}>
          <Text style={styles.text}>
            {document}
          </Text>
          <TouchableOpacity 
            onPress={cleanDocument}
            style={styles.bg}>
            <Text style={styles.text}>
              X
            </Text>
          </TouchableOpacity>
        </View>
        : null }

        <Text style={styles.title}>
          Selecione um documento
        </Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={pickDocument}
          >
          <Text style={styles.text}>
            Selecione
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 40
  },
  document: {
    flexDirection: 'row',
    borderRadius: 45,
    backgroundColor: 'green',
    elevation: 3,
    padding: 5
  },
  bg: {
    backgroundColor: 'black',
    borderRadius: 50,
    paddingHorizontal: 5,
    marginLeft: 10
  },
  button: {
    alignItems: 'center',
    borderRadius: 45,
    padding: 10,
    width: 150,
    backgroundColor: 'green',
    elevation: 3,
  },
  text: {
    color: 'white'
  }
});

export default App;
