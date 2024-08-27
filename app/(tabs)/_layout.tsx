import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'rgb(255, 215, 0)', // Color for active icons
        tabBarInactiveTintColor: 'rgb(205, 155, 29)', // Color for inactive icons
        tabBarStyle: {
          backgroundColor: 'red', // Red background color for the tab bar
          borderTopWidth: 0, // Remove border line at the top of the tab bar
          paddingTop: 10,
          paddingBottom: 10,
          height: 60,
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="liveChat"
        options={{
          title: 'Live Chat',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='chatbox' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profileBuilder"
        options={{
          title: 'Profile Builder',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='person' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='code-slash' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="messaging"
        options={{
          title: 'Messaging',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='chatbubble' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='settings' color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
