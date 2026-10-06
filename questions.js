export const questions = [
["Could you tell me your surname?",["Would you like me to spell it?","Do you like my family name?","How do I say that?"],0],
["This plant looks dead.",["It's in the garden.","It only needs some water.","It's sleeping."],1],
["I hope it doesn't rain.",["Of course not.","Will it be wet?","So do I."],2],
["Are you going to come inside soon?",["For ever.","Not long.","In a minute."],2],
["Who gave you this book, Lucy?",["I bought it.","For my birthday.","My uncle was."],0],
["Shall we go out for pizza tonight?",["I know that.","It's very good.","I'm too tired."],2],
["Do you mind if I come too?",["That's fine!","I'd like to.","I don't know if I can."],0],
["There's someone at the door.",["Can I help you?","Well, go and answer it then.","He's busy at the moment."],1],
["How much butter do I need for this cake?",["I'd like one.","I'll use some.","I'm not sure."],2],
["How long are you here for?",["Since last week.","Ten days ago.","Till tomorrow."],2],
["Have you guys had enough to eat?",["That's all right.","Is there any more rice?","It's not the right time."],1],
["That's my coat over there.",["Will you take it off?","No, you haven't.","Here you are."],2],
["Let's go by bus.",["The train was expensive.","We'll buy a ticket.","It'll take too long."],2],
["Do you know my brother Charlie?",["Sorry, he's not here.","I don't think I do.","I know."],1],
["Would you like some ice in your drink or not?",["I hope so.","Yes, I shall.","I don't mind."],2],
["I hope I haven't ...... you any trouble by changing the arrangements.",["put","caused","made","done"],1],
["The floor is wet: don't run or you might ...... !",["stoop","spill","slip","spin"],2],
["When you come to my house, ...... your camera with you.",["take","show","fetch","bring"],3],
["Paul arrived at the shop ...... as the manager was closing for the day.",["even","just","still","right"],1],
["I would ...... to stay at home and relax for a change.",["rather","better","prefer","enjoy"],2],
["Is there ...... of food for everyone?",["adequate","enough","sufficient","plenty"],3],
["Lily says she's happy at school but she's ...... complaining.",["rarely","sometimes","always","often"],2],
["...... the step when you go in.",["Consider","Mind","Attend","Look"],1],
["...... stay the night if it's too difficult to get home.",["At all costs","By all means","In all","On the whole"],1],
["No ...... Hannah is happy when you think how many prizes she has won recently.",["surprise","problem","question","wonder"],3]
];
export const complete = answers => questions.every((q,i)=>Number.isInteger(answers[i]) && answers[i]>=0 && answers[i]<q[1].length);
export function score(answers){if(!complete(answers)) throw new Error('Incomplete answers');return questions.reduce((sum,q,i)=>sum+Number(answers[i]===q[2]),0);}
