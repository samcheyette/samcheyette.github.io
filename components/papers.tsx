'use client';

interface Paper {
  title: string;
  authors: string;
  year: number | string;
  venue: string;
  status?: string;
  pdf?: string;
}

const selectedPapers: Paper[] = [
  {
    title: "Limited information-processing capacity in vision explains number psychophysics",
    authors: "Cheyette, S. J., Wu, S., & Piantadosi, S. T.",
    year: 2024,
    venue: "Psychological Review",
    pdf: "papers/cheyette_wu_piantadosi_2024.pdf"
  },
  {
    title: "Response to difficulty drives variation in IQ test performance",
    authors: "Cheyette, S. J., Wu, S., & Piantadosi, S. T.",
    year: 2024,
    venue: "Open Mind",
    pdf: "papers/cheyette_piantadosi_2024_response.pdf"
  },
  {
    title: "Spatiotemporal pattern learning as probabilistic program synthesis",
    authors: "Mills, T., Tenenbaum, J. B., & Cheyette, S. J.",
    year: 2024,
    venue: "Neural Information Processing Systems",
    pdf: "papers/mills_tenenbaum_cheyette_2024_spatiotemporal.pdf"
  },
  {
    title: "A unified account of numerosity perception",
    authors: "Cheyette, S. J. & Piantadosi, S. T.",
    year: 2020,
    venue: "Nature Human Behaviour",
    pdf: "papers/cheyette_piantadosi_2020.pdf"
  },
  {
    title: "Recursive sequence generation in monkeys, children, and native Amizonians",
    authors: "Ferrigno, S., Cheyette, S. J., Piantadosi, S. T., & Cantlon, J.",
    year: 2020,
    venue: "Science Advances",
    pdf: "papers/ferrigno_cheyette_piantadosi_cantlon_2020.pdf"
  },
  {
    title: "A primarily serial, foveal accumulator underlies approximate numerical estimation",
    authors: "Cheyette, S. J. & Piantadosi, S. T.",
    year: 2019,
    venue: "Proceedings of the National Academy of Sciences",
    pdf: "papers/cheyette_piantadosi_2019.pdf"
  }
];

export default function Papers() {
  return (
    <section id="papers" className="mb-16 max-w-5xl mx-auto bg-white text-black p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Selected Publications</h2>
      <div className="space-y-6">
        {selectedPapers.map((paper, index) => (
          <div key={index} className="group hover:bg-gray-100 p-4 rounded-lg transition-colors">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="font-medium text-xl text-gray-800">{paper.title}</h3>
                <p className="text-gray-500 mt-1 text-base">{paper.authors}</p>
                <p className="text-gray-500 mt-1 text-base">
                  {paper.venue} ({paper.year})
                  {paper.status && <span className="italic ml-2">{paper.status}</span>}
                </p>
              </div>
              {paper.pdf && (
                <a
                  href={paper.pdf}
                  className="text-blue-600 hover:text-blue-800 text-sm whitespace-nowrap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PDF →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

