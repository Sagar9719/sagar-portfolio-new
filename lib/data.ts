export const site = {
  name: "Sagar Singh",
  role: "Senior Android & iOS Developer",
  roles: [
    "Senior Android Developer",
    "iOS & Cross-Platform (KMP/CMP)",
    "Full Stack Developer",
    "Freelancer",
  ],
  location: "Noida, India",
  email: "sagarsingh162003@gmail.com",
  phone: "+91 8077966340",
  whatsapp: "https://wa.me/918077966340",
  tel: "tel:+918077966340",
  github: "https://github.com/Sagar9719",
  linkedin: "https://linkedin.com/in/sagar-singh16/?skipRedirect=true",
  url: "https://sagarsingh.dev",
  tagline:
    "I build scalable Android & iOS apps, realtime communication systems and modern web experiences.",
  about: [
    "I'm a mobile-first engineer who loves building products that solve real-world problems. Over the past 2.5+ years I've shipped scalable Android applications, real-time communication systems and live streaming platforms used by hundreds of thousands of users.",
    "My core is native Android (Kotlin, Jetpack Compose), extended into iOS and cross-platform work with Kotlin Multiplatform and Compose Multiplatform — plus a working overview of the full stack: backend, web and cloud.",
    "I enjoy architecting applications, writing clean code, solving hard engineering problems and building products from scratch. I'm passionate about modern technologies, AI, system design and exceptional user experiences — and I'm available for freelance projects.",
  ],
  stats: [
    { value: 2.5, suffix: "+", label: "Years Experience", decimals: 1 },
    { value: 20, suffix: "+", label: "Projects Shipped", decimals: 0 },
    { value: 100, suffix: "K+", label: "Users Impacted", decimals: 0 },
  ],
};

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Android",
    items: [
      "Kotlin", "Java", "Jetpack Compose", "XML", "MVVM", "Clean Architecture",
      "MVI", "Hilt", "Koin", "Coroutines", "Flow", "LiveData", "Room",
      "Retrofit", "Firebase", "WorkManager", "Navigation", "Paging",
      "CameraX", "Media3", "ExoPlayer",
    ],
  },
  {
    title: "iOS & Cross-Platform",
    items: [
      "Swift", "SwiftUI", "Kotlin Multiplatform (KMP)",
      "Compose Multiplatform (CMP)", "SQLDelight",
    ],
  },
  {
    title: "Realtime",
    items: [
      "WebRTC", "LiveKit", "MediaSoup", "Socket.IO",
      "Live Streaming", "Video Calling", "Agora SDK",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js", "Express", "NestJS", "REST APIs", "WebSocket",
      "Socket.IO", "JWT", "PostgreSQL", "MongoDB", "Redis",
    ],
  },
  {
    title: "Web",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Cloud & Tools",
    items: [
      "Firebase", "AWS Basics", "Supabase", "Git", "GitHub",
      "Android Studio", "Xcode", "VS Code", "Postman", "Figma",
    ],
  },
];

export const marqueeStack = [
  "Kotlin", "Jetpack Compose", "Swift", "SwiftUI", "KMP", "WebRTC", "LiveKit",
  "MediaSoup", "Socket.IO", "Node.js", "Next.js", "TypeScript", "Firebase",
  "PostgreSQL", "Redis", "Coroutines", "Hilt", "Room", "ExoPlayer",
];

export type TimelineItem = {
  company: string;
  role: string;
  period: string;
  points: string[];
};

export const experience: TimelineItem[] = [
  {
    company: "Creative Frenzy Pvt. Ltd.",
    role: "SDE-1 · Android Developer",
    period: "Aug 2025 — Present",
    points: [
      "Led migration from legacy communication architecture to LiveKit — audio/video calling and realtime party rooms.",
      "Built a complete ultra-low-latency live streaming solution on MediaSoup + WebRTC.",
      "Architected revenue-impacting features (dynamic Free Tag system, in-house realtime games, AI party theme generator), lifting engagement by ~22%.",
      "Migrated SQLite to Room and built plug-and-play international payments via Hyper Checkout — new gateways without app releases.",
      "Resolved 32+ legacy crashes and cut overall crash rate by ~28%.",
    ],
  },
  {
    company: "Greenhorn Wellness (Eloelo)",
    role: "SDE-1 · Android Developer",
    period: "May 2024 — Aug 2025",
    points: [
      "Built and scaled a creator Community platform in Jetpack Compose, growing participation by ~25%.",
      "Shipped realtime multiplayer Ludo with Agora (audio) + Pusher (live reactions), boosting engagement ~20%.",
      "Redesigned onboarding across 12 A/B variants — login-to-activation conversion up ~18%.",
      "Launched chat monetization via realtime virtual gifting, increasing gifting activity by ~30%.",
      "Migrated Home, Audio and Games modules from XML to Compose, cutting UI boilerplate ~35%.",
    ],
  },
  {
    company: "Greenhorn Wellness (Eloelo)",
    role: "SDE Intern · Android Developer",
    period: "Dec 2023 — May 2024",
    points: [
      "Enhanced the chat product, driving a 50% increase in user engagement.",
      "Integrated the Sheep Fight game with Agora realtime audio and Pusher emoji reactions (+20% engagement).",
      "Designed a modular MoEngage analytics system using the proxy pattern for centralized event triggering.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  accent: string;
};

export const projects: Project[] = [
  {
    title: "Live Streaming Platform",
    description:
      "Complete live streaming platform with ultra-low latency — SFU media routing, adaptive publishing and realtime signaling at scale.",
    tech: ["MediaSoup", "WebRTC", "Socket.IO", "Android"],
    accent: "from-brand-indigo to-brand-blue",
  },
  {
    title: "LiveKit Integration",
    description:
      "Migrated a production social app to LiveKit — audio/video calling, party rooms, seat management and resilient realtime communication.",
    tech: ["LiveKit", "WebRTC", "Kotlin", "Coroutines"],
    accent: "from-brand-blue to-brand-cyan",
  },
  {
    title: "Android App Architecture",
    description:
      "Migrated a legacy codebase to Clean Architecture + MVVM with modular layers — dramatically better maintainability and testability.",
    tech: ["Clean Architecture", "MVVM", "Hilt", "Kotlin"],
    accent: "from-brand-violet to-brand-indigo",
  },
  {
    title: "Realtime Communication",
    description:
      "Realtime messaging, notifications and live event pipelines built on Socket.IO — reliable delivery under high concurrency.",
    tech: ["Socket.IO", "WebSocket", "Node.js", "Redis"],
    accent: "from-brand-cyan to-brand-violet",
  },
];

export const services = [
  {
    title: "Android Development",
    items: ["Native Android Apps", "Modern UI (Compose)", "Architecture", "API Integration", "Performance Optimization"],
  },
  {
    title: "iOS & Cross-Platform",
    items: ["SwiftUI Apps", "Kotlin Multiplatform", "Compose Multiplatform", "Shared Business Logic"],
  },
  {
    title: "Backend Development",
    items: ["REST APIs", "Realtime Backend", "Node.js", "Express", "NestJS"],
  },
  {
    title: "Web Development",
    items: ["Next.js", "React", "Landing Pages", "Business Websites", "Portfolio Websites"],
  },
  {
    title: "UI/UX Design",
    items: ["Wireframes", "Design Systems", "Modern Interfaces", "App Design"],
  },
  {
    title: "Consulting",
    items: ["Architecture Review", "Code Review", "Performance Optimization", "Startup Consulting"],
  },
];

export const freelanceBadges = [
  "Android Development", "iOS Development", "Web Development", "Backend",
  "UI Design", "MVP Development", "Startup Consulting", "API Integration",
  "Live Streaming", "Video Calling",
];
