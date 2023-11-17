import React from 'react'
import "../styles/PrizeTracks.css"
import Nintendo from "../assets/Nintendo.png"
import Bose from "../assets/Bose.png"
import Projector from "../assets/Projector.png"
import Instax from "../assets/Instax.png"

const PrizeTracks = () => {
  return (
    <>
      <h1>Prize Tracks</h1>
      <p>
        There are four separate tracks with their appropriate prizes. Projects will be evaluated on the following categories along with specific criteria for each track:
      </p>
      <ul id='prize-tracks'>
        <li>Design/Design process</li>
        <li>Code quality</li>
        <li>Pitch and demo</li>
        <li>Impactfulness</li>
        <li>Team takeaways</li>
      </ul>

      {/* 4 Categories */}
      <div>
        {/* Best Overall */}
        <div>
          <h2>Best Overall</h2>
          <p>
            This team brings it all. Their hack not only is aesthetically pleasing but also promises to bring positive change to our society. With its awesome marketability and innovative positioning, this hack steals many hearts.
          </p>
          <div className='prize-tracks-container'>
            <div>
              <h3>Focus on:</h3>
              <ul>
                <li>Encompassing theme</li>
                <li>Creativity/originality</li>
                <li>Scalable/marketability</li>
              </ul>
            </div>
            <div className='prize-tracks-best-overall'>
              <h3>Prize: <span>Nintendo Swith Lite</span></h3>
              <img
                src={Nintendo}
                alt='Nintendo Switch Lite'
              />
            </div>
          </div>
        </div>

        {/* Best Impact */}
        <div>
          <h2>Best Impact</h2>
          <p>
            This team has built a product that influences lives and brings a positive change to its society. Usually inspired by real world regional problems, this final product is more than a hack.
          </p>
          <div className='prize-tracks-container'>
            <div>
              <h3>Focus on:</h3>
              <ul>
                <li>Accessibility</li>
                <li>Contribution to society</li>
                <li>Scope and complexity of the problem</li>
              </ul>
            </div>
            <div className='prize-tracks-best-impact'>
              <h3>Prize: <span>Bose Micro Bluetooth Speaker</span></h3>
              <img
                src={Bose}
                alt='White Bose Micro Bluetooth Speaker'
              />
            </div>
          </div>
        </div>

        {/* Best Design */}
        <div>
          <h2>Best Design</h2>
          <p>
            This hack weaves a strong story of its own with breathtaking visuals and intuitive user experiences. These hackers know their sans from their san-serifs.
          </p>
          <div className='prize-tracks-container'>
            <div>
              <h3>Focus on:</h3>
              <ul>
                <li>Low and high level design decision</li>
                <li>User experience</li>
                <li>User interface</li>
              </ul>
            </div>
            <div className='prize-tracks-best-design'>
              <h3>Prize: <span>Projector</span></h3>
              <img
                src={Projector}
                alt='White projector'
              />
            </div>
          </div>
        </div>

        {/* Best AI/Software */}
        <div>
          <h2>Best AI/Software</h2>
          <p>
            This team excels in software and/or AI development, showing exceptional coding skills and innovative thinking. With their groundbreaking solution, they stand out as trailblazers in the filed,
          </p>
          <div className='prize-tracks-container'>
            <div>
              <h3>Focus on:</h3>
              <ul>
                <li>Documentation</li>
                <li>Consistent coding style</li>
              </ul>
            </div>
            <div className='prize-tracks-best-software'>
              <h3>Prize: <span>Projector</span></h3>
              <img
                src={Instax}
                alt='White Fujifilm Instax Mini'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrizeTracks