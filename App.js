import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useReducer, useState } from 'react';

import { 
  StyleSheet, View, Image, Text, Switch
} from 'react-native';
import { 
  translate, portuguese as initialText
} from './src/utils/languageUtils'
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false)
  const [txt, switchLanguage] = useReducer(translate, initialText)

  const toggleSwitch = () => {
    setIsEnabled(prev => !prev)
    
    if (isEnabled) {
      switchLanguage('PT-BR')
    } else {
      switchLanguage('EN-US')
    }
  }
  
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar style="auto" />
      <View style={styles.headerView}>
        <LinearGradient 
          colors={['#5a629d', '#434c8f']}
          style={styles.background}
        />  
        <Image 
          style={styles.photo}
          source={require('./src/images/photo.png')}
        />
        <Text style={headerTitle}>
          {txt.title}
        </Text>
        <Text style={headerSubtitle}>
          {txt.subtitle}
        </Text>
      </View>
      <View style={styles.mainView}>
        <LinearGradient 
          colors={['#434c8f', '#5a6e9d']}
          style={styles.background}
        />
        <View style={styles.switchView}>
          <Text style={styles.lang}>PORTUGUÊS</Text>
          <Switch
            trackColor={{false: '#7ab47c', true: '#81b0ff'}}
            thumbColor={'#f4f3f4'}
            ios_backgroundColor="#a68f8f"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={styles.lang}>ENGLISH</Text>
        </View>
        <View style={styles.descriptionView}>
          {txt.descriptions.map((item, index) => (
            <Text style={styles.description} key={index+1}>
              {item}
            </Text>
          ))}
        </View>
        <Text style={styles.aboutMe}>
          {txt.aboutMe}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Estilos gerais da aplicação:
  app: {
    flex: 1,
    backgroundColor: '#5a629d',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    paddingBlock: 16,
    paddingInline: 12,
    height: '110%',
  },
  // Estilos do cabeçalho:
  headerView: {
    paddingBlock: 16,
    paddingInline: 12,
    width: '100%',
    height: '42%',
  },
  headerText: {
    textAlign: 'center',
    color: '#fff'
  },
  photo: {
    width: '100%',
    height: 254,
    resizeMode: 'contain',
    marginBlockEnd: 12
  },
  title: {
    fontSize: 27,
    fontWeight: 700
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 500
  },
  // Estilos da área central:
  mainView: {
    width: '100%',
    height: '58%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#434c8f'
  },
  description: {
    marginVertical: 4,
    color: '#fff',
    fontWeight: 300,
    fontSize: 16
  },
  aboutMe: {
    marginVertical: 20,
    marginHorizontal: 40,
    color: '#fff',
    textAlign: 'justify',
    lineHeight: 20,
    fontWeight: 300,
    fontSize: 16
  },
  switchView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },
  lang: {
    color: '#fff',
    letterSpacing: 1,
    fontSize: 12
  }
});

const headerTitle = StyleSheet.flatten([styles.headerText, styles.title])
const headerSubtitle = StyleSheet.flatten([styles.headerText, styles.subtitle])