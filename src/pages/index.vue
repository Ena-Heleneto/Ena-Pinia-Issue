<script setup lang="ts">
const { test } = storeToRefs(useTestStore())

const _useTestStore = useTestStore()
const _test = ref(_useTestStore.test)
</script>

<template>
  <div h-full w-full flex justify-between gap-10 p-4>
    <div flex-1>
      <h1 class="text-#2f3542">
        使用storeToRefs
      </h1>
      <div v-for="item in test" :key="item.value" my-2 p-2 class="bg-#2f3542">
        {{ item.label }}
      </div>
    </div>
    <div flex-1>
      <h1 class="text-#2f3542">
        使用ref
      </h1>
      <div v-for="item in _test" :key="item.value" my-2 p-2 class="bg-#2f3542">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>
