/**
 * Halcyon content model. This typed object is the single source of truth for
 * everything the site renders — edit it to change the site's content. Example
 * photography is from Unsplash (free under the Unsplash License) — swap the IDs
 * in the IMG map below.
 */

// Unsplash photo IDs, one per image slot. Replace with your own.
const IMG = {
  hero: "1629199159634-28a88785cee5",
  terrace: "1699016915058-39fe0eaf6114",
  swimmingRock: "1779828078188-21b0387c5c51",
  pool: "1744352032313-b89386adbb86",
  boat: "1760340044484-f67b5b1e8acf",
  spa: "1749561532375-c8c50f128d21",
  coastPath: "1759848941549-dead67fa18f7",
  cellarTable: "1691550590727-6f4d146b0d9d",
  roomBedShutters: "1649708509165-2e184b18da0c",
  roomWashstand: "1611596188649-7c8e9507bdb4",
  roomWindowSeat: "1783176336325-e2dcfeeabe8b",
  roomBath: "1763485956343-61b0163a3e7e",
  suiteTerrace: "1672655624218-901ce587020e",
  suiteSitting: "1609081144289-eacc3108cd03",
  roomSeaView: "1721738854631-fd100dbdd0c7",
  gardenDoor: "1771756072878-c085b38e05fa",
  boathouse: "1781491243573-de9067245882",
} as const;

type Slot = keyof typeof IMG;
const u = (id: Slot, w = 1400) =>
  `https://images.unsplash.com/photo-${IMG[id]}?auto=format&fit=crop&w=${w}&q=80`;

export type PageKey = "home" | "rooms" | "suite" | "experience" | "reserve";

export type Suite = {
  n: string;
  type: string;
  m: number;
  s: number;
  rate: number;
  bed: string;
  view: string;
  floor: string;
  image: string;
  caption: string;
  one: string;
  lede: string;
  p1: string;
  p2: string;
  p3: string;
};
export type KV = { k: string; v: string };
export type Experience = {
  no: string;
  t: string;
  d: string;
  meta: string;
  image: string;
};

