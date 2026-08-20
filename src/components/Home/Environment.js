import React from 'react';
import styled from 'styled-components';
import Marquee from 'react-fast-marquee';

const environmentImages = Object.values(
  import.meta.glob('@/assets/environment_*.{png,jpg,jpeg,PNG,JPG,JPEG}', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
);

function Environment() {
  return (
    <Wrapper className="wrapper">
      <div className="section-heading">
        <span>Environment</span>
        <h2>廠房環境</h2>
      </div>
      <div className="marquee-container">
        <StyledMarquee speed={42} gradient={false}>
          {environmentImages.map((src, i) => (
            <div className="marquee-item" key={i}>
              <img src={src} alt="environment" />
            </div>
          ))}
        </StyledMarquee>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: #fff;
  overflow: hidden;

  & > .section-heading {
    text-align: center;
    margin-bottom: 50px;

    & > span {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      color: var(--accent-color);
      font-size: 0.82rem;
      font-weight: 800;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 10px;

      &::before,
      &::after {
        content: '';
        width: 32px;
        height: 1px;
        background: currentColor;
        opacity: 0.5;
      }
    }

    & > h2 {
      color: var(--text-color);
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 800;
      line-height: 1.2;
    }
  }

  & > .marquee-container {
    width: 100%;
    overflow: hidden;
  }
`;

const StyledMarquee = styled(Marquee)`
  .rfm-marquee,
  .rfm-initial-child-container {
    gap: 24px;
    padding-right: 24px;
    align-items: flex-start;
  }

  .marquee-item {
    display: block;
  }

  .rfm-child:nth-child(even) .marquee-item {
    margin-top: 50px;
  }

  .rfm-child:nth-child(odd) .marquee-item {
    margin-bottom: 50px;
  }

  img {
    height: 300px;
    width: auto;
    max-width: initial;
    object-fit: contain;
    border-radius: 16px;
  }
`;

export default Environment;
