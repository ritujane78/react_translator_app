
import { useState } from "react";
import {languages} from '../languagesData';

const TranslatorApp = ({onClose}) => {
  const [selectedLanguagesFrom, setSelectedLanguagesFrom] = useState("en");
  const [selectedLanguagesTo, setSelectedLanguagesTo] = useState("en");
  const [showLanguages, setShowLanguages] = useState(false);
  const [currentLanguageSelection, setCurrentLanguageSelection] = useState(null);
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const maxChars = 200;
  
  const handleLanguageClick = (type) => {
    setCurrentLanguageSelection(type);
    setShowLanguages(true);
  }
  
  const handleLanguagesSelect = (languageCode) => {
    if(currentLanguageSelection === "from"){
      setSelectedLanguagesFrom(languageCode);
    }else {
      setSelectedLanguagesTo(languageCode);
    }
    setShowLanguages(false);
  }

  const handleSwapLanguages = () => {
    setSelectedLanguagesFrom(selectedLanguagesTo);
    setSelectedLanguagesTo(selectedLanguagesFrom);
  }

  const handleInputChange = (e) => {
    const value = e.target.value;
    if(value.length <= maxChars){
      setCharCount(value.length);
      setInputText(value);
    }
  }
  const handleTranslate = async () => {
    if(!inputText.trim()){
      setTranslatedText("");
      return;
    }
    const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=${selectedLanguagesFrom}|${selectedLanguagesTo}`)
    const data = await response.json();

    setTranslatedText(data.responseData.translatedText)
  }
  const handleKeyDown = (e) => {
    if(e.key === "Enter"){
      e.preventDefault();
      handleTranslate();
    }
  }
  return (
    <div className="w-full flex flex-col gap-y-4 justify-center items-center px-6 sm:px-8 pt-12 pb-6 relative">
        <button className="absolute top-4 right-4" onClick={onClose}>
          <i className="fa-solid fa-xmark text-xl text-gray-300"></i>
        </button>
        <div className="w-full min-h-20 flex justify-center items-center px-4 bg-gradient-to-r from-[#b6f492] to-[#338b93] text-gray-700 rounded-lg">
          <div className="language" onClick={() => handleLanguageClick("from")} >
            {languages[selectedLanguagesFrom] || 'English'}
          </div>
          <i
            className="fa-solid fa-arrows-rotate text-2xl mx-8 cursor-pointer"
            onClick={handleSwapLanguages}
          ></i>
          <div className="language" onClick={() => handleLanguageClick("to")}  >
            {languages[selectedLanguagesTo] || 'English'}
          </div>
        </div>
        {showLanguages && (
          <div className="w-[calc(100%-4rem)] h-[calc(100%-9rem)] bg-gradient-to-r from-[#b6f492] to-[#338b93] absolute top-32 
        left-8 z-10 rounded shadow-lg p-4 overflow-y-scroll scrollbar-hide" >
          <ul>
            {Object.entries(languages).map(([code, name]) => 
            <li className="cursor-pointer transition duration-200 p-2 hover:bg-[#10646b] rounded" key={code} onClick={() => handleLanguagesSelect(code)}>
              {name}
            </li>
            )}
          </ul>
          </div>
          )}
        <div className="w-full relative">
          <textarea
            className="textarea text-gray-200"
            value={inputText || ""} onChange={handleInputChange} onKeyDown={handleKeyDown}
          ></textarea>
          <div className="absolute bottom-2 right-4 text-gray-400">
            {charCount} / {maxChars}
          </div>
        </div>
        <button
          className="w-12 h-12 bg-gradient-to-r from-[#b6f492] to-[#338b93] rounded-full text-2xl text-gray-600 flex justify-center items-center active:translate-y-[1px]"
        >
          <i className="fa-solid fa-chevron-down" onClick={handleTranslate}></i>
        </button>
        <div className="w-full">
          <textarea
            className="textarea text-[#b6f492]"
            value={translatedText || " "} readOnly
          ></textarea>
        </div>
      </div>
    )
  }
  
  export default TranslatorApp