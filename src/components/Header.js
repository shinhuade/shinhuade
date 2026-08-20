import React from 'react';
import styled from 'styled-components';
import { Button, Grid, Space } from 'antd';
import * as AppActions from '../utils';
import { Menu as MenuIcon } from '@styled-icons/material';
import { Xmark } from '@styled-icons/fa-solid';

const { useBreakpoint } = Grid;

const navItems = [
  { path: '/service', label: '服務項目' },
  { path: '/about', label: '公司介紹' },
  { path: '/process', label: '產品製程' },
  { path: '/faq', label: '常見問題' },
  { path: '/contact', label: '聯絡我們' },
];

function Header() {
  const screens = useBreakpoint();
  const [drawer, setDrawer] = React.useState(false);

  return (
    <Wrapper>
      <div className="container nav-inner">
        <Logo
          src={new URL('@/assets/logo.png', import.meta.url).href}
          alt="Logo"
          onClick={() => {
            AppActions.navigate('/');
          }}
        />

        <nav>
          {!screens.xs && (
            <Space>
              <ul>
                {navItems.map((it) => (
                  <li key={it.label}>
                    <ActionButton
                      type="link"
                      onClick={() => {
                        AppActions.navigate(it.path);
                      }}
                    >
                      {it.label}
                    </ActionButton>
                  </li>
                ))}
              </ul>
              {/* <Divider vertical style={{ borderColor: 'var(--secondary-color)', height: 25 }} />
              <Dropdown
                menu={{
                  items: [
                    { key: 'zh-TW', label: '繁中' },
                    { key: 'en', label: 'EN' },
                  ],
                  selectable: true,
                  defaultSelectedKeys: [i18n.language],
                  onClick: ({ key }) => {
                    changeLanguage(key);
                  },
                  style: { minWidth: 80, borderRadius: 8, textAlign: 'center' },
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: 8,
                    alignItems: 'center',
                    cursor: 'pointer',
                    marginLeft: 'var(--base-padding)',
                  }}
                >
                  <EarthAmericas size={20} color="#333" />
                  {i18n.language === 'en' ? 'EN' : '繁中'}
                </div>
              </Dropdown> */}
            </Space>
          )}

          {screens.xs && (
            <MenuButton type="button" aria-label="開啟選單" onClick={() => setDrawer(true)}>
              <MenuIcon size={28} />
            </MenuButton>
          )}
        </nav>
      </div>

      <Drawer
        title="選單"
        onClose={() => {
          setDrawer(false);
        }}
        className={drawer && 'active'}
      >
        <ul>
          {navItems.map((it) => (
            <li key={it.label}>
              <span
                onClick={() => {
                  AppActions.navigate(it.path);
                  setDrawer(false);
                }}
              >
                {it.label}
              </span>
            </li>
          ))}
        </ul>

        <Xmark
          className="close-btn"
          size={35}
          color="#fff"
          onClick={() => {
            setDrawer(false);
          }}
        />

        <img className="bg-cover" src={new URL('@/assets/spray.png', import.meta.url).href} alt="spray" />

        {/* <div style={{ textAlign: 'center', marginTop: 30 }}>
          <Select
            value={i18n.language}
            style={{ minWidth: 120 }}
            options={[
              { value: 'zh-TW', label: '繁體中文' },
              { value: 'en', label: 'English' },
            ]}
            onChange={(value) => {
              changeLanguage(value);
            }}
          />
        </div> */}
      </Drawer>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  height: var(--navbar-height);
  position: fixed;
  top: 0;
  left: 0;
  background: var(--primary-color);
  color: #fff;
  z-index: 999;

  & > .nav-inner {
    height: 100%;
    display: flex;
    align-items: center;

    & > nav {
      margin-left: auto;

      & ul {
        display: flex;
      }
    }
  }
`;

const Logo = styled.img`
  max-width: 120px;
  object-fit: contain;
  filter: brightness(0) invert(1);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 576px) {
    margin-left: 15px;
  }
`;

const ActionButton = styled(Button)`
  &&& {
    color: inherit;
    font-size: 1rem;

    &:hover {
      color: inherit;
    }
  }
`;

const MenuButton = styled.button`
  width: 44px;
  height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Drawer = styled.section`
  width: 100vw;
  height: 100vh;
  background:
    linear-gradient(145deg, rgba(0, 54, 91, 0.98), rgba(0, 74, 120, 0.98)),
    var(--primary-color);
  padding: var(--navbar-height) var(--base-padding);
  opacity: 0;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(50%);
  z-index: 999;
  transition: all 0.5s ease-out;
  pointer-events: none;
  overflow: hidden;

  &.active {
    transform: translateX(0);
    opacity: 1;
    pointer-events: auto;
  }

  & > .close-btn {
    position: absolute;
    top: 24px;
    right: 24px;
    padding: 6px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
  }

  & > .bg-cover {
    width: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%) rotate(20deg) scaleX(2);
    opacity: 0.5;
    pointer-events: none;
  }

  & > ul {
    background: transparent;
    color: #fff;
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    position: relative;
    z-index: 1;

    span {
      display: block;
      padding: 14px 0;
      border-radius: var(--radius-md);
      cursor: pointer;
    }
  }
`;
export default Header;
