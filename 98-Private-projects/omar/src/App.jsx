import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './view/components/Header';
import SignUp from './view/components/SignUp';
import Gmail from './view/components/Gmail';
import Facebook from './view/components/Facebook';
import NewAccount from './view/components/NewAccount';
import Gender from './view/components/Gender';
import MainGoal from './view/components/MainGoal';
import Activity from './view/components/Activities'
import Name from './view/components/Name';
import Age from './view/components/Age';
import Height from './view/components/Height';
import Weight from './view/components/Weight';
import Plan from './view/components/PersonalPlan'
import SingleWorkout from './view/components/SingleWorkout';
import EmptyPlan from './view/components/EmptyPlan';
import PlanGenerator from './view/components/PlanGenerator';
import Food from './view/components/Food';
import Profile from './view/components/Profile';
import Plandecider from './view/components/Plandecider';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path="/plandecider" element={<Plandecider/>}/>
        <Route exact path="/food" element={<Food/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/plangenerator" element={<PlanGenerator/>}/>
        <Route exact path="/emptyPlan" element={<EmptyPlan/>}/>
        <Route exact path="/singleworkout" element={<SingleWorkout/>}/>
        <Route exact path="/personalplan" element={<Plan/>}/>
        <Route exact path="/weight" element={<Weight/>}/>
        <Route exact path="/height" element={<Height/>}/>
        <Route exact path="/age" element={<Age/>}/>
        <Route exact path="/name" element={<Name/>}/>
        <Route exact path="/activity" element={<Activity/>}/>
        <Route exact path="/goal" element={<MainGoal/>}/>
        <Route exact path="/gender" element={<Gender/>}/>
        <Route exact path="/newAccount" element={<NewAccount/>}/>
        <Route exact path="/facebook" element={<Facebook/>}/>
        <Route path="/gmail" element={<Gmail />} /> 
        <Route exact path="/" element={<><Header/><SignUp/></>}/>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
