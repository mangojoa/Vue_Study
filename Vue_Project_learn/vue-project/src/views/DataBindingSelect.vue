<template>
  <div>
      <select v-model="city">
          <option value="02">서울</option>
          <option value="20">부산</option>
          <option value="061">제주</option>
      </select>
  </div>
</template>

<script>
export default {
    data() {
        return {
            city: "061"
        }
    }
}
</script>

<style>

</style>