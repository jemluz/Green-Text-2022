import Vue from 'vue'

export const userKey = '__gt_user'
export const baseApiUrl = 'http://localhost:3000'

export function showError(e : any) {
  if (e && e.response && e.response.data) {
    // Vue.toasted.global.defaultError({ msg: e })
    console.log(e)
  } else if (typeof e === 'string') {
    // Vue.toasted.global.defaultError({ msg: e })
  } else {
    // Vue.toasted.global.defaultError()
  }
}

export default { baseApiUrl, showError }