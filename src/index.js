import React, { Component } from "react";
import ReactDOM from "react-dom";

import LanguageContext from "./language-context";
import LanguageSwitcher from "./LanguageSwitcher";

class App extends Component {
  setLanguage = language => {
    this.setState({ language });
  };

  state = {
    language: "en",
    setLanguage: this.setLanguage
  };

  render() {
    return (
      <LanguageContext.Provider value={this.state}>
        <h2>Current Language: {this.state.language}</h2>
        <p>Click button to change to jp</p>
        <div>
          {/* Can be nested */}
          <LanguageSwitcher />
        </div>
      </LanguageContext.Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
