// Independently authored items. Same broad learning objectives; difficulty has not been statistically equated.
export const questions = [
["The receptionist asks: 'How do you spell your last name?'",["It's my favourite name.","It's R-O-S-S.","My brother is twelve."],1],
["'My phone won't turn on.'",["Try charging it first.","It's next to the window.","I like its colour."],0],
["'I hope our team wins today.'",["It's over there.","You're welcome.","So do I."],2],
["'When will you be ready to leave?'",["At the bus stop.","In about five minutes.","For three kilometres."],1],
["'Did someone give you that new backpack?'",["No, I paid for it myself.","It was last Saturday.","Only on school days."],0],
["'Would you like to play tennis after class?'",["The lesson starts at nine.","That racket belongs to Ben.","Sorry, I need to finish my homework."],2],
["'Is it OK if I sit beside you?'",["I sat there yesterday.","Of course. This seat is free.","The chair is made of wood."],1],
["'The kitchen timer is ringing.'",["Please switch it off for me.","I bought it yesterday.","I enjoy cooking."],0],
["'How much milk should I add to the soup?'",["That's my favourite bowl.","I don't know. Let's check the recipe.","At half past seven."],1],
["'How long are you staying at the campsite?'",["I arrived yesterday.","Since Monday morning.","Until Friday evening."],2],
["'Would you like another sandwich?'",["Yes, please. I'm still hungry.","The table is near the door.","I usually eat at noon."],0],
["'Could you pass me the blue pencil, please?'",["I drew a picture yesterday.","I like blue best.","Certainly. Here it is."],2],
["'Why don't we walk to the sports centre?'",["I think it's too far to walk.","Those shoes belong to me.","I walked home yesterday."],0],
["'Have you met our new neighbour, Mr Green?'",["He's wearing a coat.","I don't think we've met.","The house has two floors."],1],
["'Would you prefer the window seat or the aisle seat?'",["I travelled last month.","The plane is quite large.","Either is fine with me."],2],
["The roadworks have ...... serious delays for the buses this morning.",["done","made","caused","put"],2],
["Hold the glass firmly so it doesn't ...... out of your hand.",["spill","spin","stoop","slip"],3],
["We're meeting in my classroom. Please ...... your notebook here when you come.",["bring","take","fetch","show"],0],
["We reached the platform ...... as the train doors were opening.",["still","even","just","yet"],2],
["On rainy afternoons, my sister ...... to read indoors instead of playing outside.",["enjoys","prefers","rather","better"],1],
["Don't buy more juice; we've already got ...... of it in the fridge.",["plenty","enough","adequate","sufficient"],0],
["Leo says he never loses things, but he's ...... asking me to help him find his keys.",["rarely","never","hardly","always"],3],
["...... your head as you walk through that low doorway.",["Watch","Attend","Consider","Look"],0],
["'May I borrow your dictionary?' 'By all ...... . It's on the shelf.'",["costs","ways","means","sides"],2],
["It's no ...... that Eva knows the city so well; she has lived here for twenty years.",["problem","question","doubt","wonder"],3]
];
export const complete = answers => questions.every((q,i)=>Number.isInteger(answers[i]) && answers[i]>=0 && answers[i]<q[1].length);
export function score(answers){if(!complete(answers)) throw new Error('Incomplete answers');return questions.reduce((sum,q,i)=>sum+Number(answers[i]===q[2]),0);}
