import React from 'react';

function getMessage(heure) {
  if (heure < 12) return { texte: 'Bonjour', couleur: '#04567F' };
  if (heure < 18) return { texte: 'Bonne après midi', couleur: '#0914A3' };
  return { texte: 'Bonne nuit', couleur: '#D90000' };
}

function App() {
  const { texte, couleur } = getMessage(new Date().getHours());

  return (
    <div style={{ textAlign: 'center', marginTop: 100 }}>
      <h1 style={{ fontSize: 100, color: couleur }}>{texte}</h1>
    </div>
  );
}

export default App;
