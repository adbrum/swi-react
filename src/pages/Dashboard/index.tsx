import React from 'react';
import { FiPower } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

import { Container, Content } from './styles';

import Upload from '../../components/Upload';
import FileList from '../../components/FileList';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <>
      <h1>Dashboard</h1>
      <Container>
        <Content>
          <Upload />
          <FileList />
        </Content>
        <button type="button" onClick={signOut}>
          <FiPower />
          Exit
        </button>
      </Container>
    </>
  );
};

export default Dashboard;
