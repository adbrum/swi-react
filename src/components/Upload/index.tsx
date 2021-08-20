import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles.js';

const Upload: React.FC = () => {
  return (
    <Dropzone accept="image/*" onDropAccepted={() => {}}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
          className="dropzone"
        >
          <input {...getInputProps()} />
          Drop Zone files.
        </DropContainer>
      )}
    </Dropzone>
  );
};

export default Upload;
