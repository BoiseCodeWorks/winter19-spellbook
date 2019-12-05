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
 async selectSpellAsync(id) {
let res = await _spellsApi.get(id)
console.log("from selectSpell Service", res)
let activeSpell = new Spell(res.data)
Store.commit("activeSpell", activeSpell)
console.log("stores active spell", store.State.activeSpell)
  }
constructor(){
  console.log("yo from spellsService")
}

async getSpellsAsync(){
let res = await _spellsApi.get("")
console.log("from get spells", res.data)
Store.commit("spells", res.data)
console.log("spells from store", Store.State.spells)
}


}

const service = new SpellsService();
export default service;
