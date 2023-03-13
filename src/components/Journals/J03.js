import React from 'react'
import { Link } from 'react-router-dom'

function J03() {
  return (
    <div className="entry">

      <div className="entry__main">
        <h3 classNamne="heading-tertiary">
          <Link className="heading-tertiary__link" to="/navigate">
            <span className="heading-tertiary--main">
              Boryet and the Obelisk
            </span>
            <span className="heading-tertiary--sub">
              02/25/2023
            </span>
          </Link>
        </h3>

        <p className="entry__passage">
          After suddenly appearing in a strange camp, the man who was teleporting with me disappeared seemingly into thin air. The camp was littered with dead bodies and two ladies who didn't seem to know what was going on either. Some wolves jumped out and attacked us biting one pretty lady pretty bad. I stepped in front of her with my sheild and spear and defend her, although her magical powers seemed to deal quite a bit of damage as well. The other lady did some acrobatics positioning herself behind a wolf priming herself for a sneak attack. When the beasts were slain, another strange woman appeared atop one of the tents. 
          <br /><br />


          
          <br /><br />
          The woman introduced herself as Boryet and indicated that there was something worth knowing about me. I wish I knew what it was! I was terrified. It seemed like she was eating the <i>souls</i> of those poor fellas who perished before I got there. Those beasts even returned to her as smokey stuff. She said some mumbo jumbo like "does a lion concern themselves with the lives of sheep?" Whatever that means, I don't trust her and I ain't gonna fuck around with her neither. As she vanished away an obsideian obelisk appeared right where she was and stuff started changing all around as a thin darkness started to rise from the obelisk leading away somewhere.
          <br /><br />
        </p>
        <p className="entry__signature">Dwayne the Shell</p>
      </div>

    </div>
  )
}

export default J03