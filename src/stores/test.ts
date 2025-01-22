export const useTestStore = defineStore('test', () => {
  const test = [
    { name: '流程推算', path: '/workflow', icon: 'i-carbon:buoy' },
    { name: '项目跟踪', path: '/tracking', icon: 'i-carbon:buoy' },
    { name: '项目跟踪2', path: '/tracking3', icon: 'i-carbon:buoy' },
    { name: '项目跟踪3', path: '/tracking3', icon: 'i-carbon:buoy' },
    { name: '项目跟踪4', path: '/tracking4', icon: 'i-carbon:buoy' },
    { name: '项目跟踪5', path: '/tracking4', icon: 'i-carbon:buoy' },
    { name: '项目跟踪6', path: '/tracking4', icon: 'i-carbon:buoy' },
    { name: '项目跟踪7', path: '/tracking4', icon: 'i-carbon:buoy' },
    { name: '项目跟踪8', path: '/tracking4', icon: 'i-carbon:buoy' },
  ]
  return { test }
}, { persist: {
  storage: sessionStorage,
} })

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTestStore, import.meta.hot))
