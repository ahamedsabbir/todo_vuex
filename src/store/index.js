import { createStore } from 'vuex'

const localStoragePlugin = store => {

  const savedContact = localStorage.getItem('contacts')
  if (savedContact) {
    store.commit('mutSet', JSON.parse(savedContact))
  }
  store.subscribe((mutation, state) => {
    if (mutation.type === 'mutSet' || mutation.type === 'mutInsert' || mutation.type === 'mutDelete' || mutation.type === 'mutUpdate') {
      localStorage.setItem('contacts', JSON.stringify(state.contacts))
    }
  })

}

export default createStore({
  state() {
    return {
      contacts: []
    }
  },
  mutations: {
    mutSet(state, data) {
      state.contacts = data;
    },
    mutInsert(state, data) {
      state.contacts.push(data)
    },
    mutDelete(state, id) {
      state.contacts = state.contacts.filter(contact => contact.id !== id)
    },
    toggleStatus(state, id) {
      const contact = state.contacts.find(contact => contact.id === id)
      if (contact) {
        contact.status = !contact.status
      }
    },
    mutUpdate(state, data){
      const index = state.contacts.find(contact => contact.id === data.id)
      if (index !== -1) {
        state.contacts[index] = data
      }
    }
  },
  actions: {
    actSet({ commit }, data) {
      commit('mutSet', data)
    },
    actInsert({ commit }, data) {
      commit('mutInsert', data)
    },
    actDelete({ commit }, id) {
      commit('mutDelete', id)
    },
    actStatus({ commit }, id) {
      commit('toggleStatus', id)
    },
    actUpdate({ commit }, data) {
      commit('mutUpdate', data)
    }
  },
  getters: {
    allContact: state => state.contacts,
    totalContact: state => state.contacts.length
  },
  plugins: [localStoragePlugin]
})