import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function SkillTag({ name }) {
  return (
    <View style={styles.tag}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    backgroundColor: '#F8FAFC',
    borderColor: '#E2E8F0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginHorizontal: 4,
    marginVertical: 4,
  },
  text: {
    fontSize: 13,
    fontWeight: '500',
    color: '#334155',
  },
});
