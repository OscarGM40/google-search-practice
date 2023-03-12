import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <title>Google Clone With NextJS</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Next app clone portfolio purposes,still you owe me 1000$ bucks for each search"
      />
      <link rel="icon" href="/images/google-logo-3.webp" />
      <body>{children}</body>
    </html>
  );
}
