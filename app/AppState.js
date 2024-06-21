import { Note } from "./models/Note.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  notes = [
    new Note({
      title: 'Buried Treasure',
      body: "A Klein bottle is a non-orientable surface, meaning it has no distinct inside or outside. It's often visualized as a 4-dimensional object in 3-dimensional space, featuring a single continuous surface without boundaries. Despite its complex appearance, it's a fundamental concept in topology, challenging our intuitive notions of space and geometry.",
      theme: '#fdc75c',
    })

  ]
}

export const AppState = createObservableProxy(new ObservableAppState())