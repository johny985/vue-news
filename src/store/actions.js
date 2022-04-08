import {fetchAsk, fetchJobs, fetchNews} from '../api/index.js'

export default {
  FETCH_NEWS(context) {
    fetchNews()
    .then(res => {
      context.commit('SET_NEWS', res.data)
    })
    .catch(err => console.log(err))
  },
  FETCH_JOBS(context) {
    fetchJobs()
    .then(res => {
      context.commit('SET_JOBS', res.data)
    })
    .catch(err => console.log(err))
  },
  FETCH_ASK(context) {
    fetchAsk()
    .then(res => {
      context.commit('SET_ASK', res.data)
    })
    .catch(err => console.log(err))
  }
}