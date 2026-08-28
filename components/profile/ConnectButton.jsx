import { Feather } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';

export function ConnectButton({ label, icon, url }) {
  const handlePress = async () => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Link', `Opening: ${url}`);
      }
    } catch {
      Alert.alert('Action', `Opening ${label}: ${url}`);
    }
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handlePress}
      activeOpacity={0.7}
      accessibilityRole="button"
      accessibilityLabel={`Open ${label}`}>
      <Feather name={icon} size={18} color="#64748B" style={styles.icon} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#E2E8F0',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1,
  },
  icon: {
    marginRight: 2,
  },
  label: {
    fontSize: 13.5,
    fontWeight: '600',
    color: '#334155',
  },
});
