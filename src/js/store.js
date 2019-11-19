var wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export default {
    data: {
        items: [],
        name: ''
    },
    async load() {
        await wait(2000)
        this.data.items = [...new Array(10).fill('Hello')]
        await wait(1000)
        this.test()
        await wait(1500)
        this.name()
    },
    test() {
        console.log('test')
        this.data.items.splice(5, 0, 'HAHAHAHAH')
    },
    name() {
        console.log('name')
        this.data.name = 'Nadia Schutz'
    }
}