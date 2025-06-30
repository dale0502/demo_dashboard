<template>
  <div class="window-height window-width row justify-center items-center bg-grey-1">
    <q-card square bordered class="q-pa-lg shadow-10">
      <q-card-section>
        <div class="text-center">
          <div class="text-h4 text-weight-bold q-mb-xl">數據決策系統</div>
        </div>
        <q-form class="q-gutter-md" @submit="handleLogin">
          <q-input
            outlined
            v-model="username"
            type="text"
            label="帳號"
            lazy-rules
            :rules="[val => val && val.length > 0 || '請輸入帳號']"
          />

          <q-input
            outlined
            v-model="password"
            :type="isPwd ? 'password' : 'text'"
            label="密碼"
            lazy-rules
            :rules="[val => val && val.length > 0 || '請輸入密碼']"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <div class="q-mt-lg">
            <q-btn
              type="submit"
              color="primary"
              class="full-width"
              size="lg"
              label="登入"
              :loading="loading"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const username = ref('')
const password = ref('')
const isPwd = ref(true)
const loading = ref(false)

const handleLogin = async () => {
  loading.value = true
  
  // 模擬登入延遲
  setTimeout(() => {
    loading.value = false
    // 直接導向儀表板
    router.push('/dashboard')
  }, 1000)
}
</script>

<style scoped>
.q-card {
  width: 400px;
}
</style>
