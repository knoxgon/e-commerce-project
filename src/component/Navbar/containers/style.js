import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ImageSlideContainer = styled.div`
  display: inline-flex;
  overflow: hidden;
  width: 50rem;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SubLink = styled(Link)`
  text-decoration: none;
  text-decoration: inherit;
  color: #1b9425;
  width: fit-content;
  margin: 0 auto;
  font-weight: 500;
  padding-bottom: 1rem;
  &:hover {
    color: green;
  }
`;
