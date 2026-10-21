import React from 'react';

function CaseCocher(props) {
  return (
    <div className="case">
      <input type="checkbox" id={props.id} />
      <label htmlFor={props.id}>{props.texte}</label>
    </div>
  );
}

export default CaseCocher;