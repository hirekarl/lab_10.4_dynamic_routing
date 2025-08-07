import type { Post } from "../types"

const posts: Post[] = [
  {
    id: "a1b2c3d4-e5f6-4789-abcd-ef1234567890",
    slug: "the-great-goose-experiment-begins",
    title: "The Great Goose Experiment Begins",
    content: `Well, folks, it’s come to this. The mail delivery out here is, shall we say, "leisurely." So, I've decided to take matters into my own hands, or rather, into the beak of a rather large, opinionated goose I've named 'Honk'. He's currently eyeing me with suspicion from across the yard, probably wondering if I'm about to offer him another piece of stale bread. The plan is simple: teach Honk to retrieve the mail from the box at the end of the lane. Simple, right? My neighbours, bless their hearts, have already started placing bets on how long this will last. I'm feeling optimistic, though. Honk seems intelligent, in his own honking, waddling way. Wish me luck. I think I'm going to need it. This could be a game-changer for rural living, or just a very loud, feathery disaster.`,
    timestamp: 1715770200000,
  },
  {
    id: "b2c3d4e5-f6a7-4890-bcde-f12345678901",
    slug: "day-one-of-training-honk-a-challenge",
    title: "Day One of Training Honk: A Challenge",
    content: `So, day one. I tried the classic "fetch" method. Threw a stick, Honk looked at it, then looked at me, then honked derisively and waddled off to peck at some grass. Clearly, sticks are beneath him. I then tried using a rolled-up newspaper, thinking it might resemble mail. Same result, only this time he actually hissed at the newspaper. It seems Honk has strong opinions about what he will and will not retrieve. The dog down the road, Buster, watched the whole thing with a look of profound canine pity. I'm starting to think Honk might be more of a "guard the mail from me" type of goose than a "fetch the mail for me" type. This is going to be harder than I thought.`,
    timestamp: 1715865000000,
  },
  {
    id: "c3d4e5f6-a7b8-4901-cdef-123456789012",
    slug: "honk-prefers-puddles-to-parcels",
    title: "Honk Prefers Puddles to Parcels",
    content: `Another glorious morning attempting to instill a sense of postal duty in Honk. Today's strategy involved placing a dummy letter near a puddle, hoping his natural inclination towards water might lead him to the "mail." Instead, he just splashed around in the puddle, got absolutely soaked, and then shook himself vigorously, spraying me with muddy water. The letter remained untouched, floating serenely in the puddle. I'm beginning to suspect Honk views this whole exercise as a new form of entertainment for him, specifically at my expense. My boots are now squelching, and I smell faintly of wet goose. At least the puddle got some use, I suppose.`,
    timestamp: 1716045000000,
  },
  {
    id: "d4e5f6a7-b8c9-4012-def0-234567890123",
    slug: "a-small-victory-or-just-a-crumb",
    title: "A Small Victory (or Just a Crumb)?",
    content: `Today, something almost happened. I put a piece of dried corn inside a small, empty envelope. I tossed it gently towards Honk. He waddled over, sniffed it, then, to my utter astonishment, picked up the envelope! My heart soared! "He's got it!" I yelled. Then he promptly tore the envelope open, ate the corn, and dropped the shredded paper. So, technically, he "retrieved" the envelope, but only for its edible contents. Not quite the mail-fetching service I had in mind. Still, it's progress, right? Maybe I just need to find a way to make the actual mail more appealing. Perhaps a stamp made of birdseed?`,
    timestamp: 1716397200000,
  },
  {
    id: "e5f6a7b8-c9d0-4123-ef01-345678901234",
    slug: "the-mailman-is-confused",
    title: "The Mailman is Confused",
    content: `My mailman, bless his patient soul, asked me today if I'd "acquired a new guard dog." I explained, somewhat sheepishly, that Honk was actually in training to be a mail-goose. He just stared at me for a long moment, then slowly shook his head and handed me my bills. Apparently, Honk had spent the entire time the mail truck was approaching honking loudly and puffing himself up, effectively blocking the path to the mailbox. He seems to interpret "mail" as "intruder" rather than "item to be collected." This is proving to be a significant hurdle in the training process. I need to work on the "friendly retrieval" aspect.`,
    timestamp: 1717616400000,
  },
  {
    id: "f6a7b8c9-d0e1-4234-f012-456789012345",
    slug: "honks-new-favorite-toy-my-hat",
    title: "Honk's New Favorite Toy: My Hat",
    content: `I was demonstrating the proper way to pick up a letter today, using my old fishing hat as a prop. I tossed it, expecting Honk to ignore it, but instead, he charged! He snatched the hat right off the ground, shook it violently, and then proceeded to run around the yard with it, honking triumphantly. It took me a good ten minutes to coax it back from him. My hat is now slightly damp and smells faintly of pond water. It seems Honk is more interested in retrieving personal items than official correspondence. Perhaps I should try attaching the mail to my hat? No, that's probably a terrible idea.`,
    timestamp: 1718485800000,
  },
  {
    id: "a7b8c9d0-e1f2-4345-0123-567890123456",
    slug: "a-moment-of-hope-then-poof",
    title: "A Moment of Hope, Then Poof!",
    content: `Today was almost the day. I swear, it was. I had Honk sitting relatively still near the mailbox. I placed a letter just outside. He looked at it. He tilted his head. He took a step. Another step. He was so close! I held my breath. Then, a butterfly fluttered by. And just like that, Honk forgot all about the mail, darting off in pursuit of the winged insect, honking excitedly. The letter remained where it was, mocking me. It's moments like these that make me question my life choices. Is it really so bad to walk fifty feet to the mailbox? Maybe. But the principle of the thing!`,
    timestamp: 1719946800000,
  },
  {
    id: "b8c9d0e1-f2a3-4456-1234-678901234567",
    slug: "honks-first-retrieval-a-miracle",
    title: "Honk's First Retrieval: A Miracle!",
    content: `You won't believe it, folks. After months of frustration, it happened! I tossed a rolled-up flyer towards the mailbox, and Honk, without hesitation, waddled over, picked it up, and brought it directly to my feet! No shredding, no detours, just pure, unadulterated mail retrieval. My jaw hit the floor. He looked at me with an almost smug expression, as if to say, "Took you long enough, human." This is a game-changer! The mailman nearly fainted when he saw Honk confidently bringing him a package this morning. We're on the cusp of something truly revolutionary here.`,
    timestamp: 1722889200000,
  },
  {
    id: "c9d0e1f2-a3b4-4567-2345-789012345678",
    slug: "the-legend-of-honk-grows",
    title: "The Legend of Honk Grows",
    content: `Word has spread, and Honk is becoming quite the local celebrity. People are driving by just to witness the "mail goose" in action. He's not just fetching our mail now; he's developed an uncanny ability to sort it, too. Bills go in one pile, flyers in another, and anything with a picture of corn gets a special honk of approval. Even the postal service sent a representative to observe his unique talents. They called him "an asset to rural delivery." I'm starting to think my little experiment has gone far beyond just getting my own mail.`,
    timestamp: 1730502000000,
  },
  {
    id: "d0e1f2a3-b4c5-4678-3456-890123456789",
    slug: "honk-goes-national",
    title: "Honk Goes National!",
    content: `It's official! Honk's innovative approach to mail delivery has caught the attention of Canada Post. They've invited him (and me, of course) to Ottawa for a demonstration. Apparently, they're looking for new, efficient ways to handle remote deliveries, and Honk's natural aptitude is exactly what they need. I never thought my stubborn goose would be a pioneer in postal logistics, but here we are. He's even got a little custom-made satchel now, though he mostly just carries it in his beak. The future of Canadian mail might just be feathered!`,
    timestamp: 1731766800000,
  },
  {
    id: "e1f2a3b4-c5d6-4789-4567-901234567890",
    slug: "from-pond-to-parliament-honks-appointment",
    title: "From Pond to Parliament: Honk's Appointment!",
    content: `The news is out, and I'm still reeling. After a series of highly successful demonstrations and a surprisingly eloquent honk-filled presentation, Honk has been appointed the Postmaster General of Canada! Yes, you read that right. My goose. The one who used to hiss at newspapers. He's now in charge of the entire national postal service. They say his unique perspective on efficiency and his unwavering dedication to "honking down" delivery times will revolutionize the industry. I'm just a simple man from rural Canada, but I always knew Honk had a special something. This is truly an honour for him, and for all geese everywhere!`,
    timestamp: 1741671600000,
  },
  {
    id: "f2a3b4c5-d6e7-4890-5678-012345678901",
    slug: "life-with-the-postmaster-general",
    title: "Life with the Postmaster General",
    content: `Life's certainly changed since Honk took office. He's got a dedicated team of human assistants, a custom-built, goose-friendly office in Ottawa (complete with a small pond), and his portrait hangs proudly in the Canada Post headquarters. He still visits the farm regularly, though, often bringing official documents for me to sign with his beak. His leadership has seen unprecedented improvements in mail efficiency across the country. Who knew a goose could inspire such change? I'm just proud to have been a small part of his incredible journey. Long live Postmaster General Honk!`,
    timestamp: 1743000000000,
  },
]

export default posts
