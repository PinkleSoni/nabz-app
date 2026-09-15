import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import { colors, fonts, spacing } from '../../../tokens';
import ResultCard from './ResultCard';

export default function FlaggedSection({
  flaggedResults = [],
  totalResults = 0,
  onResultPress = () => {}
}) {
  if (flaggedResults.length === 0) {
    return null;
  }

  const flaggedRatio = `${flaggedResults.length} of ${totalResults}`;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>
              {flaggedResults.length} result{flaggedResults.length !== 1 ? 's' : ''} outside normal range
            </Text>
            <Text style={styles.titleHi}>
              {flaggedResults.length} जाँच सामान्य सीमा से बाहर
            </Text>
          </View>
          <Text style={styles.ratio}>{flaggedRatio}</Text>
        </View>
      </View>

      <Text style={styles.disclaimerText}>
        Outside the range is not a diagnosis.
      </Text>
      <Text style={styles.disclaimerTextHi}>
        सामान्य सीमा से बाहर होना कोई रोग-निदान नहीं है।
      </Text>

      <View style={styles.resultsList}>
        {flaggedResults.map((result, index) => (
          <ResultCard
            key={result.id || index}
            name={result.name}
            nameHi={result.nameHi}
            value={result.value}
            unit={result.unit}
            status={result.status}
            isFlagged={true}
            onPress={() => onResultPress(result)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F8FA',
    borderBottomWidth: 1,
    borderBottomColor: '#DBE4E8',
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    marginBottom: spacing.lg,
  },
  header: {
    marginBottom: spacing.md,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  titleRow: {
    flex: 1,
  },
  title: {
    fontSize: fonts.sizes.body,
    fontWeight: fonts.weights.semibold,
    color: colors.healthDark,
    letterSpacing: -0.01,
  },
  titleHi: {
    fontSize: fonts.sizes.bodySm,
    color: colors.healthSecondary,
    marginTop: spacing.xs,
  },
  ratio: {
    fontSize: fonts.sizes.label,
    color: colors.healthSecondary,
  },
  disclaimerText: {
    fontSize: fonts.sizes.bodySm,
    lineHeight: 19,
    color: colors.healthDark,
    marginTop: spacing.sm,
  },
  disclaimerTextHi: {
    fontSize: fonts.sizes.label,
    lineHeight: 18,
    color: colors.healthSecondary,
    marginTop: spacing.xs,
  },
  resultsList: {
    marginTop: spacing.md,
    paddingBottom: spacing.md,
  },
});
