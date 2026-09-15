import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, fonts, spacing } from '../../../tokens';

const getRailColor = (status) => {
  switch (status) {
    case 'high':
      return colors.healthHigh;
    case 'low':
      return colors.healthLow;
    case 'normal':
    default:
      return '#C0D4E0';
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case 'high':
    case 'low':
      return colors.healthHigh;
    case 'normal':
    default:
      return colors.healthSecondary;
  }
};

const getStatusText = (status) => {
  switch (status) {
    case 'high':
      return 'HIGH';
    case 'low':
      return 'LOW';
    case 'normal':
    default:
      return 'NORMAL';
  }
};

export default function ResultCard({
  name,
  nameHi,
  value,
  unit,
  status = 'normal',
  isFlagged = false,
  onPress = () => {}
}) {
  const railColor = getRailColor(status);
  const statusColor = getStatusColor(status);
  const statusText = getStatusText(status);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        isFlagged && styles.flaggedContainer
      ]}
      activeOpacity={0.7}
    >
      <View style={[styles.rail, { backgroundColor: railColor }]} />

      <View style={styles.content}>
        <View style={styles.leftContent}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.nameHi}>{nameHi}</Text>
        </View>

        <View style={styles.rightContent}>
          <Text style={styles.value}>{value}</Text>
          <Text style={styles.unit}>{unit}</Text>
        </View>

        <View style={styles.statusBadge}>
          <Text style={[styles.statusText, { color: statusColor }]}>
            {statusText}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: colors.healthSurface,
    borderWidth: 1,
    borderColor: '#DBE4E8',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: spacing.sm,
  },
  flaggedContainer: {
    backgroundColor: '#FFF9F0',
    borderColor: '#E8D4C4',
  },
  rail: {
    width: 4,
    flex: 0,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sm,
    gap: spacing.sm,
  },
  leftContent: {
    flex: 1,
    minWidth: 0,
  },
  name: {
    fontSize: fonts.sizes.bodySm,
    fontWeight: fonts.weights.regular,
    color: colors.healthDark,
    lineHeight: 16,
  },
  nameHi: {
    fontSize: fonts.sizes.label,
    color: colors.healthSecondary,
    lineHeight: 16,
    marginTop: 2,
  },
  rightContent: {
    alignItems: 'flex-end',
  },
  value: {
    fontSize: fonts.sizes.lg,
    fontWeight: fonts.weights.semibold,
    color: colors.healthDark,
    lineHeight: 18,
  },
  unit: {
    fontSize: fonts.sizes.label,
    color: colors.healthSecondary,
    lineHeight: 13,
    marginTop: 1,
  },
  statusBadge: {
    alignItems: 'flex-end',
  },
  statusText: {
    fontSize: 9.5,
    fontWeight: fonts.weights.semibold,
    letterSpacing: 0.07,
    textTransform: 'uppercase',
  },
});
