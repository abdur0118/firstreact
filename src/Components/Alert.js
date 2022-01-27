import React from 'react';

export default function Alert(props) {
    function capitalize(x){
        return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show `}role="alert">
    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
  </div>
  );
}
