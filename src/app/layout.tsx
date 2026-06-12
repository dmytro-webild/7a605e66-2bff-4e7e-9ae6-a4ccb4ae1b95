import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'The Digital Worthy | Passive Income & Legitimate Side Hustles',
  description: 'Unlock your financial potential with proven passive income streams and legitimate side hustles. The Digital Worthy tests the best strategies so you don\'t have to.',
  keywords: ["passive income, side hustles, make money online, digital worth, financial freedom, online earning, legitimate opportunities"],
  openGraph: {
    "title": "The Digital Worthy | Passive Income & Legitimate Side Hustles",
    "description": "Unlock your financial potential with proven passive income streams and legitimate side hustles.",
    "url": "https://thedigitalworthy.com",
    "siteName": "The Digital Worthy",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/laptop-blank-notepad-paper-money-neon-lighting-top-view_169016-27093.jpg",
        "alt": "Laptop with digital currency and passive income graphs"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "The Digital Worthy | Passive Income & Legitimate Side Hustles",
    "description": "Unlock your financial potential with proven passive income streams and legitimate side hustles.",
    "images": [
      "http://img.b2bpic.net/free-photo/laptop-blank-notepad-paper-money-neon-lighting-top-view_169016-27093.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
