import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import { Container, FileInfo, Preview } from './styles';

const Upload: React.FC = () => {
  return (
    <Container>
      <li>
        <FileInfo>
          <Preview />
          <div>
            <strong>profile.png</strong>
            <span>
              24kb <button type="button">Delete</button>
            </span>
          </div>
        </FileInfo>

        <div>
          <a
            href="https://picsum.photos/id/237/200/300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
          </a>
          <MdCheckCircle size={24} color="#78e5d5" />
          <MdError size={24} color="#e57878" />
        </div>
      </li>
    </Container>
  );
};

export default Upload;
