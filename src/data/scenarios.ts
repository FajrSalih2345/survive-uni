export interface Impact {
  money: number;
  time: number;
  sanity: number;
}

export interface Choice {
  label: string;
  impact: Impact;
}

export interface Scenario {
  id: number;
  description: string;
  choices: Choice[];
}

export const SCENARIOS: Scenario[] = [
  {
    id: 1,
    description: "It's 7:45 AM on a freezing morning, and your attendance-graded lecture starts in 15 minutes. You went to bed at 3:00 AM.",
    choices: [
      {
        label: "Drag yourself out of bed and attend the lecture.",
        impact: { money: 0, time: -2, sanity: -15 }
      },
      {
        label: "Sleep in and grab a $6 vanilla latte later to apologize to your study partner.",
        impact: { money: -6, time: +2, sanity: +10 }
      }
    ]
  },
  {
    id: 2,
    description: "The professor announces a surprise pop quiz on last week's 80-page reading assignment that you haven't opened yet.",
    choices: [
      {
        label: "Guess your way through in 10 minutes and hope for partial credit.",
        impact: { money: 0, time: -1, sanity: -10 }
      },
      {
        label: "Panic-buy a summary study sheet from a classmate for $15.",
        impact: { money: -15, time: -1, sanity: +5 }
      }
    ]
  },
  {
    id: 3,
    description: "You accidentally knock your cup of coffee over onto your laptop keyboard the night before a major assignment is due.",
    choices: [
      {
        label: "Pay the campus tech shop $120 for an emergency same-day repair.",
        impact: { money: -120, time: -3, sanity: -10 }
      },
      {
        label: "Pull an all-nighter in the noisy campus library using public computers.",
        impact: { money: 0, time: -8, sanity: -25 }
      }
    ]
  },
  {
    id: 4,
    description: "Your group project partner hasn't replied to any messages, and the presentation is due tomorrow morning.",
    choices: [
      {
        label: "Do their entire section yourself to guarantee an A grade.",
        impact: { money: 0, time: -6, sanity: -20 }
      },
      {
        label: "Bribe them with a $20 meal delivery order to get them to finish their part.",
        impact: { money: -20, time: -2, sanity: +5 }
      }
    ]
  },
  {
    id: 5,
    description: "The professor insists you buy an official access code & digital textbook bundle required for online homework.",
    choices: [
      {
        label: "Buy the official digital access code bundle for $140.",
        impact: { money: -140, time: 0, sanity: +5 }
      },
      {
        label: "Spend 5 hours searching online forums for pirated PDFs and workarounds.",
        impact: { money: 0, time: -5, sanity: -15 }
      }
    ]
  },
  {
    id: 6,
    description: "Your roommates are ordering $25 takeout at 1:00 AM while cramming for midterms, but your bank account is running low.",
    choices: [
      {
        label: "Join the food order and enjoy late-night comfort food.",
        impact: { money: -25, time: -1, sanity: +15 }
      },
      {
        label: "Munch on dry cereal in your room alone.",
        impact: { money: 0, time: 0, sanity: -10 }
      }
    ]
  },
  {
    id: 7,
    description: "Your boss asks if you can work an extra 8-hour weekend shift at the campus bookstore for extra cash during exam week.",
    choices: [
      {
        label: "Accept the shift and earn $90 extra cash.",
        impact: { money: +90, time: -8, sanity: -15 }
      },
      {
        label: "Decline the shift to focus entirely on studying and rest.",
        impact: { money: 0, time: +4, sanity: +10 }
      }
    ]
  },
  {
    id: 8,
    description: "Everyone is heading to the biggest campus party of the semester, but you have a 2,000-word essay due at midnight.",
    choices: [
      {
        label: "Go to the party for 2 hours, then rush the essay in a panic.",
        impact: { money: -15, time: -4, sanity: +10 }
      },
      {
        label: "Skip the party, order energy drinks, and finish the essay properly.",
        impact: { money: -5, time: -6, sanity: -15 }
      }
    ]
  },
  {
    id: 9,
    description: "You wake up with a pounding headache and a fever right at the start of midterms week.",
    choices: [
      {
        label: "Buy $35 worth of medicine and take a full day off to rest.",
        impact: { money: -35, time: -10, sanity: +15 }
      },
      {
        label: "Chug cold medicine and force yourself to study through the fever.",
        impact: { money: -5, time: -4, sanity: -30 }
      }
    ]
  },
  {
    id: 10,
    description: "It's the night before your final cumulative exam. You can either cram all night or rely on what you already know.",
    choices: [
      {
        label: "Pull an all-nighter with flashcards and espresso shots.",
        impact: { money: -10, time: -7, sanity: -25 }
      },
      {
        label: "Study for 2 hours, get a full 8 hours of sleep, and hope for the best.",
        impact: { money: 0, time: -2, sanity: +15 }
      }
    ]
  }
];
