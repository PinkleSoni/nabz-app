import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HealthReports from '../screens/health/HealthReports';
import ReportDetail from '../screens/health/ReportDetail';
import ResultDetail from '../screens/health/ResultDetail';

const Stack = createStackNavigator();

export default function HealthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HealthReports" component={HealthReports} />
      <Stack.Screen name="ReportDetail" component={ReportDetail} />
      <Stack.Screen name="ResultDetail" component={ResultDetail} />
    </Stack.Navigator>
  );
}
