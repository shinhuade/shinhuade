import React from 'react';
import styled from 'styled-components';

function Hero() {
  return (
    <Wrapper>
      <div className="content">
        <span className="eyebrow">Powder Coating Since 1984</span>
        <h1>興樺德興業有限公司</h1>
        <p>
          <span>在耐用與環保之間，找到最好的平衡</span>
          <span>專業粉體塗裝｜無溶劑製程｜穩定品質｜值得信賴</span>
        </p>
        <img src={new URL('@/assets/paint-color.png', import.meta.url).href} className="bg-paint" />
      </div>
      <VideoWrapper>
        <video
          src={new URL('@/assets/hero-v2.mp4', import.meta.url).href}
          autoPlay
          muted
          playsInline
          webkit-playsinline="true"
          loop
        />
      </VideoWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 60vh;
  padding: var(--base-padding);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: end;
  overflow: hidden;
  z-index: 1;
  background: #fff;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background: var(--primary-color);
    clip-path: polygon(0 0, 100% 0, 100% 95%, 0 85%);
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: -1;
  }

  & > .content {
    width: min(720px, calc(100% - var(--base-padding) * 2));
    color: #fff;
    position: absolute;
    bottom: 58%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;

    & > .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      color: rgba(255, 255, 255, 0.78);
      font-size: 0.82rem;
      font-weight: 800;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 18px;

      &::before {
        content: '';
        width: 42px;
        height: 2px;
        background: var(--accent-color);
      }
    }

    & > h1 {
      font-size: clamp(2.6rem, 7vw, 5.5rem);
      font-weight: 900;
      letter-spacing: 0;
      line-height: 1.08;
      margin-bottom: 1.25rem;
      text-wrap: balance;
    }

    & > p {
      display: flex;
      flex-direction: column;
      gap: 0.55rem;
      max-width: 620px;
      color: rgba(255, 255, 255, 0.86);
      font-size: clamp(1rem, 2vw, 1.3rem);
      line-height: 1.75;
    }

    & > .bg-paint {
      width: min(720px, 120vw);
      object-fit: contain;
      filter: opacity(0.18) saturate(0.9);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-48%, -45%) rotate(-4deg);
      pointer-events: none;
      z-index: -1;
    }
  }

  @media (max-width: 575px) {
    & > .content {
      width: 100%;
      max-width: 600px;
      text-align: center;
      bottom: 65%;
      left: 50%;
      transform: translateX(-50%);

      & > .eyebrow {
        display: none;
      }

      & > h1 {
        font-size: 2rem;
        letter-spacing: 0.25rem;
        line-height: 1.2;
        margin-bottom: 0.5rem;
      }

      & > p {
        gap: 0;
        max-width: none;
        font-size: 1rem;
        line-height: 1.6;
      }

      & > .bg-paint {
        width: 100%;
        filter: opacity(0.3);
        transform: translate(-50%, -45%) scaleX(1);
      }
    }
  }

  @media (min-width: 576px) {
    height: calc(100vh - var(--navbar-height));
    justify-content: end;
    align-items: center;

    & > .content {
      top: initial;
      bottom: 20%;
      left: max(var(--base-padding), calc((100vw - 1380px) / 2 + var(--base-padding)));
      transform: translateX(0%);

      & > .bg-paint {
        transform: translate(-48%, -45%) rotate(-4deg);
      }
    }
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 60%;
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  & > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (min-width: 576px) {
    width: 80%;
    height: 90%;
  }
`;

export default Hero;
