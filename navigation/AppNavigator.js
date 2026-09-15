import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { colors, fonts } from '../tokens';

import HomeFeed from '../screens/discover/HomeFeed';
import EventDetail from '../screens/discover/EventDetail';
import RSVP from '../screens/discover/RSVP';
import WhatsAppShare from '../screens/discover/WhatsAppShare';
import MyEvents from '../screens/discover/MyEvents';

import HomeFeedHost from '../screens/host/HomeFeedHost';
import CreateEvent from '../screens/host/CreateEvent';
import EventDetailsForm from '../screens/host/EventDetailsForm';
import PreviewPublish from '../screens/host/PreviewPublish';
import LiveConfirmation from '../screens/host/LiveConfirmation';

const Tab = createBottomTabNavigator();
const DiscoverStack = createStackNavigator();
const MyEventsStack = createStackNavigator();
const HostStack = createStackNavigator();

function DiscoverNavigator() {
  return (
    <DiscoverStack.Navigator screenOptions={{ headerShown: false }}>
      <DiscoverStack.Screen name="HomeFeed" component={HomeFeed} />
      <DiscoverStack.Screen name="EventDetail" component={EventDetail} />
      <DiscoverStack.Screen name="RSVP" component={RSVP} />
      <DiscoverStack.Screen name="WhatsAppShare" component={WhatsAppShare} />
    </DiscoverStack.Navigator>
  );
}

function MyEventsNavigator() {
  return (
    <MyEventsStack.Navigator screenOptions={{ headerShown: false }}>
      <MyEventsStack.Screen name="MyEvents" component={MyEvents} />
    </MyEventsStack.Navigator>
  );
}

function HostNavigator() {
  return (
    <HostStack.Navigator screenOptions={{ headerShown: false }}>
      <HostStack.Screen name="HomeFeedHost" component={HomeFeedHost} />
      <HostStack.Screen name="CreateEvent" component={CreateEvent} />
      <HostStack.Screen name="EventDetailsForm" component={EventDetailsForm} />
      <HostStack.Screen name="PreviewPublish" component={PreviewPublish} />
      <HostStack.Screen name="LiveConfirmation" component={LiveConfirmation} />
    </HostStack.Navigator>
  );
}

const linking = {
  prefixes: ['/'],
  config: {
    screens: {
      Discover: {
        screens: {
          HomeFeed: '',
          EventDetail: 'event/:id',
          RSVP: 'event/:id/rsvp',
          WhatsAppShare: 'event/:id/share',
        },
      },
      'My Events': 'my-events',
      Host: {
        screens: {
          HomeFeedHost: 'host',
          CreateEvent: 'host/create',
          EventDetailsForm: 'host/create/details',
          PreviewPublish: 'host/create/preview',
          LiveConfirmation: 'host/create/live',
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
        <Tab.Screen name="Discover" component={DiscoverNavigator} />
        <Tab.Screen name="My Events" component={MyEventsNavigator} />
        <Tab.Screen name="Host" component={HostNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
