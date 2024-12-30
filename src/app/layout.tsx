interface LayoutRootProps {
   children: React.ReactNode;
}

function LayoutRoot({ children }: LayoutRootProps) {
   return (
      <html lang="pt-BR">
         <body>{children}</body>
      </html>
   );
}

export default LayoutRoot;
