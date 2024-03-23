function dnaStrand(dna) {
  return dna
    .split("")
    .map((d) => (d === "A" ? "T" : d === "T" ? "A" : d === "C" ? "G" : "C"))
    .join("");
}
console.log(dnaStrand("ATTCG"));

//   ################--Best Practice--################
// function DNAStrand(dna) {
//   return dna.replace(/./g, function(c) {
//     return DNAStrand.pairs[c]
//   })
// }

// DNAStrand.pairs = {
//   A: 'T',
//   T: 'A',
//   C: 'G',
//   G: 'C',
// }
