import { Note } from "./models/Note.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  notes = [
    new Note({
      title: "4D Vase",
      body: "A Klein bottle is a non-orientable surface, meaning it has no distinct inside or outside. It's often visualized as a 4-dimensional object in 3-dimensional space, featuring a single continuous surface without boundaries. Despite its complex appearance, it's a fundamental concept in topology, challenging our intuitive notions of space and geometry.",
      theme: "#8a2be2",
    }),
    new Note({
      title: "Unicorn Care",
      body: "Unicorns require special rainbow diets rich in mystical nutrients that sustain their ethereal bodies. Their grooming rituals involve enchanted brushes that shimmer with starlight, ensuring their iridescent coats remain luminous. These practices are vital for maintaining their otherworldly beauty and majestic presence in folklore and fantasy realms alike.",
      theme: "#ffccff"
    }),

    new Note({
      title: "Galactic Pizza",
      body: "Delivering pizzas across galaxies demands state-of-the-art warp-speed ovens capable of traversing vast cosmic distances in seconds. The pizzas themselves are crafted with anti-gravity cheese that defies conventional physics, ensuring they remain perfectly intact during their interstellar journey. Such technological marvels redefine the notion of fast food on a universal scale, catering to extraterrestrial tastes with flair.",
      theme: "#ccffff"
    }),

    new Note({
      title: "Dancing Hogs",
      body: "Hedgehogs have unique dance moves that combine whimsical spins with adorable tiny top hats perched jauntily atop their quills. Their rhythmic footwork is a sight to behold, synchronized with delicate twirls that seem straight out of a woodland ballet. These charming performances enchant forest critters and humans alike, showcasing the hedgehog's innate grace and surprising agility in the animal kingdom's dance repertoire.",
      theme: "#ffd699"
    }),

    new Note({
      title: "Sock Diplomacy",
      body: "Sock puppets, once nearly annihilated in a bitter inter-sock conflict, have risen as unparalleled diplomats among toys. Their yarn speeches and button eyes hold a solemn reminder of their past struggles, making them uniquely empathetic envoys in resolving disputes. With skillful negotiations and heartfelt soliloquies, sock puppets navigate the delicate playroom politics, transforming conflicts into opportunities for unity and whimsical reconciliation.",
      theme: "#99ccff"
    }),

  ]

  /**@type {Note} */
  activeNote = null
}

export const AppState = createObservableProxy(new ObservableAppState())