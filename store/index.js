export const state = () => ({
  loggedIn: false,
  user: null,
})

export const mutations = {
  init(state, user) {
    state.user = user
    state.loggedIn = true
  },
  logOut(state) {
    state.user = null
    state.loggedIn = false
  },
}

export const actions = {
  async submitForm({ commit }, form) {
    const response = await fetch(
      'https://login-opdracht.365werk.workers.dev/login',
      {
        method: 'POST',
        body: JSON.stringify(form),
      }
    ).then((response) => response.json())
    commit('init', response)
    this.$router.push({ name: 'user' })
  },
  logOut({ commit }) {
    commit('logOut')
    this.$router.push({ name: 'index' })
  },
}
