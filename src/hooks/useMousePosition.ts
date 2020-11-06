/*
 * @Date: 2020-11-03 20:32:10
 * @LastEditors: hu.wenjun
 * @LastEditTime: 2020-11-03 20:33:35
 */
import {ref, onMounted, onUnmounted} from 'vue'

function useMousePosition(){
    const x = ref(0)
    const y = ref(0)

    const updateMouse = (e: MouseEvent) => {
      x.value = e.pageX
      y.value = e.pageY
    }

    onMounted(() => {
      document.addEventListener('mousedown', updateMouse)
    })

    onUnmounted(() => {
      document.removeEventListener('mousedown', updateMouse)
    })

    return {
      x, y
    }
}

export default useMousePosition