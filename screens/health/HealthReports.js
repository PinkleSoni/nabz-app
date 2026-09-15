import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { colors, fonts, spacing } from '../../tokens';

// Mock data
const mockReports = [
  {
    id: '1',
    patientName: 'Sunita Deshmukh',
    patientAge: 52,
    reportDate: '11 Sep 2026',
    status: 'abnormal',
    flaggedCount: 4,
    totalTests: 42,
  },
  {
    id: '2',
    patientName: 'Rajesh Kumar',
    patientAge: 45,
    reportDate: '05 Sep 2026',
    status: 'normal',
    flaggedCount: 0,
    totalTests: 38,
  },
];

export default function HealthReports({ navigation }) {
  const [reports] = useState(mockReports);

  const handleReportPress = (report) => {
    navigation.navigate('ReportDetail', { reportId: report.id, report });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.headerTitle}>Lab Reports</Text>
        <Text style={styles.headerSubtitle}>लैब रिपोर्ट</Text>
      </View>

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {reports.map((report) => (
          <TouchableOpacity
            key={report.id}
            onPress={() => handleReportPress(report)}
            style={styles.reportCard}
            activeOpacity={0.7}
          >
            <View style={styles.reportCardContent}>
              <View style={styles.reportInfo}>
                <Text style={styles.patientName}>{report.patientName}</Text>
                <Text style={styles.reportMeta}>
                  {report.patientAge} F · {report.reportDate}
                </Text>
              </View>

              <View style={styles.reportStats}>
                {report.status === 'abnormal' && (
                  <View style={styles.flaggedBadge}>
                    <Text style={styles.flaggedBadgeText}>
                      {report.flaggedCount} abnormal
                    </Text>
                  </View>
                )}
                {report.status === 'normal' && (
                  <View style={styles.normalBadge}>
                    <Text style={styles.normalBadgeText}>All normal</Text>
                  </View>
                )}
                <Text style={styles.totalTests}>
                  {report.totalTests} tests
                </Text>
              </View>
            </View>

            <Text style={styles.cardChevron}>→</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.emptyStateContainer}>
          <Text style={styles.emptyStateText}>
            No more reports available
          </Text>
          <Text style={styles.emptyStateHi}>
            कोई और रिपोर्ट उपलब्ध नहीं है
          </Text>
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
  headerSection: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.lg,
    backgroundColor: colors.healthSurface,
    borderBottomWidth: 1,
    borderBottomColor: '#DBE4E8',
  },
  headerTitle: {
    fontSize: fonts.sizes.xl,
    fontWeight: fonts.weights.semibold,
    color: colors.healthDark,
    letterSpacing: -0.01,
  },
  headerSubtitle: {
    fontSize: fonts.sizes.body,
    color: colors.healthSecondary,
    marginTop: spacing.xs,
  },
  scrollContent: {
    flex: 1,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.lg,
  },
  reportCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.healthSurface,
    borderRadius: 8,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: '#C6D3D8',
  },
  reportCardContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  reportInfo: {
    flex: 1,
    minWidth: 0,
  },
  patientName: {
    fontSize: fonts.sizes.body,
    fontWeight: fonts.weights.semibold,
    color: colors.healthDark,
  },
  reportMeta: {
    fontSize: fonts.sizes.label,
    color: colors.healthSecondary,
    marginTop: spacing.xs,
  },
  reportStats: {
    alignItems: 'flex-end',
    gap: spacing.xs,
  },
  flaggedBadge: {
    backgroundColor: colors.healthWarning,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 4,
  },
  flaggedBadgeText: {
    fontSize: fonts.sizes.label,
    fontWeight: fonts.weights.semibold,
    color: colors.healthDark,
  },
  normalBadge: {
    backgroundColor: '#E8F4F1',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 4,
  },
  normalBadgeText: {
    fontSize: fonts.sizes.label,
    fontWeight: fonts.weights.semibold,
    color: colors.primary,
  },
  totalTests: {
    fontSize: fonts.sizes.label,
    color: colors.healthSecondary,
  },
  cardChevron: {
    fontSize: fonts.sizes.lg,
    color: colors.healthSecondary,
    marginLeft: spacing.sm,
  },
  emptyStateContainer: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
    marginTop: spacing.lg,
  },
  emptyStateText: {
    fontSize: fonts.sizes.body,
    color: colors.healthSecondary,
  },
  emptyStateHi: {
    fontSize: fonts.sizes.bodySm,
    color: colors.healthTertiary,
    marginTop: spacing.xs,
  },
});
