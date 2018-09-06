<template>
  <div class="admin_permission">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    permission: {
      type: [String, Number],
      default: 0
    },
    resource: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
