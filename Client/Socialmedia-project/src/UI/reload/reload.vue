<template>
  <div v-if="show">
    <div>reload</div>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
