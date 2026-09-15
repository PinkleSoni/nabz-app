import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fonts } from '../../tokens';

export default function WhatsAppShare() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WhatsAppShare</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: fonts.sizes.md, color: colors.textPrimary, fontWeight: fonts.weights.medium },
});
