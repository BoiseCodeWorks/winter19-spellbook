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

//Public
export default class SpellsController {
  constructor() {
    console.log("yo from spellscontroller")
    store.subscribe("spells", _drawSpells);
    store.subscribe("activeSpell", _drawActiveSpell)
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
}
