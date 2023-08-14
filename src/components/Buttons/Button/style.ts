import styled from 'styled-components';

export const Container = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  color: var(--blue);
  background-color: var(--bg-gray-200);
  border: 0;
  border-radius: 3px;
  font-weight: 500;
  padding: 0 10px;
  cursor: pointer;
  transition: box-shadow ease-in 0.2s;

  &:disabled {
    opacity: .6;
  }

  &:hover {
    -webkit-box-shadow: 0 0 5px 1px rgba(186, 182, 186, 1);
    -moz-box-shadow: 0 0 5px 1px rgba(186, 182, 186, 1);
    box-shadow: 0 0 5px 1px rgba(186, 182, 186, 1);
  }

  &.primary {
    background-color: var(--blue);
    color: var(--white);
  }

  &.outlineRed {
    color: var(--red);
    background-color: var(--white);
    border: 2px solid var(--red);
  }

  &.outlineGreen {
    color: var(--grey-500);
    background-color: var(--white);
    border: 2px solid #00897b;
  }

  &.submit {
    background-color: var(--blue-middle);
    color: var(--white);
  }

  &.redMiddle {
    background-color: var(--red-middle);
    color: var(--red);
  }

  @media screen and (max-width: 768px) {
    font-size: 10px;
    &.outlineRed {
      color: var(--red);
      background-color: var(--white);
      border: 1px solid var(--red);
    }

    @media screen and (max-width: 768px) {
      &:hover {
        -webkit-box-shadow: 0 0 0 0 rgba(186, 182, 186, 1);
        -moz-box-shadow: 0 0 0 0 rgba(186, 182, 186, 1);
        box-shadow: 0 0 0 0 rgba(186, 182, 186, 1);
      }
    }
`;
