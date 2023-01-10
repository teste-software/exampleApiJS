class Client {
    ids = Array.from(Array(10), (_, i) => '' + (i + 1))
    getId(id) {
        if (this.ids.includes(id)) return 'existe';
        return 'n existe';
    }
}

module.exports = Client;
