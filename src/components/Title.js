import React from 'react';
// import { app } from 'firebase';

const Title = () => {
   const options = { weekday: 'long', month: 'short', day: 'numeric' };
   const today = new Date();

  return (
    <div className="title">
      <h2>Your Gallery</h2>
      <h4>{today.toLocaleDateString(undefined, options)}</h4>
      {/* <p style={{ fontSize: 25 }}>Add some photos to your gallery.</p> */}
      {/* <button onClick={() => app.auth().signOut()}>Sign Out</button> */}
    </div>
  )
}

export default Title;