import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 30px;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  color: #000;
`;

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
  className: 'dropzone',
})`
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: height 0.2s ease;
  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`;

export const UploadMessage = styled.p``;
