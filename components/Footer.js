import PropTypes from 'prop-types';

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Done with Next.js. Done under the <a href="https://html5up.net/license">Creative Commons</a> license.</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
