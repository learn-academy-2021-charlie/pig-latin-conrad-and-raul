import React, { Component } from 'react'
import './App.css'
import butcherPig from './assets/butcherPig.jpeg'

class App extends Component{
  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // "phrase" is the text entered by the user - right now there are test words hard coded to make the process of testing your code faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: "",
      // "phraseTranslated" is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the "submit" button
      phraseTranslated: "This is where your translated sentence will appear."
    }
  }

  // The "myPigLatinCodeHere" function is where you will put your logic to convert the sentence entered by the user to Pig Latin

  myPigLatinCodeHere = () => {
    // the variable "userInput" will contain the text input from the user modified into an array of words
    // no need to change this variable
    let userInput = this.state.phrase.split(" ")
    console.log("userInput:", userInput)

    // now that we have an array of words, we can map over the array and access each word
    let translatedWordsArray = userInput.map(currentWord => {
      // ACTION ITEM: use "currentWord" as a starting point for your code
      console.log("currentWord:", currentWord)

      let vowelsArray = currentWord.split("").filter(vowel => {
        return vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"
      })
      console.log("vowelsArray:", vowelsArray)

      // your code here!

      let pigLatin = "way"
      let pigLatinConsonants = "ay"

      // alpha -> alphaway
      if (currentWord[0] === "a" || currentWord[0] === "e" || currentWord[0] === "i" || currentWord[0] === "o" || currentWord[0] === "u") {
        return currentWord + pigLatin
      } 
      
      // squeal -> ealsquay
      // queen -> eenquay
      for (let i = 0; i < currentWord.length; i++) {
        if (currentWord.charAt(i) === "q") {
          let qu = currentWord.charAt(i) + currentWord.charAt(i+1)
          let afterQu = currentWord.substring(i+2)
          let beforeQu = currentWord.slice(0, i)
          return afterQu + beforeQu + qu + pigLatinConsonants
        }
      }

      // through -> oughthray
      for (let i = 0; i < currentWord.length; i++) {
        if (currentWord.charAt(i) === "a" || currentWord.charAt(i) === "e" || currentWord.charAt(i) === "i" || currentWord.charAt(i) === "o" || currentWord.charAt(i) === "u") {
          let firstVowel = currentWord.charAt(i)
          let afterVowel = currentWord.substring(i+1)
          let beforeVowel = currentWord.slice(0, i)
          var newWord = firstVowel + afterVowel + beforeVowel + pigLatinConsonants
          return newWord
          }
        }

        // fry -> yfray
        for (let i = 0; i < currentWord.length; i++) {
          if (currentWord.charAt(i) === "y") {
            let afterVowel2 = currentWord.slice(0, i)
            return "y" + afterVowel2 + pigLatinConsonants
            }
          }
      // Remember: console.log is your friend :)


      // ACTION ITEM: change the value of currentWord to the name of whatever variable you made containing your Pig Latin'd word
      return currentWord
    })


    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // the setState method will take your information from "translatedWords" and update the state object that is displayed to the user
    // no need to change this method
    this.setState({phraseTranslated: translatedWords})
  }

  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: "alpha through yummy squeal queen fry",
      phraseTranslated: "This is where your translated sentence will appear."
    })
  }

  // no need to modify this method
  setUpPreventDefault = (e) => {
    // this method prevents React from refreshing the page unnecessarily
    e.preventDefault()
    this.myPigLatinCodeHere()
  }

  // no need to modify this method
  handleInput = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    this.setState({phrase: e.target.value})
  }

  render(){
    return(
      <>
        <h1>Pig Latin Translator</h1>
        {/* <img
          src={butcherPig}
          alt="pig with butcher cut names in pig latin"
          className="butcherPig"
        /> */}
        <div className="inputArea">
          <h4>Enter phrase to be translated:</h4>
          {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
          <input
            type="text"
            className="userInput"
            onChange={this.handleInput}
            value={this.state.phrase}
          />
          <br />
          {/* button that called the setUpPreventDefault method which calls the myPigLatinCodeHere method */}
          <button onClick={this.setUpPreventDefault}>Submit</button>
          <button onClick={this.restartGame}>Clear</button>
        </div>
        <p>{this.state.phraseTranslated}</p>
        <footer>Coded by Conrad and Raul</footer>
      </>
    )
  }
}

export default App
