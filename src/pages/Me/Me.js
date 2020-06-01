import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Pill } from '../../styles';
import { ProfileIcon } from './styles';
import GitIcon from '../../resources/github.svg'
import LinkedInIcon from '../../resources/linkedin.svg'
import GitConIcon from '../../resources/gitconnected.svg'

const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>{user.basics.summary}</Paragraph>
      </div>
      <div>
        <SectionTitle>Skills</SectionTitle>
        <div>
          {user.skills.map(skill => (
            <Pill key={skill.name}>{skill.name}</Pill>
          ))}
        </div>
      </div>
      <div>
        <SectionTitle>Profiles</SectionTitle>
        <a href="https://github.com/R-Singh94"><ProfileIcon src={GitIcon}/></a>
        <a href="https://www.linkedin.com/in/ravinder-singh-87129578"><ProfileIcon src={LinkedInIcon}/></a>
        <a href="https://gitconnected.com/r-singh94"><ProfileIcon src={GitConIcon}/></a>
      </div>
    </Layout>
  );
};

export default Me;