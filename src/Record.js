import React from 'react';

function Record(props) {
  return <div class="record"> 
    <div class="record-title">{props.title}</div> 
    <div class="record-message">{props.message}</div>
  </div>
}

export default Record;
