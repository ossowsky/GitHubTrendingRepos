import React from 'react';
import PropTypes from 'prop-types';
import "./OptionsPanel.scss";


const OptionsPanel = ({ 
  handleLanguageChange, 
  handleOptionChange, 
  languages,
  selectedInterval, 
  selectedLanguage, 
  sortByStars 
}) => (
  <div className="optionsPanel">
    <section className="optionsPanel__section">
      <h3 className="section__title">interval</h3>
      <div>
        <div className="option">
          <input 
            defaultChecked={selectedInterval === "daily"} 
            className="option__input"
            id="daily" 
            name="sinceButton" 
            onChange={handleOptionChange} 
            type="radio" 
            value="daily" 
          />
          <label className="option__label" htmlFor="daily">daily</label>
        </div>
        <div className="option">
          <input 
            defaultChecked={selectedInterval === "weekly"}
            className="option__input"
            id="weekly" 
            name="sinceButton" 
            onChange={handleOptionChange} 
            type="radio" 
            value="weekly" 
          />
          <label className="option__label" htmlFor="weekly">weekly</label>
        </div>
        <div className="option">
          <input 
            defaultChecked={selectedInterval === "monthly"} 
            className="option__input"
            id="monthly" 
            name="sinceButton" 
            onChange={handleOptionChange} 
            type="radio" 
            value="monthly" 
          />
          <label className="option__label" htmlFor="monthly">monthly</label>
        </div>
      </div>
    </section>
    <section className="optionsPanel__section">
      <h3 className="section__title">language</h3>
      <div>
        <select className="section__select select" onChange={handleLanguageChange} value={selectedLanguage}>
        {languages && languages.map(({ id, name }) =>
          <option className="section__option" key={id} value={id}>{name}</option>
        )}
        </select>
      </div>
    </section>
    <section className="optionsPanel__section">
      <h3 className="section__title">sort by stars</h3>
      <div>
        <button className="section__button" onClick={sortByStars}>&#8693;</button>
      </div>
    </section>
  </div>  
)

OptionsPanel.propTypes = {
  handleLanguageChange: PropTypes.func, 
  handleOptionChange: PropTypes.func,
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    })
  ), 
  selectedInterval: PropTypes.string,
  selectedLanguage: PropTypes.string,
  sortByStars: PropTypes.func
}


export default OptionsPanel
