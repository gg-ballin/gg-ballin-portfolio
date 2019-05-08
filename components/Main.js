import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faEmail from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>
    const { article, articleTimeout } = this.props;
    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Who I am</h2>
          <span className="image main"><img src="/static/images/pic01.jpg" alt="" /></span>
          <p>My name is German Gomez. I'm a Full Stack Web Developer with knowledge of React/React Native and Node.js. I started my journey as a web developer in April 2018. Since joining the Belgrano University in 2016, starting a short programming career my passion slowly started to become what it is today.</p>
          <p>I started at college with absolutely no knowledge of how a program was made. After a few months of struggle and a lot of work, 
          I started to learn more about the internals of programming. I'm letting it on hold right now.</p>
          {close}
        </article>

        <article id="work" className={`${article === 'work' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">My work</h2>
          <span className="image main"><img src="/static/images/pic02.jpg" alt="" /></span>
          <p>My biggest project was RoMedical Art App done at Bits0. It's an aesthetic app coded with React Native. You can register, sign up with your account, have numerous benefits and taking appointments for treatments that the clinic offers.</p>
          <p>The app was developed mainly with Expo, React Native, MySQL and an API using PHP. It's available in the <a target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/ar/app/romedicalart-app/id1456259937?mt=8">iOS App Store</a> and a version for Android in the <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.romedical.appv1">Google Play Store</a>.</p>
          <p>If you want to know more about RoMedical, <a target="_blank" rel="noopener noreferrer" href="http://www.romedicalart.com/">click here!</a></p>
          {close}
        </article>

        <article id="about" className={`${article === 'about' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About me</h2>
          <span className="image main"><img src="/static/images/pic03.jpg" alt="" /></span>
          <p>I'm an Argentinian who loves being on the move. I enjoy watching (a lot of) Youtube videos in my spare time, online video games, long cycling trips and football. I've completed 5 Udemy courses to gain better knowledge of the tools I 
          currently use in my daily basis. My first approach to web developing was learning React and Node. The courses I took, where mainly about React, Node, express and databases such as
          PostgreSQL and MongoDB. Made a bunch of small projects that are in my <a target="_blank" rel="noopener noreferrer" href="https://github.com/gg-ballin">github repo</a>. Thanks for visiting my page!</p>
          {close}
        </article>

        <article id="contact" className={`${article === 'contact' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact me!</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/german-gomez-781040152/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/gg-ballin">
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main