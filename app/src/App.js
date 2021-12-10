import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './App.css';
import Login from './components/Login'
import Home from './components/Home'
import Header from './components/Header'
import Comments from "./components/Comments";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase";
import { User } from "./action";

function App() {

  const user = useSelector((state)=> state.user.user);

  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      dispatch(User(user));
    })
  },[])


  window.addEventListener('load',function(){
  document.querySelector(".spinner").classList.add('hideSpiner');
  })

  return (
    <div className="app">

<div className="spinner">
<img src="/img/Rolling-0.9s-200px.gif" alt="" />
</div>
      <Router>
        <Switch>
          <Route exact path="/">
            {!user ?(<Login />):(<>
            <Header />
            <Home /></>)}

          </Route>

          <Route exact path="/comment/:postId" >
            <Comments />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
