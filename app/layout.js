import "./globals.css";

export const metadata = {
  title: "白宦成的画板",
  description: "白宦成的画板",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hans">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: 'window.EXCALIDRAW_ASSET_PATH="https://esm.sh/@excalidraw/excalidraw@latest/dist/prod/"',
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
