import {fileNumber_To_Text} from './Number_To_Text/Number_To_Text.js'
import {Number_to_text} from './index_translate.js'

//0 ENG
//1 SPA
var currentLanguage = '0'

function change_currentLanguage(elem) {
  currentLanguage = Number(elem.srcElement.lang)
  document.querySelector('#lbl_numberToText').textContent = Number_to_text[currentLanguage]
}

function NumberToText(elem){
  let valNum = document.querySelector('#ti_ntt').value
  let lang = elem.srcElement.lang
  let ntt = fileNumber_To_Text(valNum,lang)
  document.querySelector('#lbl_numberToText').textContent = Number_to_text[currentLanguage] + ': ' + ntt
}

document.querySelector('#try_numbertotextsp').addEventListener('click', NumberToText)
document.querySelector('#try_numbertotexten').addEventListener('click', NumberToText)
document.querySelector('#changeLanguageEng').addEventListener('click', change_currentLanguage)
document.querySelector('#changeLanguageSpa').addEventListener('click', change_currentLanguage) 