import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, ShoppingBag, Music, Check, ArrowRight, Phone, Mail, MapPin, ShieldCheck, Sparkles, Ruler, Layers, Wrench, Camera, Package, Clock, BadgeCheck} from "lucide-react";

      /**
      * Single-file marketing site for a small prototyping / 3D printing business.
      * Replace all PLACEHOLDER values in the CONFIG object.
      */
function Card({ className = "", children }: any) {
        return <div className={`rounded-3xl border bg-white shadow-sm ${className}`}>{children}</div>;
      }
      function CardHeader({ className = "", children }: any) {
        return <div className={`p-6 pb-3 ${className}`}>{children}</div>;
      }
      function CardTitle({ className = "", children }: any) {
        return <div className={`font-semibold ${className}`}>{children}</div>;
      }
      function CardContent({ className = "", children }: any) {
        return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
      }

      function Button({ className = "", variant, size, asChild, children, ...props }: any) {
        const base =
          "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium border transition";
        const styles =
          variant === "outline"
            ? "bg-transparent text-black hover:bg-gray-100"
            : "bg-black text-white hover:opacity-90";
        const sizes = size === "lg" ? "px-5 py-3 text-base" : size === "sm" ? "px-3 py-2 text-sm" : "";
        return (
          <button className={`${base} ${styles} ${sizes} ${className}`} {...props}>
            {children}
          </button>
        );
      }

      function Badge({ className = "", children }: any) {
        return <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs ${className}`}>{children}</span>;
      }

      function Input(props: any) {
        return <input {...props} className={`w-full rounded-xl border px-3 py-2 text-sm ${props.className || ""}`} />;
      }
      function Textarea(props: any) {
        return <textarea {...props} className={`w-full rounded-xl border px-3 py-2 text-sm ${props.className || ""}`} />;
      }



        
      const cx = (...classes) => classes.filter(Boolean).join(" ");

      function Section({ id, eyebrow, title, subtitle, children }) {
        return (
          <section
            id={id}
            className="scroll-mt-24 py-16"
            style={{ background: CONFIG.banners.sectionBg }}
          >
            <div className="mx-auto max-w-6xl px-4">
              <div className="mb-10">
                {eyebrow ? (
                  <div className="mb-2 text-sm font-medium tracking-wide text-muted-foreground">
                    {eyebrow}
                  </div>
                ) : null}
                <h2 className="stw-title text-3xl font-semibold leading-tight md:text-4xl">
                  {title}
                </h2>
                {subtitle ? (
                  <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
                    {subtitle}
                  </p>
                ) : null}
              </div>
              {children}
            </div>
          </section>
        );
      }


      function Pill({ icon: Icon, children }) {
        return (
          <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm">
            <Icon className="h-4 w-4" />
            <span>{children}</span>
          </div>
        );
      }

      function Nav() {
        const links = [
          { label: "Services", href: "#services" },
          { label: "Process", href: "#process" },
          { label: "Work", href: "#work" },
          { label: "FAQ", href: "#faq" },
          { label: "Quote", href: "#quote" },
        ];

        return (
          <div className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
              <a href="#" className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-xl border bg-background shadow-sm">
                  <span className="text-sm font-semibold">STW</span>
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold">{CONFIG.brand.name}</div>
                  <div className="text-xs text-muted-foreground">{CONFIG.contact.location}</div>
                </div>
              </a>

              <div className="hidden items-center gap-5 md:flex">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <Button asChild size="sm" className="rounded-xl bg-[var(--stw-green)] text-black hover:bg-[#00a955]">
                  <a href={CONFIG.heroCtas.primary.href}>{CONFIG.heroCtas.primary.label}</a>
                </Button>
              </div>
            </div>
          </div>
        );
      }

      function Hero() {
        return (
          <div className="mx-auto max-w-3xl text-center md:text-left">
            <div className="absolute inset-0 -z-10 opacity-70">
              <div className="absolute -top-24 left-1/2 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-muted blur-3xl" />
              <div className="absolute -bottom-24 left-1/3 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-muted blur-3xl" />
            </div>

            <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
              <div className="grid items-center gap-10 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-5 flex flex-wrap gap-2 justify-center md:justify-start">
                    <Pill icon={ShieldCheck}>Engineering-first</Pill>
                    <Pill icon={Clock}>Fast turnaround</Pill>
                    <Pill icon={Sparkles}>Clean prints</Pill>
                  </div>

                  <h1 className="stw-title text-4xl font-semibold leading-tight md:text-5xl">
                    {CONFIG.brand.tagline.split("—").map((chunk, idx) => (
                      <span key={idx}>
                        {chunk}
                        {idx === 0 ? "—" : ""}
                      </span>
                    ))}
                  </h1>

                  <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
                    {CONFIG.brand.subtagline}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3 justify-center md:justify-start">
                    <Button asChild size="lg" className="rounded-2xl bg-[var(--stw-green)] text-black hover:bg-[#00a955]">
                      <a href={CONFIG.heroCtas.primary.href}>
                        {CONFIG.heroCtas.primary.label}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-2xl">
                      <a href={CONFIG.heroCtas.secondary.href}>{CONFIG.heroCtas.secondary.label}</a>
                    </Button>
                  </div>

                  <div className="mt-8 grid gap-3 text-sm text-muted-foreground justify-items-center md:justify-items-start">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <a className="hover:text-foreground" href={`mailto:${CONFIG.contact.email}`}>
                        {CONFIG.contact.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <a className="hover:text-foreground" href={`tel:${CONFIG.contact.phone}`}>
                        {CONFIG.contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{CONFIG.contact.location}</span>
                      <span className="opacity-60">·</span>
                      <span>{CONFIG.contact.hours}</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="md:justify-self-end"
                >
                  <Card className="rounded-3xl shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg">Typical projects</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-3">
                        {CONFIG.industries.map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4" />
                            <div>
                              <div className="text-sm font-medium">{item}</div>
                              <div className="text-xs text-muted-foreground">
                                Fitment-focused design + fast iteration.
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="rounded-2xl border bg-muted/40 p-4">
                        <div className="mb-2 flex items-center gap-2">
                          <BadgeCheck className="h-4 w-4" />
                          <div className="text-sm font-semibold">Deliverables</div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">STL (print-ready)</Badge>
                          <Badge variant="secondary">STEP/IGES (editable)</Badge>
                          <Badge variant="secondary">Basic documentation</Badge>
                          <Badge variant="secondary">Revision plan</Badge>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button asChild className="w-full rounded-2xl">
                          <a href="#quote">Start a project</a>
                        </Button>
                        <Button asChild variant="outline" className="w-full rounded-2xl">
                          <a href="#services">Browse services</a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        );
      }

      function Services() {
        return (
          <Section
            id="services"
            eyebrow="What I do"
            title="Services built for fast, accurate results"
            subtitle="Whether you need a scan, a print, or engineering file deliverables — you get a clear scope and fast turnaround."
          >
            <div className="grid gap-5 md:grid-cols-2">
              {CONFIG.services.map((s) => (
                <Card key={s.title} className="rounded-3xl shadow-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl border bg-background">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{s.title}</CardTitle>
                        <div className="text-sm text-muted-foreground">{s.desc}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Section>
        );
      }

      function Process() {
        return (
          <Section
            id="process"
            eyebrow="How it works"
            title="A simple process that prevents rework"
            subtitle="Most problems happen when requirements are vague. This keeps projects fast and predictable."
          >
            <div className="grid gap-5 md:grid-cols-4">
              {CONFIG.process.map((p, idx) => (
                <Card key={p.title} className="rounded-3xl shadow-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl border bg-background">
                        <p.icon className="h-5 w-5" />
                      </div>
                      <Badge variant="secondary">Step {idx + 1}</Badge>
                    </div>
                    <CardTitle className="text-base">{p.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {p.desc}
                  </CardContent>
                </Card>
              ))}
            </div>
          </Section>
        );
      }

      function Work() {
        const examples = useMemo(
          () => [
            {
              title: "Replacement cover (non-critical)",
              desc: "Scan reference + print to restore fit and function.",
              tags: ["Scanning", "Print-ready", "Fast turnaround"],
            },
            {
              title: "Customer-provided STL print",
              desc: "Print-only workflow with orientation/support optimization.",
              tags: ["Print-only", "Quality check", "Repeatable"],
            },
            {
              title: "STEP/IGES deliverables",
              desc: "Engineering file delivery when editable formats are required.",
              tags: ["STEP", "IGES", "Clean exports"],
            },
          ],
          []
        );

        return (
          <Section
            id="work"
            eyebrow="What you can expect"
            title="Work that’s built to fit and function"
            subtitle="If you have photos of your parts, client projects, or prints, swap these placeholders with real examples."
          >
            <div className="grid gap-5 md:grid-cols-3">
              {examples.map((e) => (
                <Card key={e.title} className="rounded-3xl shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-base">{e.title}</CardTitle>
                    <div className="text-sm text-muted-foreground">{e.desc}</div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {e.tags.map((t) => (
                        <Badge key={t} variant="secondary">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4 rounded-2xl border bg-muted/30 p-4 text-sm text-muted-foreground">
                      Replace this box with a project photo or a rendered image.
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {CONFIG.trust.map((t) => (
                <Card key={t.title} className="rounded-3xl shadow-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl border bg-background">
                        <t.icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-base">{t.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">{t.desc}</CardContent>
                </Card>
              ))}
            </div>
          </Section>
        );
      }

      function FAQ() {
        const [openIdx, setOpenIdx] = useState(0);
        return (
          <Section
            id="faq"
            eyebrow="Questions"
            title="FAQ"
            subtitle="If you don’t see your question here, send a message — I reply quickly once I have the basics."
          >
            <div className="grid gap-4">
              {CONFIG.faq.map((item, idx) => {
                const open = idx === openIdx;
                return (
                  <Card key={item.q} className="rounded-3xl shadow-sm">
                    <button
                      type="button"
                      className="w-full text-left"
                      onClick={() => setOpenIdx(open ? -1 : idx)}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between gap-4">
                          <CardTitle className="text-base">{item.q}</CardTitle>
                          <span className={cx("text-sm", open ? "text-foreground" : "text-muted-foreground")}>
                            {open ? "–" : "+"}
                          </span>
                        </div>
                      </CardHeader>
                    </button>
                    {open ? (
                      <CardContent className="pt-0 text-sm text-muted-foreground">
                        {item.a}
                      </CardContent>
                    ) : null}
                  </Card>
                );
              })}
            </div>
          </Section>
        );
      }

      function Quote() {
        const [status, setStatus] = useState("idle");

        function onSubmit(e) {
          e.preventDefault();
        
          setStatus("sent");
          setTimeout(() => setStatus("idle"), 2500);
        }

        return (
          <Section
            id="quote"
            eyebrow="Start here"
            title="Request a quote"
            subtitle="Share the basics and I’ll reply with a clear plan and price."
          >
            <div className="grid gap-5 md:grid-cols-5">
              <Card className="rounded-3xl shadow-sm md:col-span-3">
                <CardHeader>
                  <CardTitle className="text-lg">Project details</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    Tip: include 2–3 photos and at least one dimension if fitment matters.
                  </div>
                </CardHeader>
                <CardContent>
                  <form onSubmit={onSubmit} className="space-y-4">
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Name</label>
                        <Input placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input type="email" placeholder="you@email.com" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">What do you need?</label>
                      <Textarea
                        placeholder="Example: scan a small plastic cover and 3D print a replacement. Needs to fit an existing housing."
                        rows={5}
                        required
                      />
                    </div>

                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Deliverables</label>
                        <Input placeholder="STL, STEP, printed part, etc." />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Deadline</label>
                        <Input placeholder="If any" />
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <Button type="submit" size="lg" className="rounded-2xl">
                        Send request
                      </Button>
                      <span className="text-sm text-muted-foreground">
                        {status === "sent" ? "Sent (demo). Connect this form to an email backend." : ""}
                      </span>
                    </div>

                    <div className="rounded-2xl border bg-muted/30 p-4 text-sm text-muted-foreground">
                      <div className="font-medium text-foreground">Attach files</div>
                      <div className="mt-1">
                        This template doesn’t upload files by default. Recommended: link to a Google Drive folder or use a
                        form backend that supports attachments.
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-sm md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg">Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div className="rounded-2xl border bg-background p-4">
                    <div className="flex items-center gap-2 font-medium">
                      <Mail className="h-4 w-4" />
                      <a className="hover:underline" href={`mailto:${CONFIG.contact.email}`}>
                        {CONFIG.contact.email}
                      </a>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <a className="hover:underline" href={`tel:${CONFIG.contact.phone}`}>
                        {CONFIG.contact.phone}
                      </a>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{CONFIG.contact.location}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{CONFIG.contact.hours}</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border bg-muted/30 p-4">
                    <div className="mb-2 font-medium text-foreground">Social</div>
                    <div className="space-y-2">
                      {CONFIG.social.instagram && (
                        <a
                          href={CONFIG.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                        >
                          <Instagram className="h-4 w-4" />
                          <span>Instagram</span>
                        </a>
                      )}

                      {CONFIG.social.tiktok && (
                        <a
                          href={CONFIG.social.tiktok}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                        >
                          <Music className="h-4 w-4" />
                          <span>TikTok</span>
                        </a>
                      )}

                      {CONFIG.social.etsy && (
                        <a
                          href={CONFIG.social.etsy}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                        >
                          <ShoppingBag className="h-4 w-4" />
                          <span>Etsy</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="rounded-2xl border bg-background p-4">
                    <div className="mb-2 flex items-center gap-2 font-medium">
                      <ShieldCheck className="h-4 w-4" />
                      What makes this different
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4" />
                        <span>Clear scope and deliverables (scan, print, and/or engineering files).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4" />
                        <span>Fast turnaround for small projects once scope is approved.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4" />
                        <span>Parts optimized for print strength and surface finish.</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Section>
        );
      }

      function Footer() {
        return (
          <footer className="border-t py-10" style={{ background: CONFIG.banners.footerBg }}>
            <div className="mx-auto max-w-6xl px-4">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm font-semibold">{CONFIG.brand.name}</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {CONFIG.brand.tagline}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary">3D Scanning</Badge>
                  <Badge variant="secondary">3D Printing</Badge>
                  <Badge variant="secondary">STEP/IGES</Badge>
                  <Badge variant="secondary">Print-Only</Badge>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
                <div>
                  © {new Date().getFullYear()} {CONFIG.brand.name}. All rights reserved.
                </div>
                <div className="flex gap-4">
                  <a className="hover:text-foreground" href="#services">Services</a>
                  <a className="hover:text-foreground" href="#quote">Quote</a>
                  <a className="hover:text-foreground" href="#faq">FAQ</a>
                </div>
              </div>
            </div>
          </footer>
        );
      }


      


      const CONFIG = {
        banners: {
          sectionBg: "linear-gradient(135deg, rgba(0,191,99,0.08), rgba(0,0,0,0.04))",
          footerBg: "linear-gradient(135deg, rgba(0,0,0,0.04), rgba(0,191,99,0.08))",
        },
        brand: {
          name: "SOLID THAT WORKS",
          tagline: "Engineering-driven 3D scanning and additive manufacturing.",
          subtagline:
            "Precision 3D scanning and production-ready 3D printing for local individuals, students, and small businesses.",
        },
        contact: {
          email: "solidthatworks@gmail.com",
          phone: "(407) 548 7900",
          location: "Gainesville, FL",
          hours: "Mon–Sat · 9am–7pm",
        },
        social: {
          instagram: "https://www.instagram.com/solidthatworks",
          tiktok: "",
          etsy: "https://solidthatworks.etsy.com",
        },
        heroCtas: {
          primary: { label: "Get a quote", href: "#quote" },
          secondary: { label: "See services", href: "#services" },
        },
        services: [
          {
            icon: Camera,
            title: "3D Scanning",
            desc: "Capture existing parts to generate accurate digital geometry for reference or reproduction.",
            bullets: [
              "Small to medium physical parts",
              "Scan cleanup and alignment",
              "STL / OBJ outputs",
            ],
          },
          {
            icon: Package,
            title: "3D Printing",
            desc: "High-quality FDM printing optimized for dimensional consistency, surface finish, and real-world use.",
            bullets: [
              "Prototype and end-use parts",
              "Orientation and support optimization",
              "Local turnaround (2–3 days typical)",
            ],
          },
          {
            icon: Layers,
            title: "Engineering File Delivery",
            desc: "Editable engineering file outputs for projects that require STEP/IGES deliverables.",
            bullets: ["STEP / IGES formats", "Clean geometry", "Manufacturing-aware exports"],
          },
          {
            icon: Wrench,
            title: "Print-Only Jobs",
            desc: "Already have a model? I’ll handle print setup, execution, and basic quality checks.",
            bullets: ["Client-supplied STL", "Printability review", "Consistent repeatability"],
          },
        ],
        industries: [
          "Local replacement parts",
          "Student engineering projects",
          "Small business prototypes",
          "Fixtures, jigs, and tooling",
        ],
        process: [
          {
            title: "Send your idea",
            desc: "Share photos, reference dimensions, and what the part needs to do.",
            icon: Mail,
          },
          {
            title: "Free consult + quote",
            desc: "I confirm scope and deliverables, then send a clear fixed quote before work begins.",
            icon: BadgeCheck,
          },
          {
            title: "Scan / print",
            desc: "If scanning is needed, I capture the part and prep it for the agreed deliverable(s).",
            icon: Camera,
          },
          {
            title: "Deliver",
            desc: "You receive parts and/or files, typically within 2–3 business days for small jobs.",
            icon: Check,
          },
        ],
        trust: [
          {
            title: "Engineering approach",
            desc: "Clear requirements, clean geometry, and fitment-first thinking.",
            icon: ShieldCheck,
          },
          {
            title: "Fast turnaround",
            desc: "Most small jobs are completed within 2–3 business days after scope approval.",
            icon: Clock,
          },
          {
            title: "Quality-focused",
            desc: "Print setup optimized for strength, finish, and repeatability.",
            icon: Sparkles,
          },
        ],
        faq: [
          {
            q: "Do you make safety-critical or structural parts?",
            a: "No. Projects involving safety-critical, load-bearing, or life-dependent components are not accepted.",
          },
          {
            q: "What is the typical turnaround time?",
            a: "Most small projects are completed within 2–3 business days after scope approval. More complex work may vary.",
          },
          {
            q: "How does pricing work?",
            a: "Consultations are free. After reviewing your project, you will receive a clear, fixed quote before any work begins.",
          },
          {
            q: "Can you print something I already modeled?",
            a: "Yes. Send your STL and I’ll review printability, then provide a quote and turnaround time.",
          },
          {
            q: "Can I get STEP/IGES files?",
            a: "Yes, when engineering file delivery is part of your project scope.",
          },
        ],
      };

export default function SolidThatWorksSite() {
  return (
      <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=ABeeZee:wght@400&display=swap');
        :root { --stw-green: #00bf63; }
        body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
        h1, h2, h3, .stw-title { font-family: 'ABeeZee', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
      `}</style>
      <Nav />
      <Hero />
      <Services />
      <Process />
      <Work />
      <FAQ />
      <Quote />
      <Footer />
  


      </div>
  );
}
  


      
      



