import {
  BookOpen,
  Brain,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Flame,
  Gamepad2,
  Gauge,
  Layers,
  ListChecks,
  MessageSquare,
  Mic,
  MessageCircleOff,
  Route,
  Sparkles,
  Swords,
  Target,
  Trophy,
  Users,
  Wallet,
  Zap,
} from 'lucide-react'

export const content = {
  nav: {
    cta: 'Join the waitlist',
  },
  hero: {
    badge: 'AI interview coach',
    headline: 'Get hired for real.',
    subheadline:
      'Practise with an AI HR interviewer that reads your resume, the job description and the company, then gives you a detailed report and a plan to improve.',
    cta: 'Join the waitlist',
    note: 'Free for students. Early members get first access.',
    scorecard: {
      title: 'Interview scorecard',
      subtitle: 'Mock HR round • Product Analyst',
      overall: '82/100',
      items: [
        { label: 'Content', score: 86 },
        { label: 'Structure', score: 80 },
        { label: 'Communication', score: 84 },
        { label: 'Confidence', score: 78 },
      ],
    },
  },
  problem: {
    eyebrow: 'The problem',
    title: 'Why interview prep fails most people',
    description: 'Most prep tools are not built around you, the role, or the real interview.',
    items: [
      {
        icon: Wallet,
        title: 'Mock interviews are expensive',
        description: 'Real mock interviews are costly, hard to book and rarely tailored to the specific job.',
      },
      {
        icon: Layers,
        title: 'Generic question banks',
        description: "They don't reflect what a given company actually asks.",
      },
      {
        icon: MessageCircleOff,
        title: 'No honest feedback',
        description: 'Candidates rarely hear how they speak, such as their structure, confidence and clarity.',
      },
      {
        icon: Clock3,
        title: 'Practice feels like a chore',
        description: 'So most people give up after a few attempts.',
      },
    ],
  },
  howItWorks: {
    eyebrow: 'How it works',
    title: 'How the AI HR interviewer works',
    steps: [
      {
        number: '1',
        title: 'Share your context',
        description:
          'Upload your resume, paste the job description and choose the company, role and type of interview you want to practise.',
      },
      {
        number: '2',
        title: 'Face a realistic HR round',
        description:
          'The AI asks role-specific questions by voice or text, follows up on your answers like a real interviewer and adapts the difficulty as you go.',
      },
      {
        number: '3',
        title: 'Get a report and a plan',
        description:
          'A scorecard on content, structure, communication and confidence, with model answers, what to fix and personalised drills.',
      },
    ],
  },
  practiceArena: {
    eyebrow: 'Practice Arena',
    title: 'The Practice Arena: AI-powered skill activities',
    description: 'Practise every part of the hiring process, not just the interview.',
    items: [
      {
        icon: Mic,
        title: 'Mock HR Interview',
        description:
          'Full interview simulations built around your resume, the role and the company, ending with a detailed scorecard.',
        featured: true,
      },
      {
        icon: BookOpen,
        title: 'Storytelling Practice',
        description:
          'Answer "Tell me about a time when..." with clear, memorable stories that follow a situation, action and result.',
      },
      {
        icon: Users,
        title: 'GD Round Simulator',
        description:
          'Join a group discussion with AI participants and practise entering the conversation, building on points and staying on topic.',
      },
      {
        icon: CheckCircle2,
        title: 'GD Conclusion Challenge',
        description:
          'Listen to a discussion, then deliver a sharp closing summary, scored on how well you capture the key points.',
      },
      {
        icon: Zap,
        title: 'Quick-Fire Answers',
        description:
          'Short, timed rounds of common HR questions such as "Why us?" and "What are your weaknesses?" to build fluency.',
      },
      {
        icon: Brain,
        title: 'Aptitude Rounds',
        description:
          'Quantitative, logical and verbal practice that adapts to your level, with step-by-step explanations.',
        tag: 'Next',
      },
    ],
  },
  gamification: {
    eyebrow: 'Gamified',
    title: 'Gamified so practice sticks',
    description: 'Small wins every day make it easier to keep showing up.',
    items: [
      { icon: Sparkles, title: 'Points and levels', description: 'Earn XP every session and level up.' },
      { icon: Flame, title: 'Daily streaks', description: 'Small daily goals that build a habit.' },
      { icon: Trophy, title: 'Badges', description: 'Unlock milestones like "GD Closer".' },
      { icon: Swords, title: 'Leagues', description: 'Friendly weekly leaderboards.' },
      { icon: Route, title: 'Skill path', description: 'A guided map from beginner to job-ready.' },
      { icon: CalendarCheck, title: 'Challenges', description: 'Fresh themed tasks every day.' },
    ],
  },
  underTheHood: {
    eyebrow: 'Under the hood',
    title: 'Under the hood, in plain words',
    items: [
      { term: 'Conversation engine', description: 'Large language models play the interviewer and the GD participants.' },
      { term: 'Voice engine', description: 'Speech-to-text hears your answers, text-to-speech speaks back.' },
      { term: 'Context engine', description: 'Uses your resume, the job description and the company profile.' },
      { term: 'Evaluation engine', description: 'Scores content, structure, clarity, pace and filler words.' },
      { term: 'Progress engine', description: "Tracks your skills, powers XP and streaks, and suggests what's next." },
    ],
  },
  whoWhy: {
    who: {
      title: "Who it's for",
      items: [
        'Students and freshers',
        'Early-career job switchers',
        'College placement cells',
        'Training institutes',
      ],
    },
    why: {
      title: "Why it's different",
      items: [
        'Tailored to the job and company',
        'All hiring rounds in one place',
        'Honest and specific feedback',
        'Fun enough to do every day',
      ],
    },
  },
  vision: {
    title: 'Interview readiness for everyone.',
    text:
      "We want to make interview readiness available to everyone, not just those who can afford coaching, so every candidate walks into the real interview feeling like they've done it before.",
    button: 'Join the waitlist',
  },
  waitlist: {
    eyebrow: 'Join the waitlist',
    title: 'Be first in line when we launch.',
    description: "Drop your details and we'll let you know when HiredFr is ready for you.",
    subject: 'New HiredFr waitlist signup',
    submit: 'Join the waitlist',
    submitting: 'Joining...',
    successTitle: "You're on the list!",
    successMessage: "Thanks for signing up. We'll email you when HiredFr launches.",
    errorMessage: 'Something went wrong. Please try again.',
    consent: "We'll only email you about HiredFr launch updates.",
    fields: {
      fullName: { label: 'Full name', placeholder: 'Alex Johnson', required: 'Please enter your full name.' },
      email: {
        label: 'Email',
        placeholder: 'you@university.edu',
        required: 'Please enter your email address.',
        invalid: 'Please enter a valid email address.',
      },
      college: { label: 'College/University', placeholder: 'State University', required: 'Please enter your college or university.' },
      year: {
        label: 'Year of study',
        placeholder: 'Select your year',
        required: 'Please select your year of study.',
        options: ['1st', '2nd', '3rd', '4th', 'Graduated'],
      },
      major: { label: 'Field/Major', placeholder: 'Computer Science', optional: '(optional)' },
      help: {
        label: 'What do you want help with most?',
        placeholder: 'Select an option',
        required: 'Please select what you want help with.',
        options: ['Finding internships', 'Resume/portfolio', 'Interview prep', 'Getting noticed by recruiters'],
      },
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions, answered.',
    items: [
      {
        question: 'Who is HiredFr for?',
        answer: 'Students, freshers, early-career job switchers, and placement cells or training institutes.',
      },
      {
        question: 'How does the AI interview work?',
        answer:
          'You share your resume, the job description and the company. The AI runs a realistic interview by voice or text and gives you a scorecard and plan.',
      },
      {
        question: 'Is it free?',
        answer: 'Free for students on the waitlist. Early members get first access.',
      },
      {
        question: 'What can I practise besides interviews?',
        answer: 'Group discussions, storytelling, quick-fire HR questions, and soon aptitude rounds.',
      },
      {
        question: 'Do I need to speak out loud?',
        answer: 'No. You can practise by voice or text.',
      },
      {
        question: 'When do you launch?',
        answer: "Join the waitlist and we'll email you as soon as early access opens.",
      },
    ],
  },
  footer: {
    tagline: 'AI interview coach for everyone.',
    site: 'hiredfr.com',
    email: 'hello@hiredfr.com',
    copyright: `© ${new Date().getFullYear()} HiredFr. All rights reserved.`,
  },
}
