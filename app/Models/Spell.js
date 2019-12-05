export default class Spell {
    constructor(data) {
        this.name = data.name
        this.id = data.id || data._id
        this.range = data.range
        this.desc = data.desc
        this.level = data.level

    }

    get Template() {
        return `
        <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${this.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${this.level}</h6>
                  <p class="card-text">${this.desc}</p>
                  <p>${this.range}</p>
                  <button>Add Spell</button>
                </div>
              </div>`
    }
}