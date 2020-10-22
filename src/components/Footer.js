import React from 'react';

const Footer = () => {
  return (
    <footer>

        <p>&copy; {new Date().getFullYear()}, Made with love and coffee.</p>
        <ul>
          <li><a href="https://github.com/nzart">Github</a></li>
          <li><a href="https://dribbble.com/imnickzart">Dribble</a></li>
          <li><a href="https://www.linkedin.com/in/imnickzart/">LinkedIn</a></li>
        </ul>
    </footer>
  );
};

export default Footer;