// @ts-ignore
import Store from "../store.js";
import store from "../store.js";
import Spell from "../Models/Spell.js";

// @ts-ignore
let _spellsApi = axios.create({
  baseURL: 'http://bcw-sandbox.herokuapp.com/api/spells',
  timeout:3000
})
// @ts-ignore
let _sandbox = axios.create({
  baseURL: 'http://bcw-sandbox.herokuapp.com/api/class/spells',
  timeout:3000
})


class SpellsService {
  constructor(){
    console.log("yo from spellsService")
    this.getMySpellsAsync()
    
  }
      async selectMySpellAsync(id) {
        let res = await _sandbox.get(id)
        store.commit("activeSpell", new Spell(res.data.data))
        console.log(res.data.data)
      }
  async addSpellAsync() {
    let spell = store.State.activeSpell
    let res = await _sandbox.post("", spell)
    console.log(res)
    console.log(spell)
this.getMySpellsAsync()
  }

 async selectSpellAsync(id) {
let res = await _spellsApi.get(id)
console.log("from selectSpell Service", res)
let description ="" 
res.data.desc.forEach(text => description += text)
res.data.desc = description
console.log(description)
let activeSpell = new Spell(res.data)
Store.commit("activeSpell", activeSpell)
console.log("stores active spell", store.State.activeSpell)
  }


async getSpellsAsync(){
let res = await _spellsApi.get("")
console.log("from get spells", res.data)
Store.commit("spells", res.data)
console.log("spells from store", Store.State.spells)
}
async getMySpellsAsync(){
let res = await _sandbox.get();
store.commit("mySpells", res.data.data.map(s => new Spell(s)))
console.log("my spells", store.State.mySpells)
}


}

const service = new SpellsService();
export default service;
