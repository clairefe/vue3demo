/*
 * @Date: 2020-11-05 13:18:40
 * @LastEditors: hu.wenjun
 * @LastEditTime: 2020-11-05 13:45:40
 */
import {onMounted, onUnmounted, Ref, ref} from 'vue'

function useClickOutside(elementRef: Ref<null | HTMLElement>){
    const isClickOutside = ref(false)

    //导航条dropdown的toggle事件
    const toggleDropdown = (event: MouseEvent) => {
      if(elementRef.value){
        if(elementRef.value.contains(event.target as HTMLElement)){
          isClickOutside.value = false
        }else{
          isClickOutside.value = true
        }
      }
    }

    onMounted(() => {
      document.addEventListener('mousedown', toggleDropdown)
    })

    onUnmounted(() => {
      document.removeEventListener('mousedown', toggleDropdown)
    })

    return {
      isClickOutside
    }
}

export default useClickOutside