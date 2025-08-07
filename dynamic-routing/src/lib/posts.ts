import type { Post } from "../types"

const posts: Post[] = [
  {
    id: "a1b2c3d4-e5f6-4789-abcd-ef1234567890",
    slug: "the-great-goose-experiment-begins",
    title: "The Great Goose Experiment Begins",
    content: `Well, folks, it's come to this. The mail delivery out here is, shall we say, "leisurely." So, I've decided to take matters into my own hands, or rather, into the beak of a rather large, opinionated goose I've named "Honk." He's currently eyeing me with suspicion from across the yard, probably wondering if I'm about to offer him another piece of stale bread. The plan is simple: teach Honk to retrieve the mail from the box at the end of the lane. Simple, right? My neighbours, bless their hearts, have already started placing bets on how long this will last. I'm feeling optimistic, though. Honk seems intelligent, in his own honking, waddling way. Wish me luck. I think I'm going to need it. This could be a game-changer for rural living, or just a very loud, feathery disaster.`,
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
    slug: "honk-the-unconventional-guard-goose",
    title: "Honk: The Unconventional Guard Goose",
    content: `While Honk has proven utterly useless at mail retrieval, he has, inadvertently, become quite the formidable guard goose. Any squirrel, rabbit, or even the occasional stray cat that dares to venture too close to the mailbox is met with a barrage of honks, hisses, and a surprisingly swift charge. The neighbourhood kids now take a wide berth around our property. So, I haven't got a mail-goose, but I've got a very effective, albeit loud, deterrent for anyone thinking of tampering with my bills. Perhaps I should pivot his training. Instead of fetching, maybe I can teach him to deliver the bills to the tax office. Now there's an idea.`,
    timestamp: 1721520000000,
  },
  {
    id: "c9d0e1f2-a3b4-4567-2345-789012345678",
    slug: "the-treat-dilemma",
    title: "The Treat Dilemma",
    content: `I've been trying to use treats as a motivator. Turns out, Honk is incredibly picky. He scoffs at plain birdseed, turns his beak up at dried fruit, and only deigns to accept corn if it's freshly shucked. This makes positive reinforcement rather challenging when your trainee has gourmet tastes. I tried offering him a small piece of cheese today, thinking it might be a novel incentive. He sniffed it, then flicked it away with his beak, as if insulted. I'm running out of ideas for what motivates this feathered tyrant. Maybe he's just doing it for the sheer joy of watching me struggle.`,
    timestamp: 1722889200000,
  },
  {
    id: "d0e1f2a3-b4c5-4678-3456-890123456789",
    slug: "winter-is-coming-and-so-is-the-snow",
    title: "Winter is Coming, and So is the Snow",
    content: `The first flakes are falling, and I'm starting to worry about how this mail-goose experiment will fare in the snow. Honk seems quite content waddling through the dusting, but the idea of him trying to locate a small envelope buried under a foot of white powder seems increasingly far-fetched. He'll probably just make snow angels with his wings and then demand a warm bath. My dream of year-round, automated mail delivery via goose is slowly freezing over, much like the puddles in the yard. Perhaps I should invest in a very long stick with a hook on the end for winter.`,
    timestamp: 1730502000000,
  },
  {
    id: "e1f2a3b4-c5d6-4789-4567-901234567890",
    slug: "honk-discovers-the-joys-of-shredding",
    title: "Honk Discovers the Joys of Shredding",
    content: `Today, I left an old phone book near the mailbox, hoping Honk might get curious. He did. Oh, he absolutely did. He spent a good hour tearing pages out, meticulously shredding them into tiny pieces, and then scattering them across the lawn like confetti. The yard now looks like a paper blizzard hit it. While it wasn't mail retrieval, he certainly demonstrated a keen interest in paper products. Perhaps I could train him to be a mobile, eco-friendly paper shredder? It's not mail, but at least it's a useful skill. My wife, however, was less than impressed with the paper-strewn landscape.`,
    timestamp: 1731766800000,
  },
  {
    id: "f2a3b4c5-d6e7-4890-5678-012345678901",
    slug: "a-truce-with-the-goose",
    title: "A Truce with the Goose",
    content: `It's been a few months now, and I've come to a realization. Honk is never going to fetch the mail. He's simply not built for it, or perhaps, he's too smart to fall for my human schemes. However, we've reached a sort of truce. I still walk to the mailbox, but now, Honk often accompanies me, honking a cheerful (I think?) accompaniment. He still stands guard, ensuring no rogue squirrels make off with the newspaper. So, while my grand experiment in avian postal service has failed, I've gained a rather loud, feathered companion. And honestly, that's not so bad.`,
    timestamp: 1741671600000,
  },
]

export default posts
