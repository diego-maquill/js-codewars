function compare(s1, s2) {
  if (s1===null || s2===null || s1.replace(/[^\w]/g,'')==="" || s2.replace(/[^\w]/g,'')==="") return true
  s1TotalValue = 0
  s2TotalValue = 0

  s1.split('').map ( s => {s1TotalValue += s.toUpperCase().charCodeAt(0)})
  s2.split('').map ( s => {s2TotalValue += s.toUpperCase().charCodeAt(0)})

  console.log(s1TotalValue, s2TotalValue)
  if (s1TotalValue===s2TotalValue) return true
  return false
}

//charCodeAt

console.log(compare("AD", "BC"))
// const {expect,to} = require("chai");

// it("should handle basic comparison", function() {
//   expect(compare("AD", "BC")).to.eql(true)
//   expect(compare("AD", "DD")).to.eql(false)
//   // assert.strictEqual(compare("AD", "BC"), true);
//   // assert.strictEqual(compare("AD", "DD"), false);
// })

// it("should handle edge cases", function() {
//   expect(compare("zz1", "")).to.eql(true)
// })

// it("should handle special characters", function() {
//   expect(compare("!!","7476")).to.eql(true)
// })