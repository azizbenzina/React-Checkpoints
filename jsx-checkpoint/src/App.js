import './style.css';
import imageInSrc from "./imageInSrc.png"
function App() {
  return (
    <div style={{border:"solid 1px black",maxwidth:"100vw"}}>

 <h1 className="title red">Benzina Aziz</h1>

<br />
 <img className='imageInSrc' src={imageInSrc} alt="profile"/>

<br/>

<div>
<img className='imageInPublic' src="imageInPublic.png" alt="profile"/>
<h1 className="present">Hi there !... <br />
Im Benzina Aziz a Full-Stack Developer.</h1>
<h1 className="present2">Im also working on Mobile Application ...check it out.</h1>
</div>


<video width="320" height="240" controls className='video'>

<source src="myVideo.mp4" type="video/mp4" />

</video>
{/* 
<div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%;
 padding-bottom: 48px; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE8ayHjVB4&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
<a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE8ayHjVB4&#x2F;view?utm_content=DAE8ayHjVB4&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Design</a> par Benzina Aziz */}
</div>



 

  );
}

export default App;
