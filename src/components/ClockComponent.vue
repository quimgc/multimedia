<template>
   <div>
        <h1>Aprenent</h1>
   </div>
</template>

<style scoped>
    div {
        display: flex;
        align-content: center;
        justify-content: center;
    }
</style>

<script>
export default {
  name: 'Clock',
  data () {
    return {
      data: 'example'
    }
  },
  mounted () {
    console.log('Mounted ok')
  }
}
</script>