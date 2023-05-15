import './App.css';
import Projects from './mainSection/Projects';
import Education from './mainSection/Educations';
import Skills from './components/Sidebar/Skills';
import Certifications from './components/Sidebar/Certifications';
import ProfileLinks from './components/Sidebar/ProfileLinks';
import Header from './mainSection/Header';



function App() {
  return (
    <div>
     <Header/>
    <div className="App">
      <aside className='aside'>
        <Skills />
        <Certifications />
        <ProfileLinks />
      </aside>
      <section className='section'>
        <Projects />
        <Education />
      </section>
      </div>
    </div>
  );
}

export default App;
