import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { colors, fonts, spacing } from '../../tokens';

export default function ResultDetail({ navigation, route }) {
  const result = route?.params?.result || {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Test Result</Text>
      </View>

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.contentSection}>
          <Text style={styles.resultName}>{result.name || 'Test Name'}</Text>
          <Text style={styles.resultNameHi}>
            {result.nameHi || 'टेस्ट का नाम'}
          </Text>

          <View style={styles.valueCard}>
            <Text style={styles.valueLabel}>Your Value</Text>
            <Text style={styles.valueText}>{result.value || '-'}</Text>
            <Text style={styles.valueUnit}>{result.unit || '-'}</Text>
          </View>

          <View style={styles.rangeCard}>
            <Text style={styles.rangeTitle}>Normal Range</Text>
            <Text style={styles.rangeValue}>
              {result.normalRange?.min || '-'} to {result.normalRange?.max || '-'} {result.unit || ''}
            </Text>
          </View>

          <View style={styles.statusCard}>
            <Text style={styles.statusLabel}>Status</Text>
            <Text style={[
              styles.statusValue,
              result.status === 'high' && { color: colors.healthHigh },
              result.status === 'low' && { color: colors.healthLow },
              result.status === 'normal' && { color: colors.healthAccent },
            ]}>
              {result.status?.toUpperCase() || 'UNKNOWN'}
            </Text>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>About This Test</Text>
            <Text style={styles.infoText}>
              This test measures {result.name?.toLowerCase() || 'a medical parameter'}.
              {result.status !== 'normal' && ' Your result is outside the normal range.'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.healthBg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.healthSurface,
    borderBottomWidth: 1,
    borderBottomColor: '#DBE4E8',
  },
  backButton: {
    paddingVertical: spacing.sm,
    paddingRight: spacing.sm,
    marginRight: spacing.sm,
  },
  backButtonText: {
    fontSize: fonts.sizes.lg,
    color: colors.healthSecondary,
  },
  headerTitle: {
    fontSize: fonts.sizes.body,
    fontWeight: fonts.weights.semibold,
    color: colors.healthDark,
  },
  scrollContent: {
    flex: 1,
  },
  contentSection: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.lg,
  },
  resultName: {
    fontSize: fonts.sizes.xl,
    fontWeight: fonts.weights.semibold,
    color: colors.healthDark,
    letterSpacing: -0.01,
  },
  resultNameHi: {
    fontSize: fonts.sizes.body,
    color: colors.healthSecondary,
    marginTop: spacing.sm,
  },
  valueCard: {
    backgroundColor: colors.healthSurface,
    borderRadius: 8,
    padding: spacing.lg,
    marginTop: spacing.lg,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.healthAccent,
  },
  valueLabel: {
    fontSize: fonts.sizes.label,
    color: colors.healthSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.05,
  },
  valueText: {
    fontSize: 36,
    fontWeight: fonts.weights.bold,
    color: colors.healthDark,
    marginTop: spacing.md,
  },
  valueUnit: {
    fontSize: fonts.sizes.body,
    color: colors.healthSecondary,
    marginTop: spacing.sm,
  },
  rangeCard: {
    backgroundColor: colors.healthSurface,
    borderRadius: 8,
    padding: spacing.md,
    marginTop: spacing.md,
    borderWidth: 1,
    borderColor: '#DBE4E8',
  },
  rangeTitle: {
    fontSize: fonts.sizes.label,
    fontWeight: fonts.weights.semibold,
    color: colors.healthDark,
    textTransform: 'uppercase',
    letterSpacing: 0.05,
  },
  rangeValue: {
    fontSize: fonts.sizes.body,
    color: colors.healthSecondary,
    marginTop: spacing.sm,
  },
  statusCard: {
    backgroundColor: colors.healthSurface,
    borderRadius: 8,
    padding: spacing.md,
    marginTop: spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DBE4E8',
  },
  statusLabel: {
    fontSize: fonts.sizes.label,
    fontWeight: fonts.weights.semibold,
    color: colors.healthDark,
    textTransform: 'uppercase',
    letterSpacing: 0.05,
  },
  statusValue: {
    fontSize: fonts.sizes.body,
    fontWeight: fonts.weights.semibold,
  },
  infoSection: {
    backgroundColor: '#F3F8FA',
    borderRadius: 8,
    padding: spacing.md,
    marginTop: spacing.lg,
    marginBottom: spacing.xl,
  },
  infoTitle: {
    fontSize: fonts.sizes.body,
    fontWeight: fonts.weights.semibold,
    color: colors.healthDark,
  },
  infoText: {
    fontSize: fonts.sizes.body,
    color: colors.healthSecondary,
    lineHeight: 20,
    marginTop: spacing.sm,
  },
});
