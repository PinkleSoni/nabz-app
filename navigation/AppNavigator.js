import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { colors, fonts } from '../tokens';

import HealthNavigator from './HealthNavigator';

const Tab = createBottomTabNavigator();

const linking = {
  prefixes: ['/'],
  config: {
    screens: {
      Health: {
        screens: {
          HealthReports: 'health',
          ReportDetail: 'health/report/:reportId',
          ResultDetail: 'health/result/:resultId',
        },
      },
    },
  },
};

export default function AppNavigator() {
  return (
    <NavigationContainer linking={linking}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.surface,
            borderTopColor: colors.border,
            borderTopWidth: 1,
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.textSecondary,
          tabBarLabelStyle: {
            fontSize: fonts.sizes.caption,
            fontWeight: fonts.weights.medium,
          },
        }}
      >
        <Tab.Screen name="Health" component={HealthNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
