import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

export default function homePage() {
  return (
    <div className="item1">
      <h1>Welcome</h1>
      <h2>Howdy, my name is Jason Ross!</h2>
      <p>
        I am a full stack JavaScript web developer from the United States.
        Building and troubleshooting problems is what I love to do. Besides
        knowing a lot about web development, I also know a thing or two about
        SharePoint and PowerShell. Did I mention that I also create technology
        courses? Stick around if you want to learn more about what I do.
      </p>
    </div>
  );
}
