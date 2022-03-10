import {AboutMe} from './pages/AboutMe';
import {Skills} from './pages/Skills';
import {Contacts} from './pages/Сontacts';
import data from './data/data.json';
import { Routes, Route} from 'react-router-dom';

const myData = data;

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <AboutMe
          contactsData = {myData.contacts}
          purpose = {myData.purpose}
          aboutMe = {myData.aboutMe}
        />}
        />
        <Route path='/skills' element={
            <Skills
            devSkills = {myData.devSkills}
            education = {myData.education}
            addEducation = {myData.addEducation}
            job = {myData.job}
          />
        }/>
        <Route path='/contacts' element={
          <Contacts
          contactsData = {myData.contacts} />
        }/>
      </Routes>
    </div>
  );
}

export default App;
