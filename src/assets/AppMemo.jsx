import React, { useMemo, useState } from 'react';

function AppMemo() {
  const [num, setNum]= useState(0);

  const getMultiply = useMemo(() => {
    console.log("memoizing");
    return num * 2;
  }, [num]);

  return (
    <div>
        <input type='text' onChange={(e)=>{
            setNum(e.target.value);}}  />

 <h2>Total: {getMultiply}</h2>
    </div>
  );
}

export default AppMemo;
