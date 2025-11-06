import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Linkedin, 
  FileText, 
  GraduationCap, 
  Award, 
  BookOpen, 
  ExternalLink,
  Download,
  Briefcase,
  Globe,
  Video,
  Presentation
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Sheena Keding, MSN, RN, CNS</h1>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="#about">About</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#experience">Experience</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#publications">Publications</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#contact">Contact</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Sheena Keding
                </h2>
                <p className="text-xl text-muted-foreground">
                  MSN, RN, CNS, PHN, ACCNS-P, CPHQ
                </p>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Pediatric Clinical Nurse Specialist and healthcare quality leader with 10+ years of experience 
                advancing pediatric safety, research-informed care, and interdisciplinary health improvement.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a href="#contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Get in Touch
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/sheena-portfolio/assets/2025_OctCV_SheenaKeding_.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
                <img 
                  src="/sheena-portfolio/assets/shrinkfilesizeprofphoto.jpg" 
                  alt="Sheena Keding" 
                  className="relative rounded-2xl shadow-2xl max-w-md w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container">
          <h3 className="text-3xl font-bold mb-8 text-foreground">Professional Profile</h3>
          <Card>
            <CardContent className="pt-6">
              <p className="text-foreground/90 leading-relaxed mb-6">
                Clinical Nurse Specialist and healthcare quality leader with proven ability to design, lead, and 
                evaluate high-impact initiatives across complex systems, including multi-site leadership of ACS 
                NSQIP Pediatric and Solutions for Patient Safety programs in Northern California.
              </p>
              <p className="text-foreground/90 leading-relaxed mb-6">
                Skilled in translating data and research into sustainable practice change, I blend clinical expertise 
                with a cross-disciplinary lens—drawing from nursing, implementation science, technology, and holistic 
                systems thinking. I'm passionate about bridging gaps between evidence, technology, and real-world 
                application to improve health outcomes for children, families, and communities.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Outside the hospital, I extend my impact as a school site council member and garden docent, designing 
                hands-on garden-based wellness education reaching over 700 students. My curiosity spans AI in healthcare, 
                functional nursing, regenerative soil practices, and holistic modalities—each informing a systems-based 
                approach to population health, equity, and future-ready models of care.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h3 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            Education & Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Master of Science in Nursing</h4>
                  <p className="text-sm text-muted-foreground">California State University, Fresno</p>
                  <p className="text-sm text-muted-foreground">Pediatric Clinical Nurse Specialist/Nurse Educator</p>
                  <p className="text-xs text-muted-foreground">January 2014 - May 2015</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Bachelor of Science in Nursing</h4>
                  <p className="text-sm text-muted-foreground">California State University, Fresno</p>
                  <p className="text-xs text-muted-foreground">May 2012 - December 2013</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Bachelor of Science in Biology</h4>
                  <p className="text-sm text-muted-foreground">University of California, San Diego</p>
                  <p className="text-sm text-muted-foreground">Minor in Psychology</p>
                  <p className="text-xs text-muted-foreground">August 2004 - June 2008</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  Professional Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">ACCNS-P (Pediatric CNS)</Badge>
                    <Button variant="link" size="sm" className="h-auto p-0" asChild>
                      <a href="/sheena-portfolio/assets/cert-accns-p.pdf" target="_blank">
                        <FileText className="mr-1 h-3 w-3" />
                        View
                      </a>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">CPHQ (Healthcare Quality)</Badge>
                    <Button variant="link" size="sm" className="h-auto p-0" asChild>
                      <a href="/sheena-portfolio/assets/cert-cphq.pdf" target="_blank">
                        <FileText className="mr-1 h-3 w-3" />
                        View
                      </a>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">Doula Certification</Badge>
                    <Button variant="link" size="sm" className="h-auto p-0" asChild>
                      <a href="/sheena-portfolio/assets/cert-doula.pdf" target="_blank">
                        <FileText className="mr-1 h-3 w-3" />
                        View
                      </a>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">HeartMath Certified</Badge>
                    <Button variant="link" size="sm" className="h-auto p-0" asChild>
                      <a href="/sheena-portfolio/assets/cert-heartmath.pdf" target="_blank">
                        <FileText className="mr-1 h-3 w-3" />
                        View
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="text-xs text-muted-foreground mb-2">Additional Certifications:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">RN - California</Badge>
                    <Badge variant="outline">PHN - California</Badge>
                    <Badge variant="outline">CNS - California</Badge>
                    <Badge variant="outline">NSQIP SCR (Pediatric & Adult)</Badge>
                    <Badge variant="outline">Soil Food Web Lab Tech</Badge>
                    <Badge variant="outline">Functional Medicine for Nurses</Badge>
                    <Badge variant="outline">Integrative Nurse Coach</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section id="experience" className="py-16 md:py-24">
        <div className="container">
          <h3 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-2">
            <Briefcase className="h-8 w-8 text-primary" />
            Professional Experience
          </h3>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quality & Safety Improvement Consultant V</CardTitle>
                <CardDescription>
                  Kaiser Permanente, Regional Risk & Patient Safety | October 2018 - Present
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-foreground/80">
                <p>
                  Designed and led two region-wide pediatric safety programs—the American College of Surgeons 
                  National Surgical Quality Improvement Program (NSQIP–Pediatric) and the Children's Hospitals 
                  Solutions for Patient Safety (SPS)—across three Northern California medical centers.
                </p>
                <p>
                  Provided day-to-day leadership for pediatric NSQIP case reviewers; mentored quality nurse 
                  consultants and supported frontline teams in data-driven decision-making and performance improvement.
                </p>
                <p>
                  Created and facilitated the Pediatric Surgical Quality & Safety Collaborative, including planning, 
                  executive presentations, education strategy, and alignment of performance metrics across medical centers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Clinical Practice Specialist</CardTitle>
                <CardDescription>
                  Valley Children's Hospital, Patient Care Support | October 2017 - July 2018
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-foreground/80">
                <p>
                  Functioned as a clinical expert in pediatric nursing practice, supporting frontline staff, physicians, 
                  and nursing leadership in evidence-based care, regulatory compliance, and outcomes improvement.
                </p>
                <p>
                  Founded and co-chaired the Interprofessional Research Council, supporting clinician-led research and 
                  dissemination of best practices. Served as co-investigator on nursing-led research to reduce opioid 
                  use in the Pediatric ICU.
                </p>
                <p>
                  Site Coordinator for the National Database of Nursing Quality Indicators (NDNQI) and member of the 
                  Magnet® Writing Team and Clinical Integration Team.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Surgical Clinical Reviewer</CardTitle>
                <CardDescription>
                  Valley Children's Hospital, Infection Prevention | May 2015 - October 2017
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-foreground/80">
                <p>
                  Collected and abstracted clinical data on surgical patients using defined variables from the American 
                  College of Surgeons National Surgical Quality Improvement Program (ACS NSQIP).
                </p>
                <p>
                  Partnered with pediatric surgeons and perioperative leadership to identify practice gaps and implement 
                  evidence-based interventions focused on hospital-acquired infection prevention.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications & Presentations */}
      <section id="publications" className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h3 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-primary" />
            Publications & Presentations
          </h3>

          {/* JBI Video Commentaries */}
          <div className="mb-8">
            <h4 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
              <Video className="h-6 w-6 text-accent" />
              JBI Evidence Implementation Digital Commentaries
            </h4>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-foreground/90 mb-3">
                    Keding, S. (2024, December). Barriers and facilitators of evidence-based practice in the Portuguese 
                    context: Role of formal nursing leaders [Video commentary]. JBI Evidence Implementation Digital 
                    Commentary Series.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="https://journals.lww.com/ijebh/pages/video.aspx?v=62" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Video Commentary
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-foreground/90 mb-3">
                    Keding, S. (2024, July). Pediatric fall prevention [Video commentary]. JBI Evidence Implementation 
                    Digital Commentary Series.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="https://journals.lww.com/ijebh/pages/video.aspx?v=56" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Video Commentary
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Conference Presentations & Posters */}
          <div className="mb-8">
            <h4 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
              <Presentation className="h-6 w-6 text-accent" />
              Conference Presentations & Poster Abstracts
            </h4>
            <div className="space-y-3">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm font-medium text-foreground">
                      Yermekov, A. & Keding, S. (2025, November). Conversational AI for Automated Post-Surgical Follow-Up: 
                      An Agentic System for NSQIP Data Collection. [Digital poster]. AIMED25 Global Summit, San Diego, CA.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm font-medium text-foreground mb-2">
                      Schaffer, Bush, Hamilton, Ingle, Keding & Hester (2024, June). Newborn drops prevention: State of 
                      the science [Poster presentation]. AWHONN Convention, Phoenix, AZ.
                    </p>
                    <Button variant="link" size="sm" className="h-auto p-0" asChild>
                      <a href="/sheena-portfolio/assets/poster-newborn-drops-2024.pdf" target="_blank">
                        <FileText className="mr-2 h-4 w-4" />
                        View Poster
                      </a>
                    </Button>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm font-medium text-foreground mb-2">
                      Kragel, E., Bhattacharjee, S., Linda, B., Keding, S., & Yamout, S. (2023, July). Reducing Rates of 
                      Post-Operative Pneumonia Diagnosis in a Tertiary Pediatric Care Center. [Poster presentation]. 
                      ACS Quality and Safety Conference.
                    </p>
                    <Button variant="link" size="sm" className="h-auto p-0" asChild>
                      <a href="/sheena-portfolio/assets/poster-pneumonia-2023.pdf" target="_blank">
                        <FileText className="mr-2 h-4 w-4" />
                        View Poster
                      </a>
                    </Button>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm font-medium text-foreground mb-2">
                      Matsunaga, R. & Keding, S. (2022, July). Inter-Rater Reliability (IRR) Trigger Tool for ACS NSQIP. 
                      [Poster presentation]. ACS Quality and Safety Conference.
                    </p>
                    <Button variant="link" size="sm" className="h-auto p-0" asChild>
                      <a href="/sheena-portfolio/assets/poster-irr-tool-2022.pdf" target="_blank">
                        <FileText className="mr-2 h-4 w-4" />
                        View Poster
                      </a>
                    </Button>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm font-medium text-foreground">
                      Cooper, C. & Keding, S. (2017, July-October). Evidence Based Practice: Promoting Quality Healthcare. 
                      [Formal lecture]. Valley Children's Hospital Resident InTERACT Scholarly Activity.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm font-medium text-foreground mb-2">
                      Keding, S. & Murrietta, M. (2017, July). Selecting the Sampled Procedures: What's the Correct Case? 
                      [Poster abstract]. ACS Quality and Safety Conference.
                    </p>
                    <Button variant="link" size="sm" className="h-auto p-0" asChild>
                      <a href="/sheena-portfolio/assets/poster-nsqip-sampling-2017.pdf" target="_blank">
                        <FileText className="mr-2 h-4 w-4" />
                        View Poster
                      </a>
                    </Button>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <p className="text-sm font-medium text-foreground mb-2">
                      Keding, S. (2015, May). Examining the Relationship between Circadian Rhythms and Discontinuation of 
                      Mechanical Ventilation. [Poster presentation]. 7th Annual Graduate Research and Creative Activities 
                      Symposium, Fresno, CA.
                    </p>
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge variant="outline" className="mt-2">Award Winner – Outstanding Presentation</Badge>
                      <Button variant="link" size="sm" className="h-auto p-0" asChild>
                        <a href="/sheena-portfolio/assets/poster-circadian-ventilation-2015.pdf" target="_blank">
                          <FileText className="mr-2 h-4 w-4" />
                          View Poster
                        </a>
                      </Button>
                      <Button variant="link" size="sm" className="h-auto p-0" asChild>
                        <a href="/sheena-portfolio/assets/award-outstanding-presentation-2015.pdf" target="_blank">
                          <Award className="mr-2 h-4 w-4" />
                          View Award
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm font-medium text-foreground">
                      Keding, S. (2014, October). Plan for Reducing CAUTI: Increase awareness and Provide Education. 
                      [Formal Presentation]. Children's Hospital Central California, CAUTI Task Force.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Peer-Reviewed Publications */}
          <div className="mb-8">
            <h4 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-accent" />
              Peer-Reviewed Publications
            </h4>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-sm text-foreground/90">
                    Brown, T. M., Gias, C., Hatori, M., <strong>Keding, S. R.</strong>, Coffey, P. J., Gigg, J., ... & Lucas, R. J. (2010). 
                    Melanopsin contributions to irradiance coding in the thalamo-cortical visual system. 
                    <em> PLoS Biology, 8</em>(12), e1000558.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="text-sm text-foreground/90">
                    Panda, S., Hatori, M., <strong>Keding, S. R.</strong>, & Le, H. (2009). Cellular circuitry of melanopsin function. 
                    <em> Journal of Vision, 9</em>(14), 24-249.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="text-sm text-foreground/90">
                    Hatori, M., Le, H., Vollmers, C., <strong>Keding, S. R.</strong>, Tanaka, N., Schmedt, C., ... & Panda, S. (2008). 
                    Inducible ablation of melanopsin-expressing retinal ganglion cells reveals their central role in 
                    non-image forming visual responses. <em>PLoS One, 3</em>(6), e2451.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Research Posters from Neuroscience */}
          <div className="mb-8">
            <h4 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
              <Presentation className="h-6 w-6 text-accent" />
              Neuroscience Research Presentations
            </h4>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    Panda, S., Keding, S., & Hatori, M. (2010, November). Comprehensive Map of Melanopsin-Retinal Ganglion 
                    Cells in Mouse. [Poster Presentation]. 40th Society for Neuroscience Annual Meeting, San Diego, CA.
                  </p>
                  <Button variant="link" size="sm" className="h-auto p-0" asChild>
                    <a href="/sheena-portfolio/assets/poster-neuroscience-2010-sfn.pdf" target="_blank">
                      <FileText className="mr-2 h-4 w-4" />
                      View Poster
                    </a>
                  </Button>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    Keding, S., Hatori, M., Le, H., & Panda, S. (2009, December). Comprehensive Labelling of Melanopsin 
                    Expressing Retinal Ganglion Cells and Mapping Their Central Projections in Mouse. [Poster Presentation]. 
                    49th Annual Meeting for American Society for Cell Biology, San Diego, CA.
                  </p>
                  <Button variant="link" size="sm" className="h-auto p-0" asChild>
                    <a href="/sheena-portfolio/assets/poster-neuroscience-2009-ascb.pdf" target="_blank">
                      <FileText className="mr-2 h-4 w-4" />
                      View Poster
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Resources */}
          <div>
            <h4 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
              <FileText className="h-6 w-6 text-accent" />
              Additional Resources
            </h4>
            <Card>
              <CardContent className="pt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Book for Josslynn</p>
                    <Button variant="link" size="sm" className="h-auto p-0" asChild>
                      <a href="/sheena-portfolio/assets/BookForJosslynn.pdf" target="_blank">
                        View Book PDF
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h3 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-2">
            <Globe className="h-8 w-8 text-primary" />
            Projects & Initiatives
          </h3>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img 
                    src="/sheena-portfolio/assets/AIRS_logo_earthy_circle.svg" 
                    alt="AIRS - Artificial Intelligence Risk & Safety Registry" 
                    className="h-16 w-16 object-contain"
                  />
                  <div>
                    <CardTitle>AIRS — Artificial Intelligence Risk & Safety Registry</CardTitle>
                    <CardDescription>Nursing-Led Nonprofit Registry</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80 mb-4">
                  The first nursing-led nonprofit registry to track harm, no-harm events, and near misses related to 
                  AI and robotics across healthcare and wellness, transforming real-world incidents into shared learning, 
                  benchmarking, and prevention.
                </p>
                <div className="flex gap-2">
                  <Badge variant="secondary">AI Safety</Badge>
                  <Badge variant="secondary">Healthcare Innovation</Badge>
                  <Badge variant="secondary">Nursing Leadership</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">ATNC</span>
                  </div>
                  <div>
                    <CardTitle>ATNC — Advanced Technology Nursing Certification</CardTitle>
                    <CardDescription>First AI & Digital Health Certification for Nurses (Coming Soon)</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80 mb-4">
                  Co-developed the first certification program designed to equip nurses with competencies in AI, robotics, 
                  wearables, and digital health implementation. ATNC bridges clinical expertise with emerging technology, 
                  preparing nurses to lead safe, responsible AI adoption across healthcare systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Nursing Education</Badge>
                  <Badge variant="secondary">AI Competency</Badge>
                  <Badge variant="secondary">Digital Health</Badge>
                  <Badge variant="outline">Coming Soon</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>MedNavigator + PAFOs.ai</CardTitle>
                <CardDescription>Conversational AI for Surgical Quality Programs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80 mb-4">
                  Partnered as the clinical and workflow design lead in developing an AI agent that conducts structured 
                  NSQIP follow-up calls, identifies postoperative concerns in real time, and supports safer, more scalable 
                  follow-up processes across health systems. This initiative demonstrates how AI can streamline data 
                  collection without compromising clinical rigor or patient connection.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">Role: Co-designer / Clinical Advisor</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">AI in Healthcare</Badge>
                    <Badge variant="secondary">NSQIP</Badge>
                    <Badge variant="secondary">Clinical Workflow</Badge>
                  </div>
                  <div className="pt-2 space-y-2">
                    <p className="text-xs text-muted-foreground">➡️ Live demo link: (MedNavigator link TBD)</p>
                    <p className="text-xs text-muted-foreground">➡️ Platform: (PAFOs.ai link TBD)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img 
                    src="/sheena-portfolio/assets/tellurian-logo.png" 
                    alt="Tellurian Heart Books" 
                    className="h-16 w-16 object-contain"
                  />
                  <div>
                    <CardTitle>Tellurian Heart Books</CardTitle>
                    <CardDescription>Publishing Initiative (In Development)</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80 mb-4">
                  A publishing initiative focused on holistic health, wellness education, and integrative approaches 
                  to healthcare. Website currently in development.
                </p>
                <Badge variant="outline">Coming Soon</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <h3 className="text-3xl font-bold mb-8 text-foreground text-center">Get in Touch</h3>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a 
                      href="mailto:sheena.keding@gmail.com" 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      sheena.keding@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/sheena-keding" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      linkedin.com/in/sheena-keding
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Curriculum Vitae</p>
                    <Button variant="link" size="sm" className="h-auto p-0" asChild>
                      <a href="/sheena-portfolio/assets/2025_OctCV_SheenaKeding_.pdf" download>
                        Download Full CV (PDF)
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background">
        <div className="container">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sheena Keding. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
