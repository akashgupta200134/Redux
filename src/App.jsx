import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, IncrementAsync } from "./Reducers/Createslice";

const App = () => {
  const { value } = useSelector((state) => state.Counter);
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-red-500  p-4 w-[50%] ml-auto mr-auto flex items-center justify-center mt-32 text-center text-5xl font-bold text-white">
        Counter : {value}
        </div>

        <div className=" mt-24 gap-10 w-32 flex items-center justify-center ml-auto mr-auto" >
          
           <button className=" bg-transparent border-2 border-slate-400 p-4" onClick={ () => dispatch(increment())}>Increment</button>

           <button className=" bg-transparent border-2 border-slate-400 p-4" onClick={ () => dispatch(decrement())}>Decrement</button>
          <button className=" bg-transparent border-2 border-slate-400 p-4" onClick={ () => dispatch(IncrementAsync(5))}>IncrementByAmount</button>
        


        </div>
     

    </>
  );
};

export default App;
