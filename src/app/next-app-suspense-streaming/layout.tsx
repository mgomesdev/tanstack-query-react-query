interface LayoutProps {
   children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
   return <html lang="pt-BR">{children}</html>;
}

export default Layout;
