import React, { Component } from 'react';
import steffehead from './images/steffehead.png';
import jimmiehead from './images/jimmiehead.png';
import steffeheadRed from './images/steffeheadred.png';
import jimmieheadBlue from './images/jimmieheadblue.png';

import './App.css';

class App extends Component {
  state = {
    location: 'start',
    jimmie1: 'jimmiehead',
    jimmie2: 'jimmiehead',
    jimmie3: 'jimmiehead',
    jimmie4: 'jimmiehead',
    jimmie5: 'jimmiehead',
    jimmie6: 'jimmiehead',
    steffe1: 'steffehead',
    steffe2: 'steffehead',
    steffe3: 'steffehead',
    steffe4: 'steffehead',
    steffe5: 'steffehead',
    steffe6: 'steffehead',
    count: 0,
  }
  navState(e) {
    this.setState({location: e})
  }
  changeHead1(e) {
    var counter = this.state.count + 1
    this.setState({count: counter})
    this.setState({steffe1: e})
    console.log(this.state.count);
  }
  changeJHead1(e) {
    this.setState({jimmie1: e})
  }
  changeHead2(e) {
    this.setState({steffe2: e})
  }
  changeJHead2(e) {
    var counter = this.state.count + 1
    this.setState({count: counter})
    this.setState({jimmie2: e})
  }
  changeHead3(e) {
    var counter = this.state.count + 1
    this.setState({count: counter})
    this.setState({steffe3: e})
  }
  changeJHead3(e) {
    this.setState({jimmie3: e})
  }
  changeHead4(e) {
    this.setState({steffe4: e})
  }
  changeJHead4(e) {
    var counter = this.state.count + 1
    this.setState({count: counter})
    this.setState({jimmie4: e})
  }
  changeHead5(e) {
    var counter = this.state.count + 1
    this.setState({count: counter})
    this.setState({steffe5: e})
  }
  changeJHead5(e) {
    this.setState({jimmie5: e})
  }
  changeHead6(e) {
    this.setState({steffe6: e})
  }
  changeJHead6(e) {
    var counter = this.state.count + 1
    this.setState({count: counter})
    this.setState({jimmie6: e})
  }
  resetF(e) {
    this.setState({location: e})
    this.setState({count: 0})
    this.setState({jimmie1: 'jimmiehead'})
    this.setState({jimmie2: 'jimmiehead'})
    this.setState({jimmie3: 'jimmiehead'})
    this.setState({jimmie4: 'jimmiehead'})
    this.setState({jimmie5: 'jimmiehead'})
    this.setState({jimmie6: 'jimmiehead'})
    this.setState({steffe1: 'steffehead'})
    this.setState({steffe2: 'steffehead'})
    this.setState({steffe3: 'steffehead'})
    this.setState({steffe4: 'steffehead'})
    this.setState({steffe5: 'steffehead'})
    this.setState({steffe6: 'steffehead'})
  }


