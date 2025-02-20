import { Github, Book, Linkedin } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="mb-4 max-w-6xl mx-auto bg-white text-black p-4 lg:p-8 rounded-lg">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-center">About Me</h1>
        <p className="text-gray-800 text-lg text-left">
          I am a researcher at MIT (CoCoSci) studying how people perceive, learn, and reason effectively given limited cognitive resources. I did my graduate work with Steve Piantadosi at UC Berkeley. 
          My thesis work was aimed at understanding the mechanisms underlying visual numerosity perception. I've used behavioral experiments and computational models to link the visual information people gather from a scene to their ultimate perceptions of quantities. 
          In one project, I showed that the psychophysics of number, including "subitizing" small quantities and Weber's law for larger quantities, reflects optimal inference under a limited informational capacity. 
          See an explainer <a href="http://colala.berkeley.edu:3838/unified_model/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">here</a>.
          You can read a précis of my thesis <a href="papers/CHEYETTE_SAMUEL_PRECIS.pdf" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">here</a>.
        </p>

        <p className="text-gray-800 text-lg text-left">
            My recent projects explore how people learn geometric patterns, reason about physical systems, and actively seek information in ways that respect their cognitive limitations. 
            One direction I am particularly excited about is modeling and experimentally testing how people reason in complex settings without holding many pieces of information in memory simultaneously.

        </p>

        <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-8 mt-6">
          <div className="text-left">
            <h1 className="font-semibold text-xl">Interests</h1>
            <ul className="list-disc list-inside text-gray-800 text-lg">
              <li>Bayesian & information-theoretic modeling</li>
              <li>Visual perception</li>
              <li>Numerical cognition</li>
              <li>Active information-seeking</li>
              <li>Concept learning</li>
            </ul>
          </div>
          <div className="text-left">
            <h1 className="font-semibold text-xl">Education</h1>
            <ul className="list-none text-gray-800 text-lg">
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap mt-1 h-5 w-5 text-gray-600">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                <div>
                  Postdoctoral Researcher, 2022-Present
                  <div className="text-sm text-gray-600">MIT, Computational Cognitive Science Lab</div>
                </div>
              </li>
              <br/>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap mt-1 h-5 w-5 text-gray-600">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                <div>
                  PhD in Psychology, 2016-2022
                  <div className="text-sm text-gray-600">UC Berkeley, Computation and Language Lab</div>
                </div>
              </li>
              <br/>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap mt-1 h-5 w-5 text-gray-600">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                <div>
                  BS in Cognitive Science, 2012-2016
                  <div className="text-sm text-gray-600">Carnegie Mellon University</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
} 