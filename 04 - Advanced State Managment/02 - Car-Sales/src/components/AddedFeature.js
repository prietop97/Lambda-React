import React from 'react';
import { connect } from 'react-redux'
import { removeFeature } from '../Actions'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={(e)=>{
        e.preventDefault();
        props.removeFeature(props.feature,props.id)
      }}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(
  null,
  {removeFeature}
)(AddedFeature);
