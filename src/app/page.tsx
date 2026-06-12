"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { CheckCircle, DollarSign, Eye, Lightbulb, Pocket, ShieldCheck, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSmallSizeLargeTitles"
        background="grid"
        cardStyle="gradient-radial"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "Featured",
          id: "#featured",
        },
        {
          name: "Why Trust Us",
          id: "#trust",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Social",
          id: "#footer",
        },
      ]}
      brandName="The Digital Worthy"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      title="Stop Leaving Money on the Table."
      description="I test the best passive income streams so you don’t have to."
      testimonials={[
        {
          name: "Sarah J.",
          handle: "@PassivePro",
          testimonial: "The Digital Worthy helped me find my first legitimate passive income source. The detailed reviews saved me so much time!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-showing-ok-sign_23-2148990150.jpg",
          imageAlt: "Sarah J.",
        },
        {
          name: "Mark C.",
          handle: "@SideHustleKing",
          testimonial: "Finally, a transparent resource for side hustles. I appreciate the honest testing and clear guidance.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg",
          imageAlt: "Mark C.",
        },
        {
          name: "Emily R.",
          handle: "@EarnEasy",
          testimonial: "I was skeptical, but The Digital Worthy delivered! Started earning passively within a week.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-working-home-office_329181-14578.jpg",
          imageAlt: "Emily R.",
        },
        {
          name: "David L.",
          handle: "@DigitalDreamer",
          testimonial: "This site is a game-changer for anyone serious about digital earnings. Highly recommend!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-posing-outdoor_23-2148883562.jpg",
          imageAlt: "David L.",
        },
        {
          name: "Jessica M.",
          handle: "@WealthBuilder",
          testimonial: "Thanks to The Digital Worthy, I've diversified my income streams and feel more secure financially.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-black-woman-with-afro-curls-hairstylesmiling-model-yellow-hoodiesexy-carefree-female-enjoying-listening-music-wireless-headphonesposing-street-background-sunset_158538-21028.jpg",
          imageAlt: "Jessica M.",
        },
      ]}
      buttons={[
        {
          text: "Start Earning $5 Now",
          href: "#featured",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/user-profile-sign-icon-front-side-with-white-background_187299-40018.jpg",
          alt: "User 1",
        },
        {
          src: "http://img.b2bpic.net/free-vector/women-avatar-collection_24908-60284.jpg",
          alt: "User 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/top-view-pills-circle_23-2148530903.jpg",
          alt: "User 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-pretty-blonde-slavic-woman-sun-glasses-looking-camera-olive-green_141793-69702.jpg",
          alt: "User 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-texting-her-phone-with-chat-bubbles_23-2151989422.jpg",
          alt: "Woman texting on her phone with chat bubbles",
        },
      ]}
      avatarText="Join our community of earners"
      imageSrc="http://img.b2bpic.net/free-photo/laptop-blank-notepad-paper-money-neon-lighting-top-view_169016-27093.jpg"
      imageAlt="Laptop with digital currency and passive income graphs"
      marqueeItems={[
        {
          type: "text-icon",
          text: "Vetted Opportunities",
          icon: CheckCircle,
        },
        {
          type: "text-icon",
          text: "Effortless Earnings",
          icon: DollarSign,
        },
        {
          type: "text-icon",
          text: "Community Approved",
          icon: Users,
        },
        {
          type: "text-icon",
          text: "Financial Freedom",
          icon: Pocket,
        },
        {
          type: "text-icon",
          text: "Transparent Reviews",
          icon: Eye,
        },
      ]}
    />
  </div>

  <div id="featured" data-section="featured">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "honeygain",
          title: "Honeygain: Claim Your $5 Starting Bonus",
          tags: [
            "Passive Income",
            "Easy Earning",
            "Vetted",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/laptop-dollar-bills-color-background-flat-lay_169016-24506.jpg",
          imageAlt: "Honeygain app screenshot",
          buttons: [
            {
              text: "Claim Your $5 Starting Bonus",
              href: "https://join.honeygain.com/TIEFLE7BF9",
            },
          ],
        },
      ]}
      title="Unlock Passive Earnings with Honeygain"
      description="Discover how to effortlessly earn by sharing your unused internet bandwidth. Simple, secure, and genuinely passive income opportunity vetted by The Digital Worthy."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "300+",
          title: "Strategies Vetted",
          items: [
            "In-depth research",
            "Hands-on testing",
            "Data-driven analysis",
          ],
        },
        {
          id: "m2",
          value: "$100k+",
          title: "Community Earnings",
          items: [
            "Verified by users",
            "Consistent payouts",
            "Growing monthly",
          ],
        },
        {
          id: "m3",
          value: "95%",
          title: "Satisfaction Rate",
          items: [
            "Positive feedback",
            "Reliable opportunities",
            "Dedicated support",
          ],
        },
      ]}
      title="Real Results, Real Impact"
      description="See the proven success of strategies I've tested and validated to help you grow your digital worth."
    />
  </div>

  <div id="trust" data-section="trust">
      <AboutMetric
      useInvertedBackground={true}
      title="Why Trust The Digital Worthy?"
      metrics={[
        {
          icon: ShieldCheck,
          label: "Transparent Reviews",
          value: "100%",
        },
        {
          icon: Lightbulb,
          label: "Rigorous Testing",
          value: "Every Method",
        },
        {
          icon: Lightbulb,
          label: "Legitimate Only",
          value: "Zero Scams",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Alice Johnson",
          role: "Marketing Manager",
          company: "GrowthForge",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-senior-businessman-pointing-with-finger_1262-3108.jpg",
          imageAlt: "Alice Johnson",
        },
        {
          id: "2",
          name: "Bob Williams",
          role: "Freelance Developer",
          company: "CodeFlow",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-satisfied-happy-young-man-glasses-working-cafe-sitting-coworking-space-with-laptop-showing-thumbs-up-like-approve-smth-good-chatting-giving-online-lessons_1258-314620.jpg",
          imageAlt: "Bob Williams",
        },
        {
          id: "3",
          name: "Carol Davis",
          role: "E-commerce Entrepreneur",
          company: "ShopSmart",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-woman-taking-selfie_23-2149103090.jpg",
          imageAlt: "Carol Davis",
        },
        {
          id: "4",
          name: "Daniel Brown",
          role: "Financial Analyst",
          company: "InvestEdge",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/mobile-colleagues_1098-14113.jpg",
          imageAlt: "Daniel Brown",
        },
        {
          id: "5",
          name: "Eve White",
          role: "Content Creator",
          company: "CreativeFlow",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-attractive-caucasian-smiling-woman_93675-134352.jpg",
          imageAlt: "Eve White",
        },
      ]}
      title="What Our Community Says"
      description="Hear from real people who have started their journey to financial freedom with The Digital Worthy."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq1",
          title: "What is passive income?",
          content: "Passive income refers to earnings derived from a venture in which one is not actively involved. It's often contrasted with earned income, which requires active participation.",
        },
        {
          id: "faq2",
          title: "Are these side hustles legitimate?",
          content: "Absolutely. The Digital Worthy rigorously tests and vets every opportunity to ensure it's legitimate, safe, and has real earning potential. We prioritize transparency and legality.",
        },
        {
          id: "faq3",
          title: "How quickly can I start earning?",
          content: "Earning timelines vary by opportunity. Some platforms offer immediate small bonuses, while others build up over time. Our goal is sustainable, long-term digital worth.",
        },
        {
          id: "faq4",
          title: "Do I need prior experience?",
          content: "Many of the passive income streams and side hustles we feature require no prior experience. We provide resources for beginners and experienced earners alike.",
        },
        {
          id: "faq5",
          title: "Is my data safe with these platforms?",
          content: "We only recommend platforms with strong security and privacy policies. We encourage users to always review terms and conditions themselves, but we prioritize secure options.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about passive income, side hustles, and how The Digital Worthy can help you."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "glowing-orb",
      }}
      tag="Join The Movement"
      title="Ready to Unlock Your Digital Worth?"
      description="Join our community to discover proven passive income strategies and legitimate side hustles. Your financial freedom starts here."
      buttons={[
        {
          text: "Get Started Today",
          href: "#hero",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="The Digital Worthy"
      columns={[
        {
          title: "Navigation",
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "Featured",
              href: "#featured",
            },
            {
              label: "Why Trust Us",
              href: "#trust",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/TheDigitalWorthy",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/TheDigitalWorthy",
            },
            {
              label: "YouTube",
              href: "https://youtube.com/TheDigitalWorthy",
            },
          ],
        },
      ]}
      copyrightText="© 2024 The Digital Worthy. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
