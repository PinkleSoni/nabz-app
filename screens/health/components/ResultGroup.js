import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fonts, spacing } from '../../../tokens';
import ResultCard from './ResultCard';

export default function ResultGroup({
  name,
  nameHi,
  results = [],
  onResultPress = () => {}
}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.groupName}>{name}</Text>
          <Text style={styles.groupNameHi}>{nameHi}</Text>
        </View>
        <Text style={styles.count}>{results.length}</Text>
      </View>

      <View style={styles.resultsList}>
        {results.map((result, index) => (
          <ResultCard
            key={result.id || index}
            name={result.name}
            nameHi={result.nameHi}
            value={result.value}
            unit={result.unit}
            status={result.status}
            onPress={() => onResultPress(result)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.lg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    backgroundColor: '#F3F8FA',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#DBE4E8',
    borderBottomColor: '#C6D3D8',
  },
  headerContent: {
    flex: 1,
  },
  groupName: {
    fontSize: fonts.sizes.label,
    fontWeight: fonts.weights.bold,
    letterSpacing: 0.09,
    textTransform: 'uppercase',
    color: colors.healthDark,
  },
  groupNameHi: {
    fontSize: fonts.sizes.body,
    color: colors.healthSecondary,
    marginTop: spacing.xs,
  },
  count: {
    fontSize: fonts.sizes.label,
    color: colors.healthTertiary,
    letterSpacing: 0.04,
  },
  resultsList: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
  },
});
