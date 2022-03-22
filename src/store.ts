import { createStore } from 'vuex'

export type State = {
  navigation: string[]
}

// Create a new store instance.
export const store = createStore<State>({
  state() {
    return {
      navigation: []
    }
  },
  mutations: {
    addNavigation: (state: State, payload : {depth: number, name: string}) => {
      const { depth, name } = payload

      // Close menu if you clic when it's open
      if (state.navigation[depth] === name) {
        state.navigation.splice(depth, state.navigation.length - depth);
        return
      }

      if (depth === 0) {
        state.navigation.splice(0, state.navigation.length, name);
      }
      if (depth === 1) {
        if (state.navigation[1]) {
          state.navigation.splice(1, 1, name);
        } else {
          state.navigation.push(name)
        }
      }
      if (depth === 2) {
        if (state.navigation[2]) {
          state.navigation.splice(2, 1, name);
        } else {
          state.navigation.push(name)
        }
      }
    }
  }
})