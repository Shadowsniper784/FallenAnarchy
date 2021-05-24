const rules = {
  fva: '#1 - Effecting the physical integrity of the Realm such as lagging or crashing the Realm, will get you Banned permanently.\n\n#2 - Do not use CBE. This will get you -Banned permanently- from Fallen Anarchy.\n\n#3 - Using/Spawning Unobtainable Mobs/Items is not allowed!!! it can risk breaking the entire game.\n\n#4 - Default enchants only!! and  no KOD Kits!!!\n\n#5 - Breaking bedrock at ~ 0 ~ is Disallowed.',
  fa: '#1 - Effecting the physical integrity of the Realm such as lagging or crashing the Realm, will get you -Banned permanently-.\n\n#2 - Do not use CBE. This will get you -Banned permanently- from Fallen Anarchy.\n\n#3 - Using/Spawning Unobtainable Mobs/Items is not allowed!!! it can risk breaking the entire game.\n\n#4 - The Enchantments listed above 10 are prohibited. → Frost Walker, Looting, Fortune, Depth Strider, Soul Speed, Riptide, Punch, Knockback, and Channeling.\n\n#5 - Breaking bedrock at ~ 0 ~ is -Disallowed'
}

function fva() {
  document.getElementById('rules').innerHTML = rules.fva.replace(/\n/gi, '<br/>')
  console.log('fva')
}
function fa() {
   document.getElementById('rules').innerHTML = rules.fa.replace(/\n/gi, '<br/>')
  console.log('fva')

}