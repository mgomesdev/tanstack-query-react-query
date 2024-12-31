import Provider from "./Provider";

interface LayoutProps {
   children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
   return <Provider>{children}</Provider>;
}

export default Layout;
