import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import Course from './components/Course';

export default function App() {
  return (
    <ScrollView style={styles.container}> 
    {/* scrollview-container that allows you to scroll */}
      <Text style={styles.header1}>Courses</Text>

      <View style={styles.tilesContainer}>
        <Course title="Development 1" subtitle="YPO365" />
        
        <StatusBar style="auto" />
      </View>  


    {/* tile nr.1 */}

    </ScrollView>  
  );
}

const styles = StyleSheet.create({
  header1: {
    fontSize: 32,
    fontWeight: '800',
    margin: 12,
  },
  container: {
    backgroundColor: '#fff',
    paddingTop: 56,
  },
  tilesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'space-evenly',

  }
});
