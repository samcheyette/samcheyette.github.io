'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

type ExplainerEntry = {
  title: string;
  figure: { src: string; alt: string; caption: string };
  body: string[];
  pdfHref?: string;
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
    body: [
      "Classic accounts of information-seeking predict that learners should choose queries with the highest expected information gain—maximizing belief change under ideal reasoning. We hypothesized, however, that people might aim instead to maximize subjectively informative evidence: tests whose outcomes are easy to represent given finite memory. To capture this idea, we developed a computational model in which query selection balances potential information gain against the cognitive cost of encoding and reasoning over the resulting evidence.",
      "Under this account, a tradeoff emerges between the informativeness of a query and the interpretability of the resulting evidence: highly informative queries reduce uncertainty quickly but often demand more complex intermediate representations, whereas less informative queries are easier to encode and reason about. We evaluated this model in a series of hidden-rule discovery experiments where participants proposed queries to uncover a secret pattern. Across six experiments, we found strong empirical support for this account: people systematically favor queries whose answers are easier to interpret, even when those queries are objectively less informative. Using detailed logs of every guess and intermediate inference participants made, we found that this model accurately captures individual sequences of queries, learning curves, and adaptation over time. Our results show that people actively shape the evidence they gather to match the limits of their own representational capacity, rather than seeking to maximize objective information gain.",
    ],
    pdfHref: "papers/cheyette_information_seeking_2025.pdf",
  },
  {
    title: "A serial, foveal accumulator underlies approximate numerical estimation",
    figure: {
      src: "/figures/pnas_fixations.png",
      alt: "Example fixation paths",
      caption:
        "Example fixation paths. Bottom labels show N (dots shown), F (dots foveated), and E (participant estimate).",
    },
    body: [
      "In this paper, we examined the visual algorithms underlying approximate numerical estimation—the ability to estimate quantities without counting. Classic models assume a fast, parallel mechanism, but we considered a broader family of algorithms that allow integration of information across eye movements.",
      "Using eye-tracking during estimation and discrimination tasks, we fit models that allowed for contributions from foveated dots, peripheral dots, re-fixations, and adjustments for sampled area. The best-fitting algorithm was a foveal accumulation process, where estimates are built up largely by sequential fixations: foveated dots contribute strongly, peripheral dots only weakly, and people neither double-count nor correct for limited coverage. This finding reframes ANS performance as the output of an attention-driven serial process, rather than a purely parallel 'number sense.'",
    ],
    pdfHref: "papers/cheyette_piantadosi_2019.pdf",
  },
  {
    title: "A unified account of numerosity perception",
    figure: {
      src: "/figures/nhb_unified_account_fig.png",
      alt: "Probability of numeric responses over time for N=3, 6, 9 with model fits",
      caption:  "The probability (y-axis) of numeric responses (x-axis) over presentation times (faceted) for N=3, N=6, and N=9. Bars are shown for the human data and lines are shown for the model predictions.",
    },
    body: [
      "People can instantly recognize up to about four objects with near-perfect accuracy ('subitizing'), but beyond that, our estimates become noisier, with errors growing roughly in proportion to the number. Traditionally, psychologists explained this discontinuity by assuming two separate systems for small and large numbers. In this paper, we show that a single system, constrained by limited information-processing capacity, naturally produces both patterns.",
      "We derived how an optimal perceptual system should represent quantity under a finite 'bit budget.' This model explains subitizing, scalar variability, underestimation biases, and sensitivity to presentation time and contrast. We ran an estimation task where we modulated the amount of available information by varying the exposure time of displays as well as the display contrast. The data matched our model closely: with more available information, estimates became sharper, the subitizing range widened, and biases diminished.",
    ],
    pdfHref: "papers/cheyette_piantadosi_2020.pdf",

  }
  ,
  {
    title: "Spatiotemporal program learning across development and species",
    figure: {
      src: "/figures/program-learning-and-examples.png",
      alt: "Program induction model and participant predictions across timepoints",
      caption:
        "Left: Illustration of a program induction model predicting how a 2-D sequence unfolds. Right: Predictions at selected timepoints from each population; older children and adults show more structured predictions; younger children and monkeys tend to track the locally linear trend.",
    },
    body: [
      "In a collaboration with Tracey Mills, Josh Tenenbaum, and others, we examined program learning abilities across development and species using a 2‑D sequence prediction task. We found that a probabilistic program‑learning model with motor operators (e.g., move and turn) and higher‑level control operators (e.g., concatenation, repetition, sub‑routines) best explains adult learning speed and error patterns compared to a range of alternative inductive models.",
      "Amazingly, children as young as four showed adult‑like program induction on our task, learning complex algorithms to model and predict patterns on the fly. However, younger children (mostly 3‑year‑olds) and monkeys primarily used simpler statistical extrapolation strategies—even after tens of thousands of training examples for monkeys. These findings highlight statistical learning mechanisms shared across development and species, alongside a potentially uniquely human capacity for structured program learning that emerges early in development.",
    ],
    pdfHref: "papers/mills_et_al_2025.pdf",
  }
]

export default function Explainer() {
  const [openValue, setOpenValue] = useState<string | undefined>(undefined)

  return (
    <section id="explainer" className="mb-16 max-w-5xl mx-auto bg-white text-black p-8 rounded-lg space-y-8">
      <h2 className="text-3xl font-bold mb-2 text-center">Project Highlights</h2>

      <Accordion type="single" collapsible value={openValue} onValueChange={setOpenValue} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {explainers.map((item, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <Card id={`explainer-item-${idx}`} className="shadow-sm border border-gray-200 hover:shadow-md transition">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <figure>
                  <div className={`flex justify-center transition-transform duration-300 ${openValue === `item-${idx}` ? 'scale-105' : 'scale-80'}`}>
                    <Image
                      src={item.figure.src}
                      alt={item.figure.alt}
                      width={420}
                      height={300}
                      className="rounded-md border"
                    />
                  </div>
                  <figcaption className="mt-2 text-sm text-gray-600 text-center">
                    {item.figure.caption}
                  </figcaption>
                </figure>

                <div className="flex justify-center">
                  <AccordionTrigger className="w-auto px-0 text-sm text-blue-700 hover:text-blue-900">
                    Read more
                  </AccordionTrigger>
                </div>

                <AccordionContent>
                  <div className="mt-1 space-y-3 text-[15px] leading-7 text-gray-800 font-serif" style={{ fontFamily: 'Georgia, serif' }}>
                    {item.body.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                    {item.pdfHref && (
                      <div className="pt-1">
                        <a
                          href={item.pdfHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-700 hover:text-blue-900 underline"
                        >
                          Paper (PDF) →
                        </a>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </CardContent>
            </Card>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}


