import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="eng">
      <head>
        <title>App</title> 
      </head>
      <body suppressHydrationWarning={true}>
        <header>[header]</header>
        <main>{children}</main>
        <footer>[footer]</footer>
      </body>
    </html>
  );
};
export default RootLayout;
