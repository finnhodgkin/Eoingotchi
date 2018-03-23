var magicWand = ['pAPaYAWHiP', 'PalEVIOLeTReD', 'LIGhTSALMON', 'fiREbRIcK','moCCasIN', 'FucHSIa', 'slATebLUE', 'lAWNgREen', 'daRKSeAGrEEn', 'TEal', 'paLeTURqUOIse', 'doDGERBLue', 'bISQuE', 'laVENDeRBLUsh', 'rOSYbrOWn', 'MedIUmSLaTEblUE', 'orchiD']
var shirty = document.getElementById("SHIRTY")
var linedrawingtool = shirty.getContext("2d")

document.getElementById('otherotherstripe').style.backgroundColor = otherotherstripe



var makeMagic_happen = function() {
  var otherotherstripe = magicWand[Math.floor(Math.random() * magicWand.length)]
  linedrawingtool.fillRect(0, 0, 300, 300)


  linedrawingtool.fillStyle = otherotherstripe
  var otherstripe = Math.floor((Math.random() * 20) + 5)
  var stripe = magicWand[Math.floor(Math.random() * magicWand.length)]
  for(i=0;i<300;i+=(otherstripe*2)){
    linedrawingtool.beginPath()
    linedrawingtool.strokeStyle= stripe
    linedrawingtool.moveTo(i,0)
    linedrawingtool.lineTo(i,300)
    linedrawingtool.lineWidth = otherstripe
    linedrawingtool.stroke()
  }
}

makeMagic_happen()
makeMagic_happen()

document.getElementById('magic').addEventListener('click', makeMagic_happen)
document.getElementById('magic2').addEventListener('click', function(){
  var cig = document.getElementById('cig')
  if(document.getElementsByClassName('cig_magic').length){
    return cig.classList.remove("cig_magic")
  }
  cig.style.display = "inline"
  cig.classList.add("cig_magic")
})
document.getElementById('magic3').addEventListener('click', function(){
  var blankie = document.getElementById('blankie')
  blankie.classList.toggle('blankieOff')

})

document.getElementById('magic4').addEventListener('click',function(){
    var bringcoffe = document.getElementById('coffe')
    document.getElementById('cup').style.display="block";
    bringcoffe.classList.toggle('coffe')
})