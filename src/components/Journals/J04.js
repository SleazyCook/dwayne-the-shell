import React from 'react'
import { Link } from 'react-router-dom'

function J04() {
  return (
    <div className="entry">

      <div className="entry__main">
        <h3 classNamne="heading-tertiary">
          <Link className="heading-tertiary__link" to="/navigate">
            <span className="heading-tertiary--main">
              Dark Path to Tresen
            </span>
            <span className="heading-tertiary--sub">
              03/11/23
            </span>
          </Link>
        </h3>

        <p className="entry__passage">
          There is a path of darkness leading up from the mysterious obelisk pointing in the direction of Tresen.  I decide to travel with Maggie and Kalima Nisha back to town. It will be about a week's journey. At night I think about how mysterious the teleportation event was with Kian. Did the locket transport us? Was Kian an agent of good or evil, or just another confused traveler like myself? During the daytime Kalima Nisha sings with the voice of an angel. I've never heard anything so beautiful.  Occasionally Maggie will hold on to one of us while she seems to see through the eyes of her familiar, a moth that hides in her hair.
          <br /><br />
          
          <br /><br />
          As we arrived at the gates of Tresen, there seemed to be an increase in security - no doubt due to the ominous path of darkness leading into town, but all I could think about was getting back to my things. The neighboring merchants, always so kind to me, protected my things while I was away. To return their favor I bought some garlic and tea from them before packing up my shop onto my shell.  During this time Maggie's entire demeanor chagned as she approached some guards seemingly requesting an audience with Tresen's High Council of the Nine. These fellow travelers continue to surprise me every day. 
          <br /><br />

          The council meeting was led by an old dwarf, and you know when a dwarf is old, they are <i>reeaally</i> old, you know? Maggie, in her sudden diplomatic manner, recounted the tale of our interaction with Boryet - she made sure to leave out how I teleported in. I wonder if I will ever figure out what really happened.  I wonder if Kian is okay. The old dwarf tasked us with investigating the temple.  Apparently the path of darkness leads directly to it and since appearing there rituals and blessings have been failing. An aasimar has been assigned to us as our escort until we return with our findings.
        </p>
        <p className="entry__signature">Dwayne the Shell</p>
      </div>

    </div>
  )
}

export default J04