import AuthDetails from "./components/auth/AuthDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header/>
      <AuthDetails/>
      <SignUp/>
      <SignIn/>
    </div>
  );
}

export default App;
