import React from 'react';

const Map = () => {
  return (
    <div style={{ width: "100%" }}>
      <iframe
        style={{title:'map',
        width:"100%",
        height:"600px",
        frameBorder:"0",
        scrolling:"no",
        marginHeight:"0",
        marginWidth:"0"}}
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Nam%C4%B1k%20Kemal,%20REKT%C3%96RL%C3%9CK%20B%C4%B0NASI%20VE%20KONFERANS%20SALONU,%2059030%20S%C3%BCleymanpa%C5%9Fa/Tekirda%C4%9F+(Nam%C4%B1k%20Kemal%20%C3%9Cniversitesi)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
      </iframe>
    </div>
  );
};

export default Map;
