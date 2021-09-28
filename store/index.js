export const state = () => ({
  user: null,
})

export const mutations = {
  init(state, user) {
    state.user = user
  },
  logOut(state) {
    state.user = null
  },
}

export const actions = {
  user({ commit }, user) {
    commit('init', user)
  },
  logOut({ commit }) {
    commit('logOut')
    this.$router.push({ name: 'index' })
  },
}
