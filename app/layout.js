import "./globals.css";



export const metadata = {
  title: "白宦成的画板",
  description: "白宦成的画板",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hans">
      <body>
        {children}
      </body>
    </html>
  );
}