  render() {
    return (
      <div className="App">
        {this.state.location === 'start' && (
          <div className="start">
            <h1>Bill eller Bull?</h1>
            <h3 className="startText">Socialdemokraterna verkar vilja vinna tillbaka SD-väljare
            genom att kopiera Sverigedemokraterna retorik från förra valspurten. Lyckas du avgöra vem som sagt nedanstående citat
            <br></br>
            <br></br>
            -Jimmy 2014 eller Stefan 2018</h3>
            <div className="button" onClick={(e) => this.navState('q1')}>
              <h1>STARTA SPELET</h1>
            </div>
          </div>
        )}
        {this.state.location === 'q1' && (
        <div className="q1">
          <div className="headline">
            <h1 className="steffeOR">Jimmy eller Stefan?</h1>
            <p>Fråga 1/3</p>
          </div>
          <div className="questions ONE">
            {this.state.steffe1 === 'steffehead' && (
              <img alt="" className="steffe" src={steffehead} onClick={(e) => this.changeHead1('steffeheadred')}></img>
            )}
            {this.state.steffe1 === 'steffeheadred' && (
              <img alt="" className="steffe" src={steffeheadRed}></img>
            )}
            <p>Vi kan bestämma att vi ska mångdubbla vårt mottagande, men det kommer ändå inte att hjälpa alla människor. Vi måste ha en ansvarsfull och reducerad invandringspolitik.</p>
            {this.state.jimmie1 === 'jimmiehead' && (
              <img alt="" className="jimmie" src={jimmiehead} onClick={(e) => this.changeJHead1('jimmieheadBlue')}></img>
            )}
            {this.state.jimmie1 === 'jimmieheadBlue' && (
              <img alt="" className="jimmie" src={jimmieheadBlue}></img>
            )}
          </div>
          <div className="questions TWO">
            {this.state.steffe2 === 'steffehead' && (
              <img alt="" className="steffe" src={steffehead} onClick={(e) => this.changeHead2('steffeheadred')}></img>
            )}
            {this.state.steffe2 === 'steffeheadred' && (
              <img alt="" className="steffe" src={steffeheadRed}></img>
            )}
            <p>Vi behöver inte ha en restriktivare migrationspolitik. Sverige kan inte ha en migrationspolitik som väsentligen skiljer sig ifrån omvärlden.</p>
            {this.state.jimmie2 === 'jimmiehead' && (
              <img alt="" className="jimmie" src={jimmiehead} onClick={(e) => this.changeJHead2('jimmieheadBlue')}></img>
            )}
            {this.state.jimmie2 === 'jimmieheadBlue' && (
              <img alt="" className="jimmie" src={jimmieheadBlue}></img>
            )}
          </div>
          <div className="nextButton" onClick={(e) => this.navState('q2')}>
            <h1>NÄSTA FRÅGA</h1>
          </div>
        </div>
        )}
        {this.state.location === 'q2' && (
        <div className="q1">
          <div className="headline">
            <h1>Jimmy eller Stefan?</h1>
            <p>Fråga 2/3</p>
          </div>
          <div className="questions THREE">
            {this.state.steffe3 === 'steffehead' && (
              <img alt="" className="steffe" src={steffehead} onClick={(e) => this.changeHead3('steffeheadred')}></img>
            )}
            {this.state.steffe3 === 'steffeheadred' && (
              <img alt="" className="steffe" src={steffeheadRed}></img>
            )}
            <p>Det är inte någon framtid för någon att stå i ett gatuhörn och tigga. Så det måste få ett stopp</p>
            {this.state.jimmie3 === 'jimmiehead' && (
              <img alt="" className="jimmie" src={jimmiehead} onClick={(e) => this.changeJHead3('jimmieheadBlue')}></img>
            )}
            {this.state.jimmie3 === 'jimmieheadBlue' && (
              <img alt="" className="jimmie" src={jimmieheadBlue}></img>
            )}
          </div>
          <div className="questions FOUR">
            {this.state.steffe4 === 'steffehead' && (
              <img alt="" className="steffe" src={steffehead} onClick={(e) => this.changeHead4('steffeheadred')}></img>
            )}
            {this.state.steffe4 === 'steffeheadred' && (
              <img alt="" className="steffe" src={steffeheadRed}></img>
            )}
            <p>Vårt skarpa förslag är att tiggeri ifrån utländska medborgare förbjuds. Det är inte värdigt ett land som Sverige.</p>
            {this.state.jimmie4 === 'jimmiehead' && (
              <img alt="" className="jimmie" src={jimmiehead} onClick={(e) => this.changeJHead4('jimmieheadBlue')}></img>
            )}
            {this.state.jimmie4 === 'jimmieheadBlue' && (
              <img alt="" className="jimmie" src={jimmieheadBlue}></img>
            )}
          </div>
          <div className="nextButton" onClick={(e) => this.navState('q3')}>
            <h1>NÄSTA FRÅGA</h1>
          </div>
        </div>
        )}
        {this.state.location === 'q3' && (
        <div className="q1">
          <div className="headline">
            <h1>Jimmy eller Stefan?</h1>
            <p>Fråga 3/3</p>
          </div>
          <div className="questions FIVE">
            {this.state.steffe5 === 'steffehead' && (
              <img alt="" className="steffe" src={steffehead} onClick={(e) => this.changeHead5('steffeheadred4')}></img>
            )}
            {this.state.steffe5 === 'steffeheadred4' && (
              <img alt="" className="steffe" src={steffeheadRed}></img>
            )}
            <p>Det är orimligt att det kommer tusentals personer varje år till Sverige för att göra jobb som arbetslösa i Sverige kan utföra.</p>
            {this.state.jimmie5 === 'jimmiehead' && (
              <img alt="" className="jimmie" src={jimmiehead} onClick={(e) => this.changeJHead5('jimmieheadBlue')}></img>
            )}
            {this.state.jimmie5 === 'jimmieheadBlue' && (
              <img alt="" className="jimmie" src={jimmieheadBlue}></img>
            )}
          </div>
          <div className="questions SIX">
            {this.state.steffe6 === 'steffehead' && (
              <img alt="" className="steffe" src={steffehead} onClick={(e) => this.changeHead6('steffeheadred4')}></img>
            )}
            {this.state.steffe6 === 'steffeheadred4' && (
              <img alt="" className="steffe" src={steffeheadRed}></img>
            )}
            <p>Vi måste bekämpa arbetslösheten, men då måste vi förstå att vi kan inte år efter år fylla på arbetslösheten med tusentals nya arbetslösa [invandrare].</p>
            {this.state.jimmie6 === 'jimmiehead' && (
              <img alt="" className="jimmie" src={jimmiehead} onClick={(e) => this.changeJHead6('jimmieheadBlue')}></img>
            )}
            {this.state.jimmie6 === 'jimmieheadBlue' && (
              <img alt="" className="jimmie" src={jimmieheadBlue}></img>
            )}
          </div>
          <div className="nextButton" onClick={(e) => this.navState('result')}>
            <h1>TILL RESULTATET</h1>
          </div>
        </div>
        )}
        {this.state.location === 'result' && (
          <div className='q1'>
            <h1>Resultatet</h1>
            <h1 className="right">{this.state.count}/6 Rätt</h1>
            <div className="shareButton">
              <h1>DELA RESULTATET</h1>
            </div>
            <div className="nextButton" onClick={(e) => this.resetF('start')}>
              <h1>SPELA IGEN</h1>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
