import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hardware Project Documenter – Auto-generate hardware build guides",
  description: "Upload schematics, code, photos, and BOMs. Get comprehensive build guides and documentation generated automatically by AI."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b1d5c364-b321-47e7-a605-bdb5150ca003"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
