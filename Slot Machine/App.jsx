import React from 'react';

const SlotM = (props) => {

  // let x = '😄';
  // let y = '😄';
  // let z = '😸';


  let x = props.x;
  let y = props.y;
  let z = props.z;

  if ((x === y) && (y ===z)) {
    return (
      <>
        <div className='slot_inner'>
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is matching.</h1>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className='slot_inner'>
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This isn't matching.</h1>
          <hr />
        </div>
      </>
    );

  }


};

const App = () => {

  return (<>
    <h1 className="heading_style" > welcome to 🎰
      <span style={{ fontWeight: 'bold' }}  >  slote machine </span>
    </h1>

    <div className='slot_machine'>
      <SlotM x = '😄' y = '😄' z = '😸'  />
      <SlotM x = '😄' y = '😄' z = '😸'  />
      <SlotM x = '😄' y = '😄' z =  '😄'  />
    </div>


  </>);

};


export default App;
