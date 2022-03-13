import styled, { css } from "styled-components";
import { Grid } from "@material-ui/core";

export const ContainerGrid = styled(Grid)`
  border-radius: 20px;
  width: 50%;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ bg }) => bg && `url(${bg})`};
  padding-bottom: 5px;
`;

export const LocaleGrid = styled(Grid)`
  color: white;
  padding: 10px 16px;
  background-color: rgb(0 0 0 / 55%);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  p {
    display: inline;
    font-weight: 600;
    font-size: 1.125rem;
  }
`;

export const WeatherDataGrid = styled(Grid)`
  color: white;
  padding: 10px 16px;
  h2 {
    margin-top: 5px;
    display: block;
    position: relative;
    font-size: 3.5rem;
    line-height: 1;
    font-weight: 500;
  }
  h3 {
    margin-top: 5px;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.1;
    text-transform: capitalize;
  }
  h4 {
    margin-top: 5px;
    line-height: 1.1;
    font-size: 1.125rem;
    font-weight: 700;
  }
`;

export const IconGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
