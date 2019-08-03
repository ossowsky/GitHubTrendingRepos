import React from 'react';
import "./OptionsPanel.scss";


const OptionsPanel = ({ handleLanguageChange, handleOptionChange, selectedInterval, selectedLanguage, sortByStars })=> (
  <div className="optionsPanel">
    <section className="optionsPanel__section">
      <h3 className="section__title">interval</h3>
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
    </section>
    <section className="optionsPanel__section">
    <h3 className="section__title">language</h3>
    <div>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
      <option value="">all</option>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
      </select>
    </div>
    </section>
    <section className="optionsPanel__section">
    <h3 className="section__title">sort</h3>
    <div>
      <button onClick={sortByStars}>sort</button>
    </div>
    </section>
  </div>  
)


export default OptionsPanel
