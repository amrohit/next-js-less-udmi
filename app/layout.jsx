// import type { ReactNode } from 'react';

// interface LayoutProps {
//   children: ReactNode;
// }
const RootLayout = ({ children }) => {
  return (
    <html lang='eng'>
      <head>
        <title>App</title>
      </head>
      <body suppressHydrationWarning={true}>
        <header>
          <ul>
            <li>
              <a href='/'> Home </a>
            </li>
            <li>
              <a href='/reviews'> Reviews </a>{' '}
            </li>
            <li>
              <a href='/about'> About </a>{' '}
            </li>
          </ul>
        </header>
        <main>{children}</main>
        <footer>[footer]</footer>
      </body>
    </html>
  );
};
export default RootLayout;
