import { Image } from 'expo-image';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { Badge } from '@/components/profile/Badge';
import { ConnectButton } from '@/components/profile/ConnectButton';
import { SkillTag } from '@/components/profile/SkillTag';
import { PROFILE_DATA } from '@/constants/profileData';

export function ProfileCard({ profile = PROFILE_DATA }) {
  const { name, title, avatar, statusBadges, bio, skills, socialLinks } = profile;

  const topLinks = socialLinks.slice(0, 2);
  const bottomLinks = socialLinks.slice(2, 4);

  return (
    <View style={styles.card}>
      <View style={styles.banner} />

      <View style={styles.avatarWrapper}>
        <Image
          source={avatar}
          style={styles.avatar}
          contentFit="cover"
          transition={300}
          accessibilityLabel={`${name}'s profile picture`}
        />
      </View>

      <View style={styles.body}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.badgeContainer}>
          {statusBadges.map((badge) => (
            <Badge key={badge.id} label={badge.label} variant={badge.variant} />
          ))}
        </View>

        <View style={styles.divider} />

        <Text style={styles.bio}>{bio}</Text>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SKILLS</Text>
          <View style={styles.skillsContainer}>
            {skills.map((skill) => (
              <SkillTag key={skill} name={skill} />
            ))}
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>CONNECT</Text>
          <View style={styles.connectGrid}>
            <View style={styles.connectRow}>
              {topLinks.map((link) => (
                <ConnectButton
                  key={link.id}
                  label={link.label}
                  icon={link.icon}
                  url={link.url}
                />
              ))}
            </View>
            <View style={styles.connectRow}>
              {bottomLinks.map((link) => (
                <ConnectButton
                  key={link.id}
                  label={link.label}
                  icon={link.icon}
                  url={link.url}
                />
              ))}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    width: '100%',
    maxWidth: 420,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  banner: {
    height: 110,
    backgroundColor: '#E8EDFB',
  },
  avatarWrapper: {
    alignSelf: 'center',
    marginTop: -52,
    borderRadius: 54,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },
  body: {
    paddingHorizontal: 24,
    paddingTop: 14,
    paddingBottom: 28,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    color: '#0F172A',
    fontFamily: Platform.select({
      ios: 'Georgia',
      android: 'serif',
      default: 'serif',
    }),
    textAlign: 'center',
  },
  title: {
    fontSize: 14.5,
    fontWeight: '500',
    color: '#64748B',
    marginTop: 4,
    textAlign: 'center',
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 14,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#F1F5F9',
    marginVertical: 18,
  },
  bio: {
    fontSize: 13.5,
    lineHeight: 21,
    color: '#475569',
    textAlign: 'center',
    paddingHorizontal: 4,
  },
  section: {
    width: '100%',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#94A3B8',
    letterSpacing: 1.5,
    marginBottom: 12,
    textAlign: 'center',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: 320,
  },
  connectGrid: {
    width: '100%',
    gap: 10,
  },
  connectRow: {
    flexDirection: 'row',
    width: '100%',
    gap: 10,
  },
});
