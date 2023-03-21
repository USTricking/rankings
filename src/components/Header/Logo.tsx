import type { FunctionComponent } from 'react';
import { useState, useEffect } from 'react';

type LogoProps = {
  size?: number;
	width?: number;
	height?: number;
	src?: string;
}

export const Logo: FunctionComponent<LogoProps> = (props) => {
  const [logoSrc, setLogoSrc] = useState('/ustricking_logo_dark.png');
  const { size, width, height, src } = props;

  useEffect(() => {
    const darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    localStorage.setItem('theme', darkThemeQuery.matches ? 'dark' : 'light');
    window.addEventListener('themeChange', () => {
      setLogoSrc(getImageFromTheme());
    });

    setLogoSrc(getImageFromTheme());

    return () => {
      window.removeEventListener('themeChange', () => {});
    }
  }, []);

  const getImageFromTheme = () => {
    if (src) return src;
    if (localStorage.getItem('theme') === 'dark') {
      return '/ustricking_logo_dark.png';
    }
    return '/ustricking_logo_light.png';
  }

  return (
    <img src={logoSrc} id='logo-image' alt='Logo' width={size ? size : (width ?? 48)} height={size ? size : (height ?? 48)} />
  );
};