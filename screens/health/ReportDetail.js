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
import ReportHeader from './components/ReportHeader';
import FlaggedSection from './components/FlaggedSection';
import ResultGroup from './components/ResultGroup';
import { LoadingReportDetail } from './components/LoadingStates';

// Mock data - in production this would come from navigation params or API
const mockReport = {
  id: '1',
  patientName: 'Sunita Deshmukh',
  patientAge: 52,
  reportDate: '11 Sep 2026',
  normalCount: 38,
  flaggedCount: 4,
  groups: [
    {
      id: 'blood',
      name: 'Blood',
      nameHi: 'रक्त जाँच',
      results: [
        {
          id: 'hb',
          name: 'Hemoglobin',
          nameHi: 'हीमोग्लोबिन',
          value: '11.2',
          unit: 'g/dL',
          status: 'low',
          normalRange: { min: 12, max: 16 },
        },
        {
          id: 'wbc',
          name: 'White Blood Cells',
          nameHi: 'सफेद रक्त कोशिकाएं',
          value: '7.5',
          unit: 'K/μL',
          status: 'normal',
          normalRange: { min: 4.5, max: 11 },
        },
        {
          id: 'plt',
          name: 'Platelets',
          nameHi: 'प्लेटलेट्स',
          value: '250',
          unit: 'K/μL',
          status: 'normal',
          normalRange: { min: 150, max: 400 },
        },
      ],
    },
    {
      id: 'biochem',
      name: 'Biochemistry',
      nameHi: 'जैव रसायन',
      results: [
        {
          id: 'glucose',
          name: 'Fasting Glucose',
          nameHi: 'उपवास ग्लूकोज',
          value: '115',
          unit: 'mg/dL',
          status: 'high',
          normalRange: { min: 70, max: 100 },
        },
        {
          id: 'creatinine',
          name: 'Creatinine',
          nameHi: 'क्रिएटिनिन',
          value: '0.9',
          unit: 'mg/dL',
          status: 'normal',
          normalRange: { min: 0.6, max: 1.2 },
        },
        {
          id: 'sodium',
          name: 'Sodium',
          nameHi: 'सोडियम',
          value: '138',
          unit: 'mEq/L',
          status: 'normal',
          normalRange: { min: 135, max: 145 },
        },
      ],
    },
    {
      id: 'lipid',
      name: 'Lipid Profile',
      nameHi: 'लिपिड प्रोफाइल',
      results: [
        {
          id: 'chol',
          name: 'Total Cholesterol',
          nameHi: 'कुल कोलेस्ट्रॉल',
          value: '220',
          unit: 'mg/dL',
          status: 'high',
          normalRange: { min: 0, max: 200 },
        },
        {
          id: 'ldl',
          name: 'LDL Cholesterol',
          nameHi: 'एलडीएल कोलेस्ट्रॉल',
          value: '145',
          unit: 'mg/dL',
          status: 'high',
          normalRange: { min: 0, max: 100 },
        },
        {
          id: 'hdl',
          name: 'HDL Cholesterol',
          nameHi: 'एचडीएल कोलेस्ट्रॉल',
          value: '35',
          unit: 'mg/dL',
          status: 'low',
          normalRange: { min: 40, max: 300 },
        },
      ],
    },
  ],
};

export default function ReportDetail({ navigation, route }) {
  const [isLoading, setIsLoading] = useState(false);
  const [report, setReport] = useState(mockReport);

  const flaggedResults = report.groups
    .flatMap((group) => group.results)
    .filter((result) => result.status !== 'normal');

  const totalResults = report.groups.reduce(
    (sum, group) => sum + group.results.length,
    0
  );

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <LoadingReportDetail />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Lab Report</Text>
      </View>

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <ReportHeader
          patientName={report.patientName}
          patientAge={report.patientAge}
          reportDate={report.reportDate}
          normalCount={report.normalCount}
          flaggedCount={report.flaggedCount}
        />

        {flaggedResults.length > 0 && (
          <FlaggedSection
            flaggedResults={flaggedResults}
            totalResults={totalResults}
            onResultPress={(result) => {
              // Handle result press - navigate to detail or show modal
            }}
          />
        )}

        <View style={styles.allResultsSection}>
          <Text style={styles.allResultsTitle}>All results</Text>
          <Text style={styles.allResultsHi}>सभी परिणाम</Text>
          <Text style={styles.allResultsCount}>
            {totalResults} tests in {report.groups.length} categories
          </Text>

          {report.groups.map((group) => (
            <ResultGroup
              key={group.id}
              name={group.name}
              nameHi={group.nameHi}
              results={group.results}
              onResultPress={(result) => {
                // Handle result press
              }}
            />
          ))}
        </View>

        <View style={styles.spacer} />
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
  allResultsSection: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.lg,
  },
  allResultsTitle: {
    fontSize: fonts.sizes.body,
    fontWeight: fonts.weights.semibold,
    color: colors.healthDark,
    letterSpacing: -0.01,
  },
  allResultsHi: {
    fontSize: fonts.sizes.bodySm,
    color: colors.healthSecondary,
    marginTop: spacing.xs,
  },
  allResultsCount: {
    fontSize: fonts.sizes.label,
    color: colors.healthSecondary,
    marginTop: spacing.xs,
  },
  spacer: {
    height: spacing.xl,
  },
});
