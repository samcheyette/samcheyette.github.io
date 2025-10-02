'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ExplainerEntry = {
  title: string;
  figure: { src: string; alt: string; caption: string };
  body: string;
};

const explainers: ExplainerEntry[] = [
  {
    title: "Human active learning balances informativeness and interpretability",
    figure: {
      src: "/figures/info_per_query.png",
      alt: "Informativity-interpretability tradeoff illustration",
      caption:
        "An illustration of the informativity-interpretability tradeoff. Paths show sequences of intermediate representations from uncertainty to certainty. Higher-information queries reach certainty in fewer steps but require more complex intermediate representations.",
    },
    body:
      "Classic accounts of information-seeking predict that learners should choose queries with the highest expected information gain—maximizing belief change under ideal reasoning. We hypothesized, however, that people might aim instead to maximize subjectively informative evidence: tests whose outcomes are easy to represent given finite memory. To capture this idea, we developed a computational model in which query selection balances potential information gain against the cognitive cost of encoding and reasoning over the resulting evidence. Under this account, a tradeoff emerges between the informativeness of a query and the interpretability of the resulting evidence: highly informative queries reduce uncertainty quickly but often demand more complex intermediate representations, whereas less informative queries are easier to encode and reason about. We evaluated this model in a series of hidden-rule discovery experiments where participants proposed queries to uncover a secret pattern. Across six experiments, we found strong empirical support for this account: people systematically favor queries whose answers are easier to interpret, even when those queries are objectively less informative. Using detailed logs of every guess and intermediate inference participants' made, we found that this model accurately captures individual sequences of queries, learning curves, and adaptation over time. Our results show that people actively shape the evidence they gather to match the limits of their own representational capacity, rather than seeking to maximize objective information gain.",
  },
  {
    title: "A serial foveal accumulator underlies approximate estimation",
    figure: {
      src: "/figures/pnas_fixations.png",
      alt: "Example fixation paths",
      caption:
        "Example fixation paths. Bottom labels show N (dots shown), F (dots foveated), and E (participant estimate).",
    },
    body:
      "In this paper, we examined the visual algorithms underlying the approximate numerical \
       estimation—the ability to estimate quantities without counting. Classic models assume a fast, \
       parallel mechanism, but we considered a broader family of algorithms that allow integration of information across eye movements. \
       Using eye-tracking during estimation and discrimination tasks, we fit models that allowed for contributions from foveated dots, \
       peripheral dots, re-fixations, and adjustments for sampled area. The best-fitting algorithm was a foveal accumulation process, \
       where estimates are built up largely by sequential fixations: foveated dots contribute strongly, peripheral dots only weakly, and people neither double-count nor correct for limited coverage. This finding reframes ANS performance as the output of an attention-driven serial process, rather than a purely parallel “number sense.”",
  },
  {
    title: "A unified account of numerosity perception",
    figure: {
      src: "/figures/nhb_unified_account_fig.png",
      alt: "Probability of numeric responses over time for N=3, 6, 9 with model fits",
      caption:
        "The probability (y-axis) of numeric responses (x-axis) over presentation times (faceted) for N=3, N=6, and N=9. Bars are shown for the human data and lines are shown for the model predictions. With longer exposure durations ($>$160ms), people's estimates are exact for small quantities (e.g. N=3) and then increasingly inexact for larger quantities (e.g., N=6 and N=9); with shorter durations, people are inexact even for small quantities. The model recapitulates the shape of human response distributions and how they are modulated both by cardinality and exposure duration.",
    },
    body: "People can instantly recognize up to about four objects with near-perfect accuracy (“subitizing”), but beyond that, our estimates become noisier, with errors growing roughly in proportion to the number. Traditionally, psychologists explained this discontinuity by assuming two separate systems for small and large numbers. In this paper, we show that a single system, constrained by limited information-processing capacity, naturally produces both patterns. Using information theory, we derived how an optimal perceptual system should represent quantity under a finite “bit budget.” This model explains subitizing, scalar variability, underestimation biases, and sensitivity to presentation time and contrast. We ran an estimation task where we modulated the amount of available information by varying the exposure time of displays as well as the display contrast. The data matched our model closely: with more available information, estimates became sharper, the subitizing range widened, and biases diminished. "

  }
]

export default function Explainer() {
  return (
    <section id="explainer" className="mb-16 max-w-5xl mx-auto bg-white text-black p-8 rounded-lg space-y-8">
      {explainers.map((item, idx) => (
        <Card key={idx} className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">{item.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <figure>
              <div className="flex justify-center">
                <Image
                  src={item.figure.src}
                  alt={item.figure.alt}
                  width={600}
                  height={400}
                  className="rounded-md border"
                />
              </div>
              <figcaption className="mt-2 text-sm text-gray-700 text-center">
                {item.figure.caption}
              </figcaption>
            </figure>
            <p className="leading-6 text-gray-800">{item.body}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}


