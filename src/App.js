import React from 'react';
import './CaseCocher.css';          // remarque 2 : importer le CSS ici
import CaseCocher from './CaseCocher';

function App() {
  return (
    <div className="liste">
      <CaseCocher id="c1" texte="Cocher la case si vous êtes d'accord" />
      <CaseCocher id="c2" texte="Cocher la case si vous êtes d'accord" />
      <CaseCocher id="c3" texte="Cocher la case si vous êtes d'accord" />
      <CaseCocher id="c4" texte="Cocher la case si vous êtes d'accord" />
    </div>
  );
}

export default App;