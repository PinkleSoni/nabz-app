import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fonts, spacing } from '../../../tokens';

export default function ReportHeader({ patientName, patientAge, reportDate, normalCount, flaggedCount }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>Your report</Text>
        <Text style={styles.titleHi}>आपकी रिपोर्ट</Text>
      </View>

      <Text style={styles.patientInfo}>
        {patientName} · {patientAge} F · {reportDate}
      </Text>

      {normalCount !== undefined && flaggedCount !== undefined ? (
        <View style={styles.summarySection}>
          {flaggedCount === 0 ? (
            <>
              <Text style={styles.summaryText}>
                All results within normal range.
              </Text>
              <Text style={styles.summaryTextHi}>
                सभी परिणाम सामान्य सीमा के भीतर हैं।
              </Text>
            </>
          ) : (
            <>
              <View style={styles.flaggedHeader}>
                <Text style={styles.flaggedTitle}>
                  {flaggedCount} result{flaggedCount !== 1 ? 's' : ''} outside normal range
                </Text>
                <Text style={styles.flaggedTitleHi}>
                  {flaggedCount} जाँच सामान्य सीमा से बाहर
                </Text>
              </View>
              <Text style={styles.disclaimerText}>
                Outside the range is not a diagnosis.
              </Text>
              <Text style={styles.disclaimerTextHi}>
                सामान्य सीमा से बाहर होना कोई रोग-निदान नहीं है।
              </Text>
            </>
          )}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    backgroundColor: colors.healthSurface,
    borderBottomWidth: 1,
    borderBottomColor: '#DBE4E8',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: spacing.sm,
    gap: spacing.sm,
  },
  title: {
    fontSize: fonts.sizes.lg,
    fontWeight: fonts.weights.semibold,
    color: colors.healthDark,
    letterSpacing: -0.01,
  },
  titleHi: {
    fontSize: fonts.sizes.body,
    color: colors.healthSecondary,
  },
  patientInfo: {
    fontSize: fonts.sizes.label,
    color: colors.healthSecondary,
    marginBottom: spacing.md,
  },
  summarySection: {
    backgroundColor: '#F3F8FA',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    borderRadius: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#DBE4E8',
  },
  summaryText: {
    fontSize: fonts.sizes.body,
    lineHeight: 20,
    color: colors.healthDark,
  },
  summaryTextHi: {
    fontSize: fonts.sizes.bodySm,
    lineHeight: 19,
    color: colors.healthSecondary,
    marginTop: spacing.xs,
  },
  flaggedHeader: {
    marginBottom: spacing.sm,
  },
  flaggedTitle: {
    fontSize: fonts.sizes.body,
    fontWeight: fonts.weights.semibold,
    color: colors.healthDark,
    letterSpacing: -0.01,
  },
  flaggedTitleHi: {
    fontSize: fonts.sizes.bodySm,
    color: colors.healthSecondary,
    marginTop: spacing.xs,
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
});
