/*
 * @Date: 2020-11-03 20:39:59
 * @LastEditors: hu.wenjun
 * @LastEditTime: 2020-11-03 21:13:02
 */
import {ref} from 'vue'
import axios, {AxiosResponse} from 'axios';

function useURLLoader<T>(url: string){
  const result = ref<T | null>(null)
  const loading = ref(true)
  const error = ref(null)

  axios.get(url).then((raw) => {
    result.value = raw.data
  }).catch(err => {
    error.value = err
  })
  .finally(() => {
    loading.value = false
  })

  return {
    result,
    loading,
    error
  }
}

export default useURLLoader