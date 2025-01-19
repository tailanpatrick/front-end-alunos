import React from "react";
import PropTypes from "prop-types";
import { Container } from "./styled";

type LoadingProps = {
  isLoading: boolean
}

const Loading = ({ isLoading }: LoadingProps) => {

  if(!isLoading) return <></>

  return (
    <Container>
      <div></div>
      <span>Carregando...</span>
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false
}

Loading.propTypes = {
  isLoading: PropTypes.bool
}

export default Loading;
