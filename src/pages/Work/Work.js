import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { WorkItem, WorkTitle, JobTitle, Heading, DescriptionItem } from './styles';

const Work = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Work</SectionTitle>
        <ul>
          {user.work.map((work, i) => (
            <WorkItem key={i}>
              <WorkTitle>{work.position}</WorkTitle>
              <div>
                <JobTitle>{work.company}</JobTitle> <span>{work.location}</span>
                <span> &sdot; </span>
                <span>
                  {work.start.year} to {work.end.year}
                </span>
              </div>
              <Heading>Summary:</Heading>
              <div>
                <Paragraph>{work.summary}</Paragraph>
              </div>
              <Heading>Description:</Heading>
              <div>
                {work.highlights.map((highlight, i) => (
                  <DescriptionItem key={i}>
                    <Paragraph>{highlight}</Paragraph>
                  </DescriptionItem>
                ))}
              </div>
            </WorkItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Work;