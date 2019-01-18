import React from 'react';

const userinput = (props) => {
  return (
    <div>
      <input type="button" onClick={props.click} />
      <input username="userinputcontent" />
    </div>
  );
};

export default userinput;
