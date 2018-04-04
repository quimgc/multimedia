<template>
    <div>
    <v-btn color="error">btn1</v-btn>
    <v-btn color="blue">btn2</v-btn>
    <v-btn color="green">btn3</v-btn>
    <v-btn color="yellow">btn4</v-btn>
    </div>
</template>

<style scoped>
    div {
        align-content: center;
        align-items: center;
        text-align: center;
        display: flex;
        margin-left: 40%;
        margin-bottom: 45px;
        /*padding-bottom: 10px;*/
    }
</style>

<script>
export default {
  name: 'Multimedia',
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