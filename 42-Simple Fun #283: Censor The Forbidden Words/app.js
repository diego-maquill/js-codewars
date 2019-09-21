function censorThis(text, forbiddenWords) {
  forbiddenWords.map( word => {
    text = text.replace(new RegExp(`\\b${word}\\b`,'gi'), new Array(word.length+1).join('*'))
  })
  return text
}

console.log( censorThis("The cat does not like the fire",["cat","fire"]) )
// "The *** does not like the ****")

console.log( censorThis("The cat does not like the therapy",["the","like"]) )
// "*** cat does not **** *** therapy")

console.log( censorThis("Javascript is the BEST programming language and LOLCODE is the Worst",["worst","best"]) )
// "Javascript is the **** programming language and LOLCODE is the *****")

console.log( censorThis("A bald eagle is a worthy adversary",["bald","a"]) )
// "* **** eagle is * worthy adversary")

console.log( censorThis("The MAGIC words are fiz buzz and plaf",[]) )
// "The MAGIC words are fiz buzz and plaf")

console.log( censorThis("The MAGIC words are fiz buzz and plaf",["fluzz","z","ping","narf","tedd","troz","zort"]) )
// "The MAGIC words are fiz buzz and plaf")