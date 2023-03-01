import React from 'react'

function Footer() {
  return (
    <div className="footer">

      <div className="footer__logo-box">
        <span>Developed by </span>
        <span className="footer__logo-box--author">Drewford</span>
      </div>

      <div className="footer__flexbox">

        <div className="footer__flexbox-item">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item"><a href="
              https://discord.gg/zfMhtxPGTZ" className="footer__link" target="_blank">
                Discord Group</a></li>

              <li className="footer__item"><a href="
              https://app.roll20.net/campaigns/details/14289848/flame" className="footer__link" target="_blank">
                Roll20 Campaign</a></li>

              <li className="footer__item"><a href="
              https://www.dndbeyond.com/characters/87428291" className="footer__link" target="_blank">
                D&D Beyond</a></li>

              <li className="footer__item"><a href="
              https://developedbydrewford.netlify.app" className="footer__link" target="_blank">
                Developed by Drewford</a></li>

            </ul>
          </div> {/* Footer Navigation End */}
        </div> {/* Flexbox Item End */}

        <div className="footer__flexbox-item">
          <div className="footer__copyright">
            <p>Built by <a href="https://developedbydrewford.netlify.app" className="footer__link" target="_blank">Andrew Cook</a> for a custom campaign he is playing.  This website is intended for recreational use by players of this specific campaign.  <a href="https://www.google.com/search?client=opera-gx&q=curse+of+strahd&sourceid=opera&ie=UTF-8&oe=UTF-8" className="footer__link" target="_blank">Dungeons & Dragons</a> is an official tabletop game by Wizards of the Coast. </p>
          </div>
        </div>
      </div> {/* Flexbox End */}

    </div>
  )
}

export default Footer