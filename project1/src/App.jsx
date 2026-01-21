import './App.css';
import Project from './components/Project';


function App() {
  return (
    <div className="container">
      <h1>Projects</h1>
      <Project title="Dishes" deadline="Today">
        Empty dishwasher
        </Project>
      <Project title="Tidy" deadline="Today">
        Clean surroundings
        </Project>
      <Project title="Laundry" deadline="Tomorrow">
        Fold laundry and put away
        </Project>
        <Project title="Vacuuming" deadline="Sunday">
        Vacuum 1st and 2nd floor
        </Project>
      
    </div>
  );
}

export default App;
