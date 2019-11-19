<template>
  <div>
      <p v-text="name"></p>
      <div v-for="(item, index) in items" :key="index">
          <h5 v-text="item"></h5>
      </div>
  </div>
</template>

<script>
    import store from './store'

    export default {
        data() {
            return {
                storeData: ''
            }
        },
        created() {
            this.storeData = store.data
        },
        mounted() {
            store.load()
        },
        computed: {
            items() {
                var { items } = this.storeData
                return items
                    .filter(i => i)
            },
            name() {
                console.log('getting name')
                var { name } = this.storeData
                return name || 'Oh NOOOOOOOOOOOOOOOOOOOOOOOOO'
            }
        }
    }
</script>

<style>

</style>