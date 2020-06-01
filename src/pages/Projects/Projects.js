import React from 'react';
import Layout from '../../components/Layout';
import GitIcon from '../../resources/github.svg'
import { SectionTitle, Pill, Icon } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer } from './styles';

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{project.displayName}</ProjectTitle><span><a href={project.githubUrl}><Icon src={GitIcon}/></a></span>
              <p>{project.summary}</p>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
            </ProjectItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;