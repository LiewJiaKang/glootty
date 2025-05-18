export interface Dictionary {
  navigation: {
    features: string;
    howItWorks: string;
    pricing: string;
    aboutUs: string;
  };
  auth: {
    login: string;
    signup: string;
    email: string;
    password: string;
    name: string;
    createAccount: string;
    signupDescription: string;
    signupWithEmail: string;
    loginWithEmail: string;
    continueWithGoogle: string;
    continueWithApple: string;
    alreadyHaveAccount: string;
    noAccount: string;
    forgotPassword: string;
    or: string;
    emailPlaceholder: string;
    loginDescription: string;
    termsNotice: string;
    termsLink: string;
    and: string;
    privacyLink: string;
  };
  hero: {
    title: {
      part1: string;
      part2: string;
    };
    description: string;
    startLearning: string;
    forTeachers: string;
    mascotAlt: string;
  };
  features: {
    title: string;
    description: string;
    cards: {
      gamified: {
        title: string;
        description: string;
      };
      collaborative: {
        title: string;
        description: string;
      };
      dashboard: {
        title: string;
        description: string;
      };
      ai: {
        title: string;
        description: string;
      };
    };
  };
  howItWorks: {
    title: string;
    description: string;
    steps: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  cta: {
    title: string;
    description: string;
    startLearning: string;
    scheduleDemo: string;
  };
  footer: {
    tagline: string;
    platform: {
      title: string;
      forStudents: string;
      forTeachers: string;
      forSchools: string;
      pricing: string;
    };
    company: {
      title: string;
      aboutUs: string;
      careers: string;
      blog: string;
      contact: string;
    };
    legal: {
      title: string;
      terms: string;
      privacy: string;
      cookies: string;
    };
    copyright: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    popularBadge: string;
    billing: {
      monthly: string;
      yearly: string;
    };
    tiers: {
      free: {
        name: string;
        description: string;
        cta: string;
        features: {
          limitedTasks: string;
          limitedLOR: string;
          basicAnalytics: string;
        };
      };
      pro: {
        name: string;
        description: string;
        cta: string;
        features: {
          unlimitedTasks: string;
          fullLOR: string;
          exportFeatures: string;
          prioritySupport: string;
        };
      };
      school: {
        name: string;
        description: string;
        cta: string;
        features: {
          educatorSeats: string;
          sharedDashboards: string;
          emailCoordination: string;
          proFeatures: string;
        };
      };
    };
    faq: {
      title: string;
      questions: {
        freeTier: {
          question: string;
          answer: string;
        };
        switching: {
          question: string;
          answer: string;
        };
        custom: {
          question: string;
          answer: string;
        };
      };
    };
  };
  aboutUs: {
    title: string;
    subtitle: string;
    creatorDescription: string;
    interests: {
      title: string;
      subtitle: string;
      programming: {
        title: string;
        description: string;
      };
      computerScience: {
        title: string;
        description: string;
      };
      linux: {
        title: string;
        description: string;
      };
    };
    school: {
      title: string;
      name: string;
      description: string;
    };
    team: {
      title: string;
      description: string;
      members: {
        tester: {
          title: string;
          description: string;
        };
        advisor: {
          title: string;
          description: string;
        };
      };
    };
  };
} 