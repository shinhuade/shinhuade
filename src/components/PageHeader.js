import React from 'react';
import styled from 'styled-components';

function PageHeader({ title, subtitle, bgText = 'HEADER' }) {
  return (
    <Wrapper $bgText={bgText}>
      <div className="container">
        <span className="eyebrow">{bgText}</span>
        <h2>{title}</h2>
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  padding: 92px 0 86px;
  background:
    linear-gradient(135deg, rgba(0, 54, 91, 0.94), rgba(0, 74, 120, 0.84)),
    var(--primary-color);
  overflow: hidden;
  color: #fff;

  &::before {
    content: '${(props) => props.$bgText}';
    position: absolute;
    right: max(20px, 6vw);
    bottom: -0.22em;
    font-size: clamp(4rem, 13vw, 11rem);
    font-weight: 900;
    color: rgba(255, 255, 255, 0.055);
    pointer-events: none;
    white-space: nowrap;
  }

  &::after {
    content: '';
    width: min(520px, 45vw);
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent);
    position: absolute;
    left: 0;
    bottom: 32px;
  }

  .container {
    position: relative;
    z-index: 1;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    color: rgba(255, 255, 255, 0.72);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    margin-bottom: 12px;

    &::before {
      content: '';
      width: 36px;
      height: 2px;
      background: var(--accent-color);
    }
  }

  h2 {
    font-size: clamp(2.2rem, 5vw, 4rem);
    font-weight: 800;
    color: #fff;
    margin-bottom: 16px;
    letter-spacing: 0;
    line-height: 1.15;
  }

  .subtitle {
    position: relative;
    color: rgba(255, 255, 255, 0.78);
    font-size: 1.125rem;
    max-width: 680px;
    margin: 0;
    z-index: 1;
    line-height: 1.8;
  }

  @media (max-width: 576px) {
    padding: 72px 0 64px;
  }
`;

export default PageHeader;
