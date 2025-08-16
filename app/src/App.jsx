import {
  CalendarCheck2,
  ClipboardList,
  FileText,
  Handshake,
  Mail,
  MapPin,
  Phone,
  Receipt,
  TrendingUp,
  Users,
  Wallet,
  BarChart3,
  FileSpreadsheet,
  Lightbulb,
  Star
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Section from "./components/Section.jsx";
import { Button } from "./components/ui/button.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card.jsx";
import { Badge } from "./components/ui/badge.jsx";
import TestimonialCard from "./components/TestimonialCard.jsx";

const calendly = "https://calendly.com/your-calendly/15min";
const formspree = "https://formspree.io/f/xblkbpav";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export default function App() {
  return (
    <>
      <Navbar />
      <header id="home" className="section relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.10]" aria-hidden="true">
          <div className="mx-auto h-full max-w-6xl bg-[radial-gradient(900px_450px_at_50%_-50%,#d4af37,transparent)]" />
        </div>
        <div id="main" className="container-section py-20 sm:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div {...fadeIn}>
              <p className="text-sm font-medium tracking-wide text-slate-600">Accurate. Reliable. On Time.</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                Full-charge bookkeeping & management reporting for growing teams.
              </h1>
              <p className="mt-4 max-w-prose text-lg text-slate-700">
                Reliable month-end close, clean reconciliations, and decision-ready reporting in QuickBooks Online or Xero.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <motion.a href={calendly} target="_blank" rel="noopener" whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg">Book a Free 15-min Consultation</Button>
                </motion.a>
                <motion.a href="#work" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" variant="outline">See Case Studies</Button>
                </motion.a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
                <span className="inline-flex items-center gap-1"><MapPin size={16} /> Philippines (UTC+8)</span>
                <span className="inline-flex items-center gap-1"><ClockIcon /> Works EST/CST hours</span>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="md:justify-self-end">
              <Card className="shadow-elevate">
                <CardHeader>
                  <CardTitle>What I help with</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 text-sm text-slate-700">
                    <li>• Monthly close & reconciliations</li>
                    <li>• AR/AP and clean expense coding</li>
                    <li>• Management reports & KPIs</li>
                    <li>• Cleanups, audit prep, and migrations</li>
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Badge variant="soft">QBO ProAdvisor</Badge>
                    <Badge variant="soft">Xero Advisor</Badge>
                    <Badge variant="soft">IFRS / GAAP</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </header>

      <Section id="services" title="Services" subtitle="Bookkeeping and accounting services tailored to startups and small businesses in the US and Canada.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Service icon={Receipt} title="Monthly bookkeeping and reconciliations" />
          <Service icon={Users} title="Accounts payable and receivable management" />
          <Service icon={CalendarCheck2} title="Payroll processing support" />
          <Service icon={Wallet} title="Expense tracking and financial organization" />
          <Service icon={ClipboardList} title="Month-end and year-end close" />
          <Service icon={FileText} title="Audit preparation and cleanup projects" />
          <Service icon={BarChart3} title="Management reporting and KPI tracking" />
          <Service icon={FileSpreadsheet} title="Tax compliance support (HST, GST, US/CA filings)" />
          <Service icon={Lightbulb} title="Advisory and process improvement" />
        </div>
        <p className="mt-8 text-center text-slate-600">Every business is unique. Let’s discuss a customized plan that fits your needs.</p>
      </Section>

      <Section id="work" title="Selected Work" subtitle="Recent outcomes from client engagements.">
        <div className="grid gap-6 md:grid-cols-2">
          <CaseStudy text="Cleared 3 years of backlogged bookkeeping in 45 days; restored audit readiness." />
          <CaseStudy text="Reduced month-end close from 15 to 5 days with standardized workflows." />
          <CaseStudy text="Improved AR collections by 17% through streamlined invoicing and reminders." />
          <CaseStudy text="Cut financial statement variance by 98% through meticulous reconciliation." />
        </div>
      </Section>

      <Section id="testimonials" title="What Clients Say" subtitle="Trust built on accuracy, consistency, and proactive communication.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard rating={5} name="COO, Real Estate Firm (US)" text="Edz is meticulous and reliable — our month-end close has never been smoother." />
          <TestimonialCard rating={5} name="Founder, Tech Startup (Canada)" text="She caught and fixed discrepancies our previous accountant missed." />
          <TestimonialCard rating={5} name="Mick P., Business Owner" text="Thanks to Edz, our QuickBooks management reports were corrected and successfully accepted by the Hong Kong institution." />
        </div>
      </Section>

      <Section id="skills" title="Skills & Tools" subtitle="Practical expertise to keep books accurate and actionable.">
        <div className="flex flex-wrap gap-2">
          {[
            "QuickBooks Online",
            "Xero",
            "Excel / Google Sheets",
            "Bank & CC Reconciliations",
            "AR / AP",
            "Payroll Coordination",
            "IFRS / GAAP",
            "Management Reporting",
            "KPI Dashboards",
            "Cleanups & Catch-ups",
            "Intuit Apps",
            "Zapier Basics"
          ].map((s) => (
            <Badge key={s} variant="outline">{s}</Badge>
          ))}
        </div>
      </Section>

      <Section id="process" title="Process" subtitle="Clear, collaborative steps from day one.">
        <ol className="grid gap-6 md:grid-cols-2">
          <Step number={1} title="Discovery Call" desc="Needs assessment and scope discussion." icon={Handshake} />
          <Step number={2} title="File Review" desc="Historical cleanup or new system setup." icon={FileText} />
          <Step number={3} title="Monthly Cycle" desc="Reconciliations, AR/AP, payroll, close, reporting." icon={CalendarCheck2} />
          <Step number={4} title="Reporting" desc="Management reports, KPIs, insights, commentary." icon={TrendingUp} />
          <Step number={5} title="Advisory Support" desc="Recommendations to improve efficiency and decision-making." icon={Lightbulb} />
        </ol>
      </Section>

      <Section id="faq" title="FAQ" subtitle="Answers to common questions.">
        <div className="grid gap-4">
          <FAQ q="Do you work with both cash and accrual basis?" a="Yes. We’ll pick the right approach for your reporting and tax needs." />
          <FAQ q="Which industries do you support?" a="Technology, real estate, retail/e‑commerce, professional services, nonprofits, and more." />
          <FAQ q="Can you work in our existing file?" a="Absolutely. I can join your current QuickBooks Online or Xero file, or set up a new one." />
          <FAQ q="How do we collaborate?" a="We set a monthly cadence with clear deliverables and preferred channels (email, Slack, your PM tool)." />
        </div>
      </Section>

      <Section id="about" title="About">
        <div className="prose prose-slate max-w-none">
          <p><strong>Hi, I’m Edz Lilian Galdones</strong> — QuickBooks Online ProAdvisor and Xero Certified Advisor helping US/CA startups and SMBs.</p>
          <p>I specialize in full-cycle bookkeeping, reconciliations, month-end close, audit prep, and management reporting.</p>
          <p>I align my schedule with EST/CST hours for seamless collaboration across North America.</p>
        </div>
      </Section>

      <Section id="contact" title="Contact" subtitle="Let’s talk about your books!">
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Book a Free 15‑min Consultation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700">Pick a time that works for you.</p>
              <div className="flex flex-wrap gap-3">
                <a href={calendly} target="_blank" rel="noopener">
                  <Button size="lg">Open Calendly</Button>
                </a>
                <a className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900" href="mailto:info@elgaldones.works">
                  <Mail size={18} /> info@elgaldones.works
                </a>
                <span className="inline-flex items-center gap-2 text-slate-700">
                  <Phone size={18} /> By appointment
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form action={formspree} method="POST" className="grid gap-4" aria-label="Contact form">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input id="name" name="name" type="text" required className="mt-1 block w-full rounded-xl border-black/10 bg-white/90 p-3 shadow-sm focus:border-accent focus:ring-accent" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input id="email" name="email" type="email" required className="mt-1 block w-full rounded-xl border-black/10 bg-white/90 p-3 shadow-sm focus:border-accent focus:ring-accent" placeholder="you@company.com" />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea id="message" name="message" rows="5" required className="mt-1 block w-full rounded-xl border-black/10 bg-white/90 p-3 shadow-sm focus:border-accent focus:ring-accent" placeholder="What do you need help with?"></textarea>
                </div>
                <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" aria-hidden="true" />
                <input type="hidden" name="_subject" value="New inquiry from elgaldones.works" />
                <Button type="submit" size="lg">Send Message</Button>
                <p className="text-xs text-slate-500">I’ll reply within one business day.</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Footer />
    </>
  );
}

function Service({ icon: Icon, title }) {
  return (
    <motion.div {...fadeIn} className="h-full">
      <Card className="h-full transition-shadow hover:shadow-elevate">
        <CardContent className="flex items-start gap-4 p-6">
          <div className="rounded-xl bg-accent/15 p-3 text-accent">
            <Icon size={22} />
          </div>
          <p className="font-medium">{title}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function CaseStudy({ text }) {
  return (
    <motion.div {...fadeIn}>
      <Card className="h-full transition-shadow hover:shadow-elevate">
        <CardContent className="p-6 text-slate-700">{text}</CardContent>
      </Card>
    </motion.div>
  );
}

function Step({ number, title, desc, icon: Icon }) {
  return (
    <motion.li {...fadeIn}>
      <div className="card p-5">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-accent/20 font-semibold text-accent">{number}</span>
          <p className="flex items-center gap-2 font-semibold">
            {Icon ? <Icon size={18} className="text-accent" /> : null}
            {title}
          </p>
        </div>
        <p className="mt-2 text-slate-700">{desc}</p>
      </div>
    </motion.li>
  );
}

function FAQ({ q, a }) {
  return (
    <details className="card p-5">
      <summary className="cursor-pointer select-none list-none font-medium">{q}</summary>
      <p className="mt-2 text-slate-700">{a}</p>
    </details>
  );
}

function ClockIcon(props) {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
