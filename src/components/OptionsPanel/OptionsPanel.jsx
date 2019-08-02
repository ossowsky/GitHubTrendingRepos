import React from 'react';
import "./OptionsPanel.scss";


const OptionsPanel = ({ handleLanguageChange, handleOptionChange, selectedInterval, selectedLanguage, sortByStars })=> (
  <div className="optionsPanel">
    <div>
      <input 
        type="radio" 
        id="daily" 
        name="sinceButton" 
        value="daily" 
        onChange={handleOptionChange} 
        checked={selectedInterval === "daily"} 
      />
      <label htmlFor="daily">daily</label>
    </div>
    <div>
      <input 
        type="radio" 
        id="weekly" 
        name="sinceButton" 
        value="weekly" 
        onChange={handleOptionChange} 
        checked={selectedInterval === "weekly"}
      />
      <label htmlFor="weekly">weekly</label>
    </div>
    <div>
      <input 
        type="radio" 
        id="monthly" 
        name="sinceButton" 
        value="monthly" 
        onChange={handleOptionChange} 
        checked={selectedInterval === "monthly"} 
      />
      <label htmlFor="monthly">monthly</label>
    </div>
    <div>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
      <option value="">All</option>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
      </select>
    </div>
    <div>
      <button onClick={sortByStars}>sort by stars asc/desc</button>
    </div>
  </div>  
)


export default OptionsPanel
