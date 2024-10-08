import {StyleSheet, Text} from 'react-native';

import {ThemedView} from '@/components/ThemedView';
import React from 'react';
import {Button, ButtonSpinner, ButtonText} from '@/components/ui/button';

export default function TabTwoScreen() {
  return (
    <ThemedView
      className="p-5 flex items-center justify-center"
      style={styles.titleContainer}>
      <Button className="p-3">
        <ButtonSpinner className="color-gray-400" />
        <ButtonText className="font-medium text-sm ml-2">
          Please wait...
        </ButtonText>
      </Button>

      <Text className="color-red-500">This is the explore tab</Text>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
