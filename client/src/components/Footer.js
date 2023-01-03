import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

// function Footer() {
//   return (
//     <div className='footer-container'>
//       <section class='social-media'>
//         <div class='social-media-wrap'>
//           <small class='website-rights'>
//             <i class='fa fa-hand-scissors' />
//             HENRY'S BARBERSHOP © 2023
//           </small>
//           <div class='social-icons'>
//             <a
//               class='social-icon-link github'
//               href='https://github.com/henrybliu'
//               target='_blank'
//               aria-label='GitHub'
//             >
//               <i class='fab fa-github' />
//             </a>
//             <a
//               class='social-icon-link instagram'
//               href='https://www.instagram.com/henrysbarbershop/'
//               target='_blank'
//               aria-label='Instagram'
//             >
//               <i class='fab fa-instagram' />
//             </a>
//             <a
//               class='social-icon-link linkedin'
//               href='https://www.linkedin.com/in/henrybliu'
//               target='_blank'
//               aria-label='LinkedIn'
//             >
//               <i class='fab fa-linkedin' />
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>
            <i class='fa fa-hand-scissors' />
            HENRY'S BARBERSHOP © 2023
          </small>
          <div class='social-icons'>
            <a
              class='social-icon-link github'
              href='https://github.com/henrybliu'
              target='_blank'
              aria-label='GitHub'
            >
              <i class='fab fa-github' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/henrysbarbershop/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/in/henrybliu'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
