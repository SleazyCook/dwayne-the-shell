import React from 'react'
import { Link } from 'react-router-dom'

function Backstory() {
  return (
    <div className="backstory">
      
      <h2 className="heading-secondary"><Link to="/navigate">Backstory</Link></h2>

      <br /><br />
      <p className="backstory__story">
      Dwayne the Shell was raised to be a competent hunter. Upon reaching adulthood, he married the love of his life, Shelly. While away on a group hunt, a dragon attacked his home killing his loved ones one by one. Upon returning to the carnage, Dwayne was knocked unconscious during the fight and awoke to find that he was the only tortle left. He was shell shocked. <br /><br />
      With his home destroyed, Dwayne moved into the city where he began looking for work.  He had to overcome some prejudice when an old dragonborn was the only one to take him in to work in her shop.  Drambas, the old shopkeeper, taught him the trick of the trade. When she fell ill, Dwayne did what he could to maintain the shop by himself, but in order to afford appropriate care for Drambas he offered his services as a mercenary for a traveling group of adventurers. He made enough gold to go home and take care of Drambas’s health and run the shop for the rest of her life, but upon his return to the shop he found that the old woman had passed in her sleep. <br /><br />
	    Dwayne packed up what he could and left town to work as a traveling merchant. While he has made warm connections with customers and other merchants alike, Dwayne tries to keep people at arm’s length. That being said , because of his remorse for not being able to save those he loved does cause him to leap at the chance to help strangers. He still picks up mercenary work to stay afloat financially.  As a result of being very skilled in combat, there are some shady individuals who often seek him out for dangerous and morally shifty jobs. 

      </p>
      
      </div>
  )
}

export default Backstory