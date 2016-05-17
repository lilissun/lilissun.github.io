// Created by iWeb 3.0.4 local-build-20160517

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,165),url:'Home_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Home_files/stroke_1.png'},{rect:new IWRect(5,-5,126,10),url:'Home_files/stroke_2.png'},{rect:new IWRect(131,-5,11,10),url:'Home_files/stroke_3.png'},{rect:new IWRect(131,5,11,165),url:'Home_files/stroke_4.png'},{rect:new IWRect(131,170,11,10),url:'Home_files/stroke_5.png'},{rect:new IWRect(5,170,126,10),url:'Home_files/stroke_6.png'},{rect:new IWRect(-5,170,10,10),url:'Home_files/stroke_7.png'}],new IWSize(136,175)),shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(0.0000,0.0000),color:'#000000',opacity:0.050000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Home_files/HomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
