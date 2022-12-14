import React from "react";
//use Hooks insted of mapStateToProps & mapDispatchToProps simply like this its provide direct connection without using connect hoc 
import { useDispatch, useSelector } from "react-redux";
import buyCake from "../redux/cake/cakeAction";

function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of Cakes - {numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  );
}

export default HooksCakeContainer;
