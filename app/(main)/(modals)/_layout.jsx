// app/(app)/(modals)/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';

export default function ModalStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        presentation: 'modal', // or 'card'
      }}
    >
      <Stack.Screen name="editProfile" />
      <Stack.Screen name="newPost" />
      <Stack.Screen name="notifications" />
      <Stack.Screen name="postDetails" />
    </Stack>
  );
}
