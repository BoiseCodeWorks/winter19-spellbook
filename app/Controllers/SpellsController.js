import SpellsService from "../Services/SpellsService.js";
import store from "../store.js";

//Private
function _drawSpells() {
  let template = ""
  let spells = store.State.spells;
  console.log(spells);
  spells.forEach(s => template += `<li onclick="app.spellsController.selectSpellAsync('${s.id}')"> ${s.name}</li>` )
  document.getElementById("spells").innerHTML = template
}

function _drawActiveSpell(){
  let spell = store.State.activeSpell;
  document.getElementById("active").innerHTML = spell.Template
}

function _drawMySpells(){
  let template = ""
  let spells = store.State.mySpells
  spells.forEach(s=> template += `<li onclick="app.spellsController.selectMySpellAsync('${s.id}')"> ${s.name}</li>`)
  document.getElementById("my-spells").innerHTML = template 
}

//Public
export default class SpellsController {
  constructor() {
    console.log("yo from spellscontroller")
    store.subscribe("spells", _drawSpells);
    store.subscribe("activeSpell", _drawActiveSpell)
    store.subscribe("mySpells", _drawMySpells)
    SpellsService.getSpellsAsync()
  }

  async selectSpellAsync(id){
  try {
  await SpellsService.selectSpellAsync(id)
} catch (error) {
  debugger
  console.error(error)
}
  }

  async addSpellAsync(){
    try {
      await SpellsService.addSpellAsync()
    } catch (error) {
      console.error(error)
    }
  }

  async selectMySpellAsync(id){
    try {
      await SpellsService.selectMySpellAsync(id)
    } catch (error) {
      console.error(error)
    }
  }

  async castMySpellAsync(){
    try {
      await SpellsService.castMySpell()
    } catch (error) {
      console.error(error)
    }
  }
}
