// Independently authored items. Same broad learning objectives; difficulty has not been statistically equated.
export const questions = [
  [
    "Could you give me your family name, please?",
    [
      "Do you prefer my first name?",
      "Shall I write it down for you?",
      "What does it mean?"
    ],
    1
  ],
  [
    "The flowers are starting to dry out.",
    [
      "Try giving them a little water.",
      "They're beside the fence.",
      "They grow every spring."
    ],
    0
  ],
  [
    "I hope the journey isn't too long.",
    [
      "It certainly was.",
      "How far did you go?",
      "So do I."
    ],
    2
  ],
  [
    "Will you be ready to leave soon?",
    [
      "For quite a while.",
      "In a few moments.",
      "Not very often."
    ],
    1
  ],
  [
    "Who gave you that new watch, Ben?",
    [
      "Nobody; I paid for it myself.",
      "On my birthday.",
      "My cousin did buy one."
    ],
    0
  ],
  [
    "Shall we watch a film this evening?",
    [
      "I've heard about it.",
      "It was quite interesting.",
      "I'd rather get an early night."
    ],
    2
  ],
  [
    "Do you mind if I join your group?",
    [
      "I'd be pleased to.",
      "Not at all; come over.",
      "I'm not sure whether I can."
    ],
    1
  ],
  [
    "Someone's calling from the hallway.",
    [
      "Go and see what they want.",
      "What can I do for you?",
      "She's busy right now."
    ],
    0
  ],
  [
    "How much flour should I put in the bowl?",
    [
      "I'd like a little.",
      "I'm not certain.",
      "I'll add some."
    ],
    1
  ],
  [
    "How long are you staying with your cousin?",
    [
      "Since last Friday.",
      "Three nights ago.",
      "Until the weekend."
    ],
    2
  ],
  [
    "Have you had enough breakfast?",
    [
      "Could I have another slice of toast?",
      "That's quite all right.",
      "It isn't lunchtime yet."
    ],
    0
  ],
  [
    "That red scarf on the chair is mine.",
    [
      "Are you going to take it off?",
      "No, you didn't.",
      "Here, take it."
    ],
    2
  ],
  [
    "Let's take the train to the coast.",
    [
      "That would take too long.",
      "The bus was crowded.",
      "We can buy tickets."
    ],
    0
  ],
  [
    "Do you know my classmate Oliver?",
    [
      "I'm afraid he's out.",
      "I don't believe I do.",
      "Yes, I know about it."
    ],
    1
  ],
  [
    "Would you like the window open or closed?",
    [
      "I expect so.",
      "Yes, I will.",
      "I don't mind either way."
    ],
    2
  ],
  [
    "The roadworks have ...... serious delays for the buses this morning.",
    [
      "done",
      "made",
      "caused",
      "put"
    ],
    2
  ],
  [
    "Hold the glass firmly so it doesn't ...... out of your hand.",
    [
      "spill",
      "spin",
      "stoop",
      "slip"
    ],
    3
  ],
  [
    "When you visit our flat, ...... your photo album with you.",
    [
      "bring",
      "take",
      "fetch",
      "show"
    ],
    0
  ],
  [
    "We reached the platform ...... as the train doors were opening.",
    [
      "still",
      "even",
      "just",
      "right"
    ],
    2
  ],
  [
    "After such a busy week, I would ...... to spend Sunday at home.",
    [
      "rather",
      "prefer",
      "better",
      "enjoy"
    ],
    1
  ],
  [
    "Don't buy more juice; we've already got ...... of it in the fridge.",
    [
      "plenty",
      "enough",
      "adequate",
      "sufficient"
    ],
    0
  ],
  [
    "Leo says he enjoys his new job, but he's ...... complaining about it.",
    [
      "rarely",
      "sometimes",
      "often",
      "always"
    ],
    3
  ],
  [
    "...... the low beam when you enter the shed.",
    [
      "Mind",
      "Attend",
      "Consider",
      "Look"
    ],
    0
  ],
  [
    "...... use my phone if yours has run out of battery.",
    [
      "At all costs",
      "In all",
      "By all means",
      "On the whole"
    ],
    2
  ],
  [
    "No ...... Mia feels pleased with herself after winning three medals.",
    [
      "problem",
      "question",
      "surprise",
      "wonder"
    ],
    3
  ]
];
export const complete = answers => questions.every((q,i)=>Number.isInteger(answers[i]) && answers[i]>=0 && answers[i]<q[1].length);
export function score(answers){if(!complete(answers)) throw new Error('Incomplete answers');return questions.reduce((sum,q,i)=>sum+Number(answers[i]===q[2]),0);}
