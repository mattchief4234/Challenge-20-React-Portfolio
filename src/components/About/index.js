import React from "react";
import profileImage from "../../assets/Large/Large/Profile_Pic.png";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Hello, My name is Matthew Webb. I was born in Salt lake city Utah and spent some time growing up there and also in california.
            I am the middle of 3 kids and I am perfectly happy being there. As I grew up I was ALWAYS interested in pictures found in books, like normal
            kids picture books, comic books, or just start at art books of famous paintings. This drove me to start drawing and I still do that today. I love
            to draw with pencils and charcoal, I love to paint with acrylics and watercolors and I also love digital art where most of my work is now. I am currentlyh
            working at a large airplane manufacturer and I built the horizontal wing stabalizers that are on the back of the plane. I do like working there
            but I do hope one day to get a new job working with computers and especially programing and coding.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;