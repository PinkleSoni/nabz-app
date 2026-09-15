import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { colors, spacing } from '../../../tokens';

const LoadingSkeletonLine = ({ width = '100%', height = 12, style }) => {
  const animatedOpacity = React.useRef(new Animated.Value(0.6)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedOpacity, { toValue: 1, duration: 600, useNativeDriver: true }),
        Animated.timing(animatedOpacity, { toValue: 0.6, duration: 600, useNativeDriver: true }),
      ])
    ).start();
  }, [animatedOpacity]);

  return (
    <Animated.View
      style={[
        {
          opacity: animatedOpacity,
          width,
          height,
          backgroundColor: colors.healthSecondary,
          borderRadius: 4,
        },
        style,
      ]}
    />
  );
};

export const ResultRowSkeleton = () => (
  <View style={styles.resultRowSkeleton}>
    <View style={styles.skeletonRail} />
    <View style={styles.skeletonContent}>
      <LoadingSkeletonLine width="70%" height={13} style={{ marginBottom: spacing.xs }} />
      <LoadingSkeletonLine width="50%" height={11} />
    </View>
    <View style={styles.skeletonValue}>
      <LoadingSkeletonLine width={40} height={13} style={{ marginBottom: spacing.xs }} />
      <LoadingSkeletonLine width={25} height={10} />
    </View>
  </View>
);

export const LoadingReportDetail = () => (
  <View style={styles.container}>
    <View style={styles.headerSkeleton}>
      <LoadingSkeletonLine width="60%" height={20} style={{ marginBottom: spacing.md }} />
      <LoadingSkeletonLine width="80%" height={12} />
    </View>

    <View style={styles.sectionSkeleton}>
      <LoadingSkeletonLine width="40%" height={16} style={{ marginBottom: spacing.md }} />
      {[1, 2, 3].map((i) => (
        <View key={i} style={{ marginBottom: spacing.md }}>
          <ResultRowSkeleton />
        </View>
      ))}
    </View>

    <View style={styles.sectionSkeleton}>
      <LoadingSkeletonLine width="30%" height={16} style={{ marginBottom: spacing.md }} />
      {[1, 2, 3, 4, 5].map((i) => (
        <View key={i} style={{ marginBottom: spacing.md }}>
          <ResultRowSkeleton />
        </View>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.healthBg,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.lg,
  },
  headerSkeleton: {
    marginBottom: spacing.lg,
  },
  sectionSkeleton: {
    marginBottom: spacing.xl,
  },
  resultRowSkeleton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.healthSurface,
    borderRadius: 4,
    overflow: 'hidden',
    borderColor: '#DBE4E8',
    borderWidth: 1,
    paddingVertical: spacing.sm,
  },
  skeletonRail: {
    width: 4,
    height: 44,
    backgroundColor: colors.healthAccent,
    opacity: 0.3,
  },
  skeletonContent: {
    flex: 1,
    marginHorizontal: spacing.sm,
  },
  skeletonValue: {
    marginRight: spacing.sm,
    alignItems: 'flex-end',
  },
});
