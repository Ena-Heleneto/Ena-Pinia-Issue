<script setup lang="ts">
import consola from 'consola'

defineOptions({
  name: 'IndexPage',
})
// const { test } = storeToRefs(useTestStore())
// consola.info(test.value)

const _useTestStore = useTestStore()
const _test = ref(_useTestStore.test)
consola.info(_test.value)

const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
function go() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}

const { t } = useI18n()
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-campsite inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Vitesse
      </a>
    </p>
    <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p>

    <div py-4 />

    <TheInput
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      autocomplete="false"
      @keydown.enter="go"
    />
    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

    <div>
      <button
        m-3 text-sm btn
        :disabled="!name"
        @click="go"
      >
        {{ t('button.go') }}
      </button>
    </div>

    <div py-4>
      <div v-for="item in _test" :key="item.path" class="bg-#2f3542 text-#ced6e0" my-2 h-20px flex items-center py-2>
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
