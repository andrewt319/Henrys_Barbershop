import React from 'react';
import { InlineWidget } from "react-calendly";
import Footer from '../Footer';
import '../../App.css';

// export default function BookNow() {
//   return (
//     <>
//       <h1 className='book-now'>
//         BOOK NOW
//         <InlineWidget
//           url="https://calendly.com/rigycuts/haircut"
//         />
//       </h1>
//       <Footer />
//     </>
//   )
// }

export default function BookNow() {
  return (
    <>
      <h1 className='book-now'>
        <InlineWidget
          url="https://calendly.com/rigycuts/haircut"
        />
      </h1>
      <Footer />
    </>
  )
}

// export default function BookNow() {
//   return (
//     <>
//       <div class="calendly-inline-widget" data-url="https://calendly.com/rigycuts" style="min-width:320px;height:630px;"></div>
//       <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
//       <Footer />
//     </>
//   )
// }
