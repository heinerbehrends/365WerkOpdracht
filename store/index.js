export const state = () => ({
  loggedIn: false,
  user: null,
  isPending: false,
  error: null,
})

export const mutations = {
  togglePending(state) {
    state.isPending = !state.isPending
  },
  init(state, user) {
    state.user = user
    state.loggedIn = true
  },
  error(state, error) {
    state.error = error
  },
  logOut(state) {
    state.user = null
    state.loggedIn = false
  },
}

export const actions = {
  async submitForm({ commit }, form) {
    commit('togglePending')
    const response = await fetch(
      'https://login-opdracht.365werk.workers.dev/login',
      {
        method: 'POST',
        body: JSON.stringify(form),
      }
    )
      .then((response) => {
        commit('togglePending')
        if (response.status !== 200) {
          commit('error', response.status)
          throw new Error(response.status)
        }
        return response.json()
      })
      .catch((error) => console.error(error))
    if (typeof response === 'undefined') return
    commit('error', null)
    commit('init', response)
    this.$router.push({ name: 'user' })
  },
  logOut({ commit }) {
    commit('logOut')
    this.$router.push({ name: 'index' })
  },
}
