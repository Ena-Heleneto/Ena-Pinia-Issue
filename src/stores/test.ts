export const useTestStore = defineStore('test', () => {
  const test = ref([
    { label: '测试0', value: 'value-1' },
    { label: '测试1', value: 'value-2' },
    { label: '测试2', value: 'value-3' },
    { label: '测试3', value: 'value-4' },
    { label: '测试4', value: 'value-5' },
    { label: '测试5', value: 'value-6' },
    { label: '测试6', value: 'value-7' },
    { label: '测试7', value: 'value-8' },
    { label: '测试8', value: 'value-9' },
    { label: '测试9', value: 'value-10' },

  ])
  return { test }
}, { persist: true })

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTestStore, import.meta.hot))
