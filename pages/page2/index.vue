<template>
  <div class="container">
    <ModuleA v-if="isStoreExist" />
  </div>
</template>

<script>

export default {
  name: 'page2',
  components: {
    ModuleA: () => import('moduleA')
  },
  computed: {
    isStoreExist() {
      return this.$store.hasModule('moduleA')
    }
  }
}
</script>
