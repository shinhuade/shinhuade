import React from 'react';
import styled from 'styled-components';
import * as AppActions from '../../utils';
import { Row, Col, Card } from 'antd';
import RipperButton from '../RipperButton';

const services = ['粉體烤漆服務', '金屬表面前處理', '多種色系與材質選擇', '客製化服務'];

function Service() {
  return (
    <Wrapper className="wrapper">
      <div className="container">
        <div className="section-heading">
          <span>Service</span>
          <h2>我們的服務</h2>
        </div>
        <Row gutter={[20, 20]}>
          {services.map((it, idx) => (
            <Col xs={12} sm={6} key={idx}>
              <ServiceCard
                hoverable
                cover={
                  <img
                    draggable={false}
                    alt={it}
                    src={new URL('../../assets/service-0' + `${idx + 1}` + '.jpg', import.meta.url).href}
                  />
                }
              >
                <Card.Meta title={it} />
              </ServiceCard>
            </Col>
          ))}
        </Row>

        <div className="action">
          <RipperButton
            onClick={() => {
              AppActions.navigate('/service');
            }}
          >
            查看服務細節
          </RipperButton>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: linear-gradient(180deg, #fff 0%, #fff 42%, var(--bg-light-color) 42%, var(--bg-light-color) 100%);
  overflow: hidden;

  & > .container {
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

    & > .action {
      text-align: center;
      margin-top: 52px;
    }
  }
`;

const ServiceCard = styled(Card)`
  && {
    background: #fff;
    border: none;
    box-shadow: 0 14px 34px rgba(0, 54, 91, 0.1);
    border-radius: var(--radius-md);
    overflow: hidden;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    cursor: initial;
    height: 100%;

    .ant-card-cover {
      position: relative;
      overflow: hidden;

      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(0, 54, 91, 0) 42%, rgba(0, 54, 91, 0.24) 100%);
        pointer-events: none;
      }
    }

    & img {
      border-radius: 0;
      width: 100%;
      aspect-ratio: 1/1;
      object-fit: cover;
      transition: transform 0.45s ease;
    }

    & .ant-card-body {
      padding: 18px 18px 20px;
    }

    & .ant-card-meta-title {
      color: var(--primary-color);
      font-size: 1.06rem;
      font-weight: 800;
      text-align: center;
      margin: 0;
      white-space: normal;
    }

    @media (hover: hover) {
      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 22px 50px rgba(0, 54, 91, 0.16);
        z-index: 1;

        img {
          transform: scale(1.06);
        }
      }
    }

    @media (max-width: 575px) {
      border-radius: var(--radius-sm);

      & .ant-card-body {
        padding: 14px 10px 16px;
      }

      & .ant-card-meta-title {
        font-size: 0.95rem;
      }
    }
  }
`;

export default Service;
