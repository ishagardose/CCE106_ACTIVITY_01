import React from 'react';
import { Badge } from './Badge';
import { ConnectButton } from './ConnectButton';
import { SkillTag } from './SkillTag';
import { PROFILE_DATA } from '../constants/profileData';

export function ProfileCard({ profile = PROFILE_DATA }) {
  const { name, title, avatar, statusBadges, bio, skills, socialLinks } = profile;

  return (
    <main className="profile-card">
      <div className="card-banner" />

      <div className="avatar-wrapper">
        <img
          src={avatar}
          alt={`${name}'s profile`}
          className="avatar-img"
        />
      </div>

      <div className="card-body">
        <h1 className="profile-name">{name}</h1>
        <p className="profile-title">{title}</p>

        <div className="badge-list">
          {statusBadges.map((badge) => (
            <Badge key={badge.id} label={badge.label} variant={badge.variant} />
          ))}
        </div>

        <hr className="divider" />

        <p className="profile-bio">{bio}</p>

        <hr className="divider" />

        <section className="section-block" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="section-title">SKILLS</h2>
          <div className="skills-list">
            {skills.map((skill) => (
              <SkillTag key={skill} name={skill} />
            ))}
          </div>
        </section>

        <hr className="divider" />

        <section className="section-block" aria-labelledby="connect-heading">
          <h2 id="connect-heading" className="section-title">CONNECT</h2>
          <div className="connect-grid">
            {socialLinks.map((link) => (
              <ConnectButton
                key={link.id}
                label={link.label}
                iconName={link.iconName}
                url={link.url}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
