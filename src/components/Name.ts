export default {
  data() {
    return {
      name: 'vue3 + ts + vite'
    }
  },
  methods: {
    change(name:string) {
      this.name = name;
    }
  },
}