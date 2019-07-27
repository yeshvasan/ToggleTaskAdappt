import React, { Component } from 'react'
import {FaRegUser, FaBinoculars, FaToggleOff, FaToggleOn} from 'react-icons/fa/';
export default class Card extends Component { 
    constructor(props){
        super(props);
        this.state={
            isToggleOn:false,
            isToggleOna:false,
            isToggleOnb:false,
            isToggleOnc:false,  
            isToggleOnd:false,
            isToggleOne:false
        };
        this.handleToggle=this.handleToggle.bind(this);
    }
    
    handleToggle = () => {
        this.setState(function(prevState){
            return {isToggleOn:!prevState.isToggleOn};
            
        });
        
    }
    handleTogglea = () => {
        this.setState(function(prevState){
            return {isToggleOna:!prevState.isToggleOna};
            
        });
    }
    handleToggleb = () => {
        this.setState(function(prevState){
            return {isToggleOnb:!prevState.isToggleOnb};
            
        });
    }
    handleTogglec = () => {
        this.setState(function(prevState){
            return {isToggleOnc:!prevState.isToggleOnc};
            
        });
    }
    handleToggled = () => {
        this.setState(function(prevState){
            return {isToggleOnd:!prevState.isToggleOnd};
            
        });
    }
    handleTogglee = () => {
        this.setState(function(prevState){
            return {isToggleOne:!prevState.isToggleOne};
            
        });
    }
    render() {
        return (
            <React.Fragment>
            <div className="form">
            <div className="inline">
                <label for="firstname">FirstName</label>
                <input className="textarea" type="text"  placeholder="Cheryl" tabindex="1" autofocus="autofocus" />
                <label for="lastname">LastName</label>
                <input type="text"  placeholder="Chase" tabindex="1" autofocus="autofocus" />
            </div>
            <div>
            <label for="license">License</label>
            <input type="text"  placeholder="ASDU-HDDTS-HDGFD-SGESF-HSGFS" tabindex="1" autofocus="autofocus" />
            </div>
            <div>
            <label for="department">Department</label>
            <select className="subject" name="subject" tabindex="4">
            <option value="a">Design</option>
            <option value="b">Development</option>
            </select> 
            </div>
            <div class="row">
  
  <div class="column">
    <div class="card">
    <div className="card_icon">
    <FaRegUser />                                
</div>
<div>
<h5>Persist settings</h5>

<button  onClick={this.handleToggle} toggler="#toggler" className="btn-primary">{this.state.isToggleOn?<FaToggleOn />:<FaToggleOff />}</button>
</div>
<div>
<h5>Enable Profiles</h5>
<button  onClick={this.handleTogglea} toggler="#toggler1"  className="btn-primary">{this.state.isToggleOna?<FaToggleOn />:<FaToggleOff />}</button>
</div>
<div>
<h5>Auto Update</h5>
<button  onClick={this.handleToggleb} className="btn-primary">{this.state.isToggleOnb?<FaToggleOn />:<FaToggleOff />}</button>
</div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
    <div className="card_icon">
                                    <FaBinoculars />                                
                                </div>
                                <div>
                                <h5>Legal Check</h5>
                                <button  onClick={this.handleTogglec} className="btn-primary">{this.state.isToggleOnc?<FaToggleOn />:<FaToggleOff />}</button>
                                </div>
                                <div>
                                <h5>Check Proffing</h5>
                                <button  onClick={this.handleToggled} className="btn-primary">{this.state.isToggleOnd?<FaToggleOn />:<FaToggleOff />}</button>
                                </div>
                                <div>
                                <h5>Check Edits</h5>
                                <button  onClick={this.handleTogglee} className="btn-primary">{this.state.isToggleOne?<FaToggleOn />:<FaToggleOff />}</button>
                                </div>
    </div>
  </div>
</div>
        <div>
    <h3 className="head">History, Purposes and Uses</h3>
    <p className="per">The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history </p>
    </div>

    </div>
</React.Fragment>
        )
    }
}


{/*  <div>
                <ul className="cards">
                    <li className="cards_item">
                        <div className="card">
                            <div className="card_content">
                                <div className="card_icon">
                                    <FaRegUser />                                
                                </div>
                                <div>
                                <p>Persist settings</p>
                                
                                <button  onClick={this.handleToggle} toggler="#toggler" className="btn-primary">{this.state.isToggleOn?<FaToggleOn />:<FaToggleOff />}</button>
                                </div>
                                <div>
                                <p>Enable Profiles</p>
                                <button  onClick={this.handleTogglea} toggler="#toggler1"  className="btn-primary">{this.state.isToggleOna?<FaToggleOn />:<FaToggleOff />}</button>
                                </div>
                                <div>
                                <p>Auto Update</p>
                                <button  onClick={this.handleToggleb} className="btn-primary">{this.state.isToggleOnb?<FaToggleOn />:<FaToggleOff />}</button>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="cards_item">
                        <div className="card">
                            <div className="card_content">
                                <div className="card_icon">
                                    <FaBinoculars />                                
                                </div>
                                <div>
                                <p>Legal Check</p>
                                <button  onClick={this.handleTogglec} className="btn-primary">{this.state.isToggleOnc?<FaToggleOn />:<FaToggleOff />}</button>
                                </div>
                                <div>
                                <p>Check Proffing</p>
                                <button  onClick={this.handleToggled} className="btn-primary">{this.state.isToggleOnd?<FaToggleOn />:<FaToggleOff />}</button>
                                </div>
                                <div>
                                <p>Check Edits</p>
                                <button  onClick={this.handleTogglee} className="btn-primary">{this.state.isToggleOne?<FaToggleOn />:<FaToggleOff />}</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                </ul>
            </div>
*/}