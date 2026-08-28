import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Badge({ label, variant = 'blue' }) {
  const isPurple = variant === 'purple';

  return (
    <View style={[styles.badge, isPurple ? styles.purpleBadge : styles.blueBadge]}>
      <Text style={[styles.text, isPurple ? styles.purpleText : styles.blueText]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
  },
  blueBadge: {
    backgroundColor: '#EFF6FF',
    borderColor: '#BFDBFE',
  },
  purpleBadge: {
    backgroundColor: '#FAF5FF',
    borderColor: '#E9D5FF',
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  blueText: {
    color: '#2563EB',
  },
  purpleText: {
    color: '#9333EA',
  },
});