export const content = {
  brand: "Halcyon",
  folio: "Cala Serena · Est. 2016",
  nav: [
    { key: "home", label: "The Hotel", num: "01" },
    { key: "rooms", label: "Rooms", num: "02" },
    { key: "experience", label: "Experience", num: "03" },
    { key: "reserve", label: "Reserve", num: "04" },
  ] as { key: PageKey; label: string; num: string }[],
  contact: {
    email: "stay@halcyon.example",
    phone: "+34 971 000 000",
    addressLines: ["Camí de la Cala 4", "07460 Cala Serena"],
    reception: "Reception 08:00 — 22:00",
    region: "Cala Serena, Mallorca",
  },

  home: {
    kicker: "Eleven rooms · Mediterranean coast",
    title: "Eleven rooms above a quiet cove.",
    intro:
      "A restored stone house on a slow stretch of the Mediterranean, where the day is measured in shade, salt water and long lunches.",
    heroCaption: "property shot — stone house above the cove, late afternoon",
    place: {
      kicker: "01 — The place",
      heading: "Halcyon means calm, untroubled days.",
      body: [
        "The house was built in 1874 for a family of almond growers and stood empty for thirty years before we found it. We kept the thick walls, the tiled floors worn smooth in the doorways, the fig tree that shades the terrace, and added very little: eleven rooms, a long table, a pool cut into the rock above the cove.",
        "The light arrives white and flat at nine, turns gold by six, and by eight the whole terrace smells of salt and rosemary. Guests tend to plan a great deal on arrival and abandon all of it by the second morning. We consider that the point.",
      ],
      signoff: "Marta & Enric Vidal — innkeepers",
      insetImage: u("terrace", 1100),
      insetCaption: "inset image — the fig tree terrace",
    },
    roomsIntro: {
      kicker: "02 — The rooms",
      heading: "Eleven, all different, none of them large.",
      allLink: "All rooms & rates →",
    },
    amenities: [
      "Sea pool",
      "Breakfast on the terrace",
      "Cellar dinners",
      "Bikes & boat",
      "Spa room",
      "Eleven rooms only",
    ],
    quote: {
      label: "Guest book · June 2026",
      text: "“We came for four nights and stayed nine. Nothing happens at Halcyon, beautifully.”",
      by: "Claire & Tomas H. — The Boathouse",
    },
    ctaHeading: "Reserve your dates.",
    fullbleedCaption: "full-bleed — steps down to the swimming rock",
  },

  rooms: {
    kicker: "Rooms & rates",
    heading: "Eleven rooms, three kinds of morning.",
    intro:
      "Five on the garden level facing the cove, five with terraces under the fig and the almonds, and the Boathouse on the water. Rates are per night for two, including breakfast on the terrace and the sea pool. Minimum two nights in July and August.",
    groups: [
      {
        k: "Cove Rooms",
        type: "Cove Room",
        count: "Five rooms · from €280",
        c: "Garden level, thick walls, hydraulic tile. Cool all day and a minute from the sea pool.",
      },
      {
        k: "Terrace Suites",
        type: "Terrace Suite",
        count: "Five suites · from €400",
        c: "First and second floor, each with a private terrace under the almonds or open to the water.",
      },
      {
        k: "The Boathouse",
        type: "The Boathouse",
        count: "One house · from €680",
        c: "A separate two-bedroom building on the rocks, with its own terrace and steps into the sea.",
      },
    ],
    includes: [
      "Breakfast on the terrace",
      "The sea pool & towels",
      "Lime-washed walls",
      "Linen sheets, changed daily",
      "Tadelakt bathroom",
      "Air conditioning & fan",
      "Fibre wifi throughout",
      "Bicycles on request",
      "Filtered water, still",
      "No television anywhere",
    ],
    includesHeading: "What every room includes.",
  },

  suiteExtras: {
    amenities: [
      "Lime-washed walls",
      "Linen by Society",
      "Tadelakt bathroom",
      "Formentor soap",
      "Ceiling fan & air",
      "Nespresso & kettle",
      "No television",
      "Fibre wifi",
    ],
    galleryLabel: "The room",
    gallery: [
      { label: "the bed at first light", image: u("roomBedShutters", 900) },
      { label: "bathroom, tadelakt and marble", image: u("roomBath", 900) },
      { label: "the window seat", image: u("roomWindowSeat", 900) },
      { label: "terrace, late afternoon", image: u("suiteTerrace", 900) },
    ],
    reserveNote:
      "Two-night minimum · Breakfast included · Free cancellation up to 14 days before arrival",
  },

  experience: {
    kicker: "Experience",
    heading: "Days that arrange themselves.",
    intro:
      "Two meals, one pool, a boat, and a long list of things you are welcome to ignore.",
    dining: {
      kicker: "Dining",
      heading: "Breakfast under the fig, dinner in the cellar.",
      body: [
        "Breakfast is laid out from eight until eleven and no one minds which: bread from the village oven, tomatoes, sheep's cheese, apricots, eggs however you ask. Coffee keeps coming.",
        "Three evenings a week Enric cooks one menu for one table in the old wine cellar — twenty seats, four courses, whatever the boats and the garden gave us that day. Guests eat first; the village fills the rest.",
      ],
      menu: [
        { no: "First", dish: "Almonds, olives, tomato bread" },
        { no: "Second", dish: "Whatever the boats brought, grilled" },
        { no: "Third", dish: "Suckling lamb, or aubergine from the garden" },
        { no: "Last", dish: "Apricots in wine, sheep cheese" },
      ],
      menuNote: "€68 per person · Tuesday, Thursday, Saturday",
      image: u("cellarTable", 1200),
      caption: "image — the cellar table set for twenty",
    },
    experiences: [
      {
        no: "01",
        t: "The sea pool",
        d: "Cut into the rock above the cove and filled from it, eleven metres long, warm by ten. There are seven loungers and we have never needed an eighth.",
        meta: "Open 07:00 — sunset · Towels at the gate",
        image: u("pool", 1200),
      },
      {
        no: "02",
        t: "Boat mornings",
        d: "Enric takes four guests out at eight in the old llaüt, around the point to a cove you cannot walk to, and back for a late breakfast. Bring nothing.",
        meta: "Tuesdays & Fridays · No charge · Ask at reception",
        image: u("boat", 1200),
      },
      {
        no: "03",
        t: "The spa room",
        d: "One room, one therapist, one treatment list of four things. Marisol comes up from the village and works with olive oil, salt and her hands.",
        meta: "By appointment · 60 or 90 minutes · From €95",
        image: u("spa", 1200),
      },
      {
        no: "04",
        t: "Guided walks",
        d: "A three-hour walk along the old smugglers path to the watchtower, leaving before the heat and returning for a swim. Nine kilometres, some scrambling.",
        meta: "Wednesdays 07:30 · Boots advised",
        image: u("coastPath", 1200),
      },
    ] as Experience[],
    gettingHere: {
      kicker: "Getting here",
      heading: "Cala Serena, north coast.",
      travel: [
        { k: "Airport", v: "Palma — 68 km, 55 min" },
        { k: "Nearest town", v: "Pollença — 9 km" },
        { k: "Village", v: "Cala Serena — 1.4 km" },
        { k: "Transfer", v: "Arranged, €95 each way" },
      ],
      note: "We will send a car for you, or meet you at the harbour if you arrive by water. The last kilometre is a dirt road through the almonds; drive it slowly.",
      coords: "39.86°N 3.11°E",
      mapCaption: "map placeholder — coast, village, dirt road",
    },
    nearby: [
      { t: "Es Molí", d: "Village bakery — 1.4 km" },
      { t: "Cala Figuera", d: "Swimming, no road — 40 min walk" },
      { t: "Bodega Ca n'Aixartell", d: "Wine, by appointment — 12 km" },
      { t: "Tuesday market", d: "Pollença old town — 9 km" },
      { t: "Talaia d'Albercutx", d: "Watchtower, sunset — 22 km" },
    ],
  },

  reserve: {
    kicker: "Reserve",
    heading: "Tell us when, and we will hold the room.",
    sent: "Thank you — Marta replies to every request within a day.",
    depositNote:
      "No card is taken here. We reply with a confirmation and a single link to pay a 20% deposit.",
    rates2026: [
      { k: "Cove Rooms", v: "€280 — €310" },
      { k: "Terrace Suites", v: "€400 — €480" },
      { k: "The Boathouse", v: "€680" },
    ],
    ratesNote:
      "Per night for two, breakfast and the sea pool included. Two-night minimum, three in August.",
    writeLabel: "Or simply write",
  },

  footer: {
    tagline: "Eleven rooms above Cala Serena. Open March through November.",
    bottom: ["© 2026 Halcyon · Cala Serena", "Design Hotels member", "Privacy · Terms · Cancellation"],
  },
};

