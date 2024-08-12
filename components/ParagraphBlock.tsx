import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from './Themed';

export default function ParagraphBlock({ paragraphContent }: { paragraphContent: string }) {
  return (
    <View>
        <View style={styles.container}>
          <Text style={styles.paragraphText}>
              {paragraphContent}
          </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      marginVertical: 5,
  },
  paragraphText: {
      fontSize: 18,
      fontWeight: 'regular',
  },
});
