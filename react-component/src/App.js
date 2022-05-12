import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullName from './Component/Profile/FullName.js';
import Address from './Component/Profile/Address.js';
import ProfilePhoto from './Component/Profile/ProfilePhoto.js';

function App() {
  return (
    <div className="App">
<div class="container mt-5">
  <div class="row">
    <div class="col-12">
      <article class="blog-card">
        <div class="blog-card__background">
          <div class="card__background--wrapper">
            <div class="card__background--main">
            <ProfilePhoto/>
              <div class="card__background--layer"></div>
            </div>
          </div>
        </div>
        <div class="blog-card__head">
          <span class="date__box">
            <span class="date__day">19-03-1998</span>
          </span>
        </div>
        <div class="blog-card__info">
          <h5><FullName/></h5>
          <p>
            <a href="#" class="icon-link mr-3"><i class="fa fa-pencil-square-o"></i> <Address/></a>
          </p>
          <p>Je suis BENZINA Aziz, Développeur Full-Stack. Je recherche une nouvelle opportunité dans le développement Web et Mobile, plus intéressé par ces Environnements : 
java, dart, python, JavaScript, Node JS, Express JS, HTML5, CSS, C#, php, React JS, Flutter, Spring boot, jqery, boostrap. 
Base de données : Mongodb, SQL, Firebase, FireStore. Veuillez considérer mon CV. Cordialement. </p>
          <a class="btn btn--with-icon"><i class="btn-icon fa fa-long-arrow-right"></i><b>READ MORE</b></a>
        </div>
      </article>
    </div>
  </div>
</div>

<section class="detail-page">
  <div class="container mt-5">
    
  </div>
</section>
    </div>
  );
}

export default App;