// The eleven suites — order matters (prev/next wraps this array).
export const suites: Suite[] = [
  {
    n: "Serena", type: "Cove Room", m: 26, s: 2, rate: 280, bed: "King or twin", view: "Cove & pines", floor: "Garden level",
    image: u("roomBedShutters", 2000), caption: "Serena — first light, shutters closed against the heat",
    one: "The first room we finished, and still the one we give to people who have not slept properly in months.",
    lede: "A low, white room at the end of the garden corridor, with the cove framed exactly by the window.",
    p1: "Serena sits at the quiet end of the garden level, one step down from the corridor. The walls are lime-washed by hand every spring, so the white has a faint blue in it. The floor is the original hydraulic tile, cool underfoot until late afternoon.",
    p2: "There is a bed, a chair by the window, a marble washstand, and a wardrobe made from the old cellar doors. We resisted adding more. The window faces north-east: you get the sunrise over the water and shade for the rest of the day.",
    p3: "The bathroom is small and entirely tadelakt, with a rain shower and Formentor soap. Steps from the terrace outside the room reach the sea pool in under a minute.",
  },
  {
    n: "Levante", type: "Cove Room", m: 24, s: 2, rate: 280, bed: "Queen", view: "Cove", floor: "Garden level",
    image: u("roomWashstand", 2000), caption: "Levante — the marble washstand at eight in the morning",
    one: "Named for the east wind that arrives most afternoons and leaves by dinner.",
    lede: "The smallest of the cove rooms, and the coolest — the reason regulars ask for it in August.",
    p1: "Levante is tucked behind the stairwell, which keeps it several degrees cooler than the rest of the house. A deep window seat looks straight down the cove.",
    p2: "The bed is a queen with a linen headboard made by a workshop in Pollença. Everything else is honest and old: a rush chair, a mirror with a poor silvering, hooks instead of a wardrobe.",
    p3: "A good room for one person with a stack of books, or two who intend to be outside all day.",
  },
  {
    n: "Migjorn", type: "Cove Room", m: 27, s: 2, rate: 300, bed: "King", view: "Garden & sea", floor: "Garden level",
    image: u("gardenDoor", 2000), caption: "Migjorn — the door left open to the garden all day",
    one: "Doors that open directly onto the herb garden, which smells of rosemary by noon.",
    lede: "The only cove room with its own door to the garden, which most guests never bother to close.",
    p1: "Migjorn faces south, and the light moves across the floor all day. Two glazed doors open onto a private patch of the herb garden with a stone bench and a lemon tree.",
    p2: "Inside: a king bed, a writing table under the window, a ceiling fan we prefer to air conditioning although both are there.",
    p3: "Because of the garden door this room is popular with early swimmers — you can be in the sea pool before anyone else is awake.",
  },
  {
    n: "Tramuntana", type: "Cove Room", m: 28, s: 3, rate: 310, bed: "King + daybed", view: "Mountain & cove", floor: "Garden level",
    image: u("suiteSitting", 2000), caption: "Tramuntana — the daybed, which is where everyone ends up",
    one: "A daybed under the window that has ruined a great many afternoon plans.",
    lede: "The largest cove room, with a deep daybed set into the window and the mountain behind.",
    p1: "Tramuntana takes the corner of the house, so it has windows on two sides: the ridge of the Serra to the west, the cove to the north.",
    p2: "The daybed sleeps a third guest comfortably and is the most-used piece of furniture in the hotel. A king bed, a long table, and a chest of drawers from the original house complete it.",
    p3: "The bathroom has a marble double basin and a shower open to a small light well planted with ferns.",
  },
  {
    n: "Xaloc", type: "Cove Room", m: 25, s: 2, rate: 290, bed: "Queen", view: "Cove", floor: "Garden level",
    image: u("roomWindowSeat", 2000), caption: "Xaloc — late afternoon, the hour the swifts arrive",
    one: "Quiet, plain, and the best room in the house for reading until it goes dark.",
    lede: "A plain room with a very good chair, halfway along the garden corridor.",
    p1: "Xaloc is the least decorated room at Halcyon and, by our own guest book, the most loved. White walls, tiled floor, a queen bed with a linen canopy, and a leather reading chair beside the window.",
    p2: "The window is deep enough to sit in. In the evening the swifts come down the cove in numbers and this is the room to watch them from.",
    p3: "Shower only, tadelakt walls, a window that opens onto the lemon tree.",
  },
  {
    n: "Almond", type: "Terrace Suite", m: 42, s: 2, rate: 420, bed: "King", view: "Almond grove & sea", floor: "First floor",
    image: u("suiteTerrace", 2000), caption: "Almond — the terrace, laid for breakfast at eight",
    one: "A private terrace in the almond grove, with breakfast brought up if you ask.",
    lede: "A first-floor suite opening onto its own terrace under the almonds, with the sea beyond.",
    p1: "Almond is the first of the terrace suites and the one most guests photograph. A pair of glazed doors give onto twenty square metres of private terrace with a stone table, two low chairs and a shade of split cane.",
    p2: "The room itself is generous without being large: a king bed on a raised tiled plinth, a sitting corner with a linen sofa, and a dressing area behind a curtain.",
    p3: "Breakfast can be brought up at any hour before eleven. Most guests take it here on the first morning and on the terrace with everyone else after that.",
  },
  {
    n: "Fig", type: "Terrace Suite", m: 40, s: 2, rate: 420, bed: "King", view: "Courtyard & fig tree", floor: "First floor",
    image: u("terrace", 2000), caption: "Fig — looking down into the courtyard through the branches",
    one: "Set into the branches of the old fig, one floor above the breakfast tables.",
    lede: "The suite in the tree — its window fills entirely with fig leaves from June onward.",
    p1: "Fig looks inward, over the courtyard where breakfast is laid. In summer the tree grows across the window and the room turns green in the middle of the day.",
    p2: "A king bed, a marble desk, and a small terrace on the courtyard side with room for two chairs and a coffee tray.",
    p3: "It is the coolest of the terrace suites and the closest to the cellar, which matters on dinner nights.",
  },
  {
    n: "Olivar", type: "Terrace Suite", m: 45, s: 3, rate: 460, bed: "King + single", view: "Olive terraces", floor: "First floor",
    image: u("suiteTerrace", 2000), caption: "Olivar — the terrace at seven, the hour the light turns",
    one: "The long terrace above the olive terraces, best at seven in the evening.",
    lede: "A wide suite with the longest terrace in the house, looking down the olive terraces to the water.",
    p1: "Olivar runs the width of two rooms of the original house. The terrace is eight metres long, walled in dry stone, with a daybed at one end and a table at the other.",
    p2: "Inside there is a king bed, a single bed in an alcove for a third guest, and a deep armchair. The floor here is the original terracotta, waxed rather than sealed.",
    p3: "A large bathroom with a stone bath and a separate shower, both looking out at the olives through a shuttered window.",
  },
  {
    n: "Carob", type: "Terrace Suite", m: 38, s: 2, rate: 400, bed: "Queen", view: "Garden & hills", floor: "First floor",
    image: u("roomBedShutters", 2000), caption: "Carob — doors open to the hills, mid-morning",
    one: "Facing inland to the hills, so the mornings here are silent and very dark at night.",
    lede: "The quietest suite in the house, turned away from the water and toward the hills.",
    p1: "Carob faces south-west over the garden and the carob trees to the ridge. There is no path on this side of the house, so nothing passes the window.",
    p2: "A queen bed, a pair of woven chairs, a writing table, and a small terrace with a hammock strung between two beams.",
    p3: "Guests who sleep badly at home are usually put here. It is the darkest room at night and the last to catch the sun.",
  },
  {
    n: "Salt", type: "Terrace Suite", m: 46, s: 2, rate: 480, bed: "King", view: "Open sea", floor: "Second floor",
    image: u("roomSeaView", 2000), caption: "Salt — nothing in the window but water",
    one: "The top of the house: nothing in the window but open water.",
    lede: "Under the roof beams on the second floor, with a window that holds only sea.",
    p1: "Salt occupies what was the drying loft. The beams are original chestnut and the ceiling rises to four metres at the ridge. One large window, north-facing, frames the open sea with no land in it.",
    p2: "A king bed set to face the window, a pair of leather chairs, and a small terrace on the leeward side for the hours when the wind is up.",
    p3: "The bathroom is entirely tadelakt with a freestanding stone basin and a shower under a roof light. On clear nights you can see the lighthouse at Formentor blink from the bed.",
  },
  {
    n: "The Boathouse", type: "The Boathouse", m: 62, s: 4, rate: 680, bed: "King + twin room", view: "Water level, the cove", floor: "On the water",
    image: u("boathouse", 2000), caption: "The Boathouse — the door open, the water two metres away",
    one: "A separate stone building at water level, with the sea two metres from the door.",
    lede: "The old boathouse on the rocks, rebuilt as a two-bedroom house of its own.",
    p1: "Sixty steps down from the hotel, the Boathouse stands on the rocks where the fishing skiffs were once winched up. It is a house rather than a room: two bedrooms, a small kitchen, a sitting room with an open fire for spring and autumn, and a terrace cut into the rock.",
    p2: "The main bedroom takes the seaward wall with shutters that open completely. The second is a twin under the roof, good for children or friends travelling together.",
    p3: "Breakfast is brought down in a basket at the hour you ask. The water here is deep enough to swim from the terrace steps, and the hotel is far enough above that you hear none of it.",
  },
];

export const heroImage = u("hero", 2200);
export const swimmingRockImage = u("swimmingRock", 2200);

export type SiteContent = typeof content;
