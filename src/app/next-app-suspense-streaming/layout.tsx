interface LayoutProps {
   children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
   return (
      <html lang="pt-BR">
         <body data-testid="body">{children}</body>
      </html>
   );
}

export default Layout;
