import './App.css';
import Projects from './mainSection/Projects';
import Education from './mainSection/Educations';
import Skills from './components/Sidebar/Skills';
import Certifications from './components/Sidebar/Certifications';
import ProfileLinks from './components/Sidebar/ProfileLinks';
import Header from './mainSection/Header';



function App() {
  return (

    <div className="App">
      <Header />
      <Skills />
      <ProfileLinks />
      <Projects />
      <Education />
      <Certifications />
    </div>
  );
}

export default App;
