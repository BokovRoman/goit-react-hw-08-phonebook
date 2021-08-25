import styled, { keyframes } from 'styled-components';
import { fadeInDownBig, bounceInRight } from 'react-animations';
import { Link } from 'react-router-dom';

import './HomeView.scss';
import routes from '../../routes';
import Section from '../../components/Section';

const fadeInDownBigAnimation = keyframes`${fadeInDownBig}`;
const BouncyDiv = styled.div`
  animation: 1s ${fadeInDownBigAnimation};
`;

const bounceInRightAnimation = keyframes`${bounceInRight}`;
const BounceInRightSpan = styled.span`
  animation: 5s ${bounceInRightAnimation};
`;

const HomeView = () => (
  <Section>
    <BouncyDiv className="home__welcome">
      <h1 className="home__main-title">Welcome to phone book!</h1>
      <p>This application was created for storage your contacts</p>
      <p className="home__sign-up">
        For first using you should
        <BounceInRightSpan className="sign-up__link">
          <Link className="login__link" to={routes.register}>
            Sign Up
          </Link>
        </BounceInRightSpan>
      </p>
    </BouncyDiv>
  </Section>
);

export default HomeView;