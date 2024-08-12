import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import ParagraphBlock from "@/components/ParagraphBlock";

export default function TabOneScreen() {
  return (
    // <View style={styles.container}>
    //     <Text style={styles.title}>About the Plagron Plantalyzer</Text>
    //     <Text style={styles.paragraph}>
    //         The Plagron Plantalyzer is a special tool that can help you understand various deficiencies within your own plants.
    //
    //         Utilizing top-notch Artificial Intelligence, we will analyse (or plantalyse) your plants' deficiencies and advise you on the best course of action to take, to make your plant happy, and more importantly, healthy.
    //     </Text>
    // </View>
    <View style={styles.container}>
        <Text style={styles.title}>About the Plagron Plantalyzer</Text>
        <ParagraphBlock paragraphContent="The Plagron Plantalyzer is a special tool that can help you understand various deficiencies within your own plants."/>
        <ParagraphBlock paragraphContent="Utilizing top-notch Artificial Intelligence, we will analyse (or plantalyse) your plants' deficiencies and advise you on the best course of action to take, to make your plant happy, and more importantly, healthy."/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      marginHorizontal: 20,
      marginVertical: 10,
  },
  title: {
      fontSize: 36,
      fontWeight:'bold',
      alignSelf: 'flex-start',
  },
  paragraph: {
      fontSize: 18,
      alignSelf: 'flex-start',
      marginTop: 10,
  },
  separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
  },
});
