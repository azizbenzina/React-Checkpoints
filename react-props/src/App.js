import Profile from './profile/profile';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

function App() {
  const handleName = name => alert("User Name: "+name);
  const row = ({
    fullName:"Mohamed Aziz Benzina",
    profession:"Web Developer",
    bio:"Je suis BENZINA Aziz, Développeur Full-Stack. Je recherche une nouvelle opportunité dans le développement Web et Mobile, plus intéressé par ces Environnements : java, dart, python, JavaScript, Node JS, Express JS, HTML5, CSS, C#, php, React JS, Flutter, Spring boot, jqery, boostrap. Base de données : Mongodb, SQL, Firebase, FireStore."});
  return (
    <div className="App">
     <Profile fullName={row.fullName} bio={row.bio} profession={row.profession} handleName={handleName} > <img src="imageInSrc.png" alt="ProfilePhoto" width="100"class="rounded"/></Profile>
    </div>
  );
}

export default App;
