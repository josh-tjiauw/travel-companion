import React from 'react';

function ToVisit(props) {
  const { toVisitId, cityName, isCompleted } = props.toVisit;
  // eslint-disable-next-line no-constant-condition
  const idAttr = `toVisit-city-${toVisitId}`
    ? 'form-check-label is-completed'
    : 'form-check-label';
  return (
    <div className='toVisitsDivContainer' onClick={() => props.toggleCompleted(toVisitId)}>
      <label>{cityName}</label>
      <div className='form-check' style={{ position: 'absolute', right: '6px', top: '9px' }}>
        <input
          style={{ transform: 'scale(3)' }}
          id={idAttr}
          type='checkbox'
          checked={isCompleted}
          className='form-check-input mr-2'
          onChange={() => props.toggleCompleted(toVisitId)}
        />
      </div>
    </div>
  );
}

export default function ToVisitList(props) {
  return (
    <div className='visitList'>
      {props.toVisit.map(cityName => {
        return (
          <ToVisit
            key={cityName.toVisitId}
            toVisit={cityName}
            toggleCompleted={props.toggleCompleted}
          />
        );
      })}
    </div>
  );
}
