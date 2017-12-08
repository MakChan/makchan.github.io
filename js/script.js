
$(".navigation-mobile a").click(function() {
  console.log("hey");
  $("div.mdl-layout__drawer").removeClass("is-visible");
  $("div.mdl-layout__obfuscator").removeClass("is-visible");
});