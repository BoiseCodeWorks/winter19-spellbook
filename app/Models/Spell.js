export default class Spell {
    constructor(data) {
        this.name = data.name
        this.id = data.id || data._id
        this.range = data.range
        this.description = data.description || data.desc
        this.level = data.level
        this.duration = data.duration
        this.user = data.user || ""
    }

    get Template() {
        let template = /*html*/`
        <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${this.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${this.level}</h6>
                  <p class="card-text">${this.description}</p>
                  <p>${this.range}</p>`
        if (this.user) {
            template += `<button onclick="app.spellsController.castSpellAsync()">Cast Spell</button>`
        } else {
            template += `<button onclick="app.spellsController.addSpellAsync()">Add Spell</button>`
        }

        template += `</div>
              </div>`
              return template
    }
}