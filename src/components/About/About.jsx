/**
 * The above code is a React functional component that renders an About page with a heading and
 * paragraph content.
 * @returns The About component is returning a div element with the class name 'mt-28 ml-28'. Inside
 * the div, there is an h2 element with the text "About Us" and a p element with the text "This is the
 * About page content".
 */

import React from 'react';

const About = () => {
  return (
    <div className='mt-28 ml-28'>
      <h2>About Us</h2>
      <p>This is the About page content.</p>
    </div>
  );
};

export default About;
