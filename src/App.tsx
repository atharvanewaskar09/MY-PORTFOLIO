import type { ReactNode } from "react"
import MascotPortfolioHero from "@/components/ui/mascot-portfolio-hero"

const PROJECTS = [
  {
    name: "Smart & Secure Inventory Management System",
    stack: "ESP32 · IoT · PCB Design · Firebase · ML",
    points: [
      "Real-time stock monitoring with ESP32 and ultrasonic sensors.",
      "Custom 2-layer PCB feeding a Firebase-backed web dashboard.",
      "ML model forecasting seasonal demand from historical stock data.",
    ],
  },
  {
    name: "NutriVision AI",
    stack: "Gemini API · Firebase",
    points: [
      "Estimates calories and nutrition from a photo of a meal via the Gemini API.",
      "Firebase auth and cloud storage track meal history and progress over time.",
    ],
  },
  {
    name: "Blood Detection using Machine Learning",
    stack: "Python · Machine Learning",
    points: [
      "Classifies fingerprint images across 8 blood-group classes.",
      "300+ images preprocessed, with tuning and cross-validation for accuracy.",
    ],
  },
  {
    name: "Bidirectional Visitor Counter",
    stack: "8051 Microcontroller · Embedded C",
    points: [
      "Real-time entry/exit tracking with dual IR sensors.",
      "Interrupt-driven logic for accurate direction detection.",
    ],
  },
]

const SKILLS: [string, string][] = [
  ["Languages", "C++, Java, Python, SQL, C"],
  ["Programming & CS", "Data Structures & Algorithms, OOP, Operating Systems, Computer Networks"],
  ["Development", "REST APIs, API Integration, Firebase, Git, GitHub"],
  ["Tools", "VS Code, Google AI Studio, MySQL"],
  ["Hardware", "ESP32, 8051, PCB Designing"],
]

const ACHIEVEMENTS = [
  "Selected for the DSE trainee role at Infosys",
  "Hacknexus 2.0 AI Hackathon — Special Mention Winner, Electrical Department, YCCE Nagpur",
  "Technical Member at YASH — organized and led technical events at YCCE Nagpur",
  "TATA Forage — Data Visualisation: Empowering Business with Effective Insights",
  "TATA Forage — GenAI Powered Data Analytics",
  "IETE PCB Design Certification — YCCE Nagpur, Mar. 2025",
]

function SectionLabel({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline gap-3 mb-8">
      <span className="font-mono text-sm text-accent">{n}</span>
      <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tight">{children}</h2>
    </div>
  )
}

export default function App() {
  return (
    <div className="bg-background text-foreground">
      <MascotPortfolioHero
        height="100svh"
        minHeight="620px"
        index="SDE/26"
        discipline="Software Development"
        tagline="Build it, ship it"
        collection={["Software", "Developer"]}
        reel={["4 shipped projects", "Full-stack + embedded"]}
        year="2026"
        initials="AN"
        badge="Hire me"
        line2="Software"
        line3="Developer"
        word="Atharva"
        verticalTag="ETC"
        bracketed="N"
        seekingLabel="Seeking*"
        seeking="SDE Roles"
        href="google"
        services={["Full-Stack Dev", "Embedded Systems", "Machine Learning", "IoT & PCB Design"]}
        greetings={[
          "Hey, I'm Atharva!",
          "Final-year ETC, building software.",
          "You can poke around the projects below.",
          "You can stop poking me now!",
        ]}
      />

      <main className="mx-auto max-w-5xl px-6 md:px-10 py-24 space-y-24">
        {/* About */}
        <section>
          <SectionLabel n="01">About</SectionLabel>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I'm a final-year B.Tech Electronics &amp; Telecommunication Engineering student at
            Yeshwantrao Chavan College of Engineering, Nagpur (2023–2027), minoring in Solar
            Engineering, CGPA 8.01. I build across the stack — from firmware on an ESP32 or 8051 up
            through REST APIs and ML models to a dashboard someone actually opens — and I'm looking
            for a Software Developer role where that range is useful.
          </p>
        </section>

        {/* Experience */}
        <section>
          <SectionLabel n="02">Experience</SectionLabel>
          <div className="flex flex-col gap-1 border-l-2 border-foreground pl-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-xl font-bold">Trainee — Electronics &amp; Telecommunication</h3>
              <span className="font-mono text-sm text-muted-foreground">Jun. 2025 – Jul. 2025</span>
            </div>
            <p className="text-sm font-medium text-accent mb-2">Ketron Industries, Hingna, Nagpur</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Assisted in testing and maintenance of industrial electronic control panels.</li>
              <li>Gained hands-on exposure to wiring, component identification, and industrial processes.</li>
              <li>Maintained inspection logs and supported day-to-day shop-floor operations.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section>
          <SectionLabel n="03">Projects</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <div
                key={p.name}
                className="rounded-lg border-2 border-foreground bg-card p-6 flex flex-col gap-3"
              >
                <h3 className="text-lg font-bold leading-snug">{p.name}</h3>
                <p className="font-mono text-xs text-accent-foreground bg-accent/40 inline-block w-fit px-2 py-1 rounded">
                  {p.stack}
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <SectionLabel n="04">Skills</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
            {SKILLS.map(([label, value]) => (
              <div key={label} className="flex flex-col gap-1 border-b border-border pb-3">
                <span className="text-xs font-bold uppercase tracking-wide text-accent">{label}</span>
                <span className="text-muted-foreground">{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <SectionLabel n="05">Education</SectionLabel>
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <div>
                <h3 className="text-lg font-bold">Yeshwantrao Chavan College of Engineering, Nagpur</h3>
                <p className="text-muted-foreground">B.Tech, Electronics &amp; Telecommunication Engineering — Minor in Solar Engineering — CGPA 8.01</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground">Aug. 2023 – 2027</span>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <div>
                <h3 className="text-lg font-bold">M.K. Umathe College, Nagpur</h3>
                <p className="text-muted-foreground">HSC — 12th State Board — 87%</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground">Jun. 2020 – Mar. 2022</span>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <div>
                <h3 className="text-lg font-bold">South Point High School, Nagpur</h3>
                <p className="text-muted-foreground">SSC — 10th State Board — 90%</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground">Jun. 2019 – Mar. 2020</span>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section>
          <SectionLabel n="06">Achievements &amp; Certifications</SectionLabel>
          <ul className="space-y-2">
            {ACHIEVEMENTS.map((a) => (
              <li key={a} className="flex gap-3 items-start">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent shrink-0" />
                <span className="text-muted-foreground">{a}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Contact */}
      <footer className="border-t-2 border-foreground">
        <div className="mx-auto max-w-5xl px-6 md:px-10 py-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tight mb-3">
              Let's talk
            </h2>
            <p className="text-muted-foreground max-w-md">
              Open to Software Developer roles — reach out and I'll get back to you.
            </p>
          </div>
          <div className="flex flex-col gap-2 font-mono text-sm">
            <a className="hover:text-accent transition-colors" href="mailto:atharva.newaskar09@gmail.com">
              atharva.newaskar09@gmail.com
            </a>
            <a className="hover:text-accent transition-colors" href="tel:+917499413576">
              +91 74994 13576
            </a>
            <a className="hover:text-accent transition-colors" href="https://www.linkedin.com/in/atharva-newaskar-455723258" target="_blank" rel="noreferrer">
              linkedin.com/in/atharva-newaskar-455723258
            </a>
            <a className="hover:text-accent transition-colors" href="https://github.com/atharvanewaskar09" target="_blank" rel="noreferrer">
              github.com/atharvanewaskar09
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
