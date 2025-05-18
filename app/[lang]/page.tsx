import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, BarChart3, Sparkles } from "lucide-react";
import { HowItWorks } from "@/components/how-it-works";
import { getDictionary } from "@/lib/dictionaries";
import { ThreeDModel } from "@/components/ui/3d-model";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Navbar } from "@/components/navbar";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar navigation={dict.navigation} auth={dict.auth} />

      <TracingBeam className="flex-1 w-full">
        <main>
          {/* Hero Section */}
          <section className="py-16 md:py-24 container mx-auto px-4 h-[calc(100vh-4rem)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  {dict.hero.title.part1}{" "}
                  <span className="bg-gradient-to-r from-primary via-indigo-600 to-primary text-transparent bg-clip-text">
                    {dict.hero.title.part2}
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  {dict.hero.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="dark:text-foreground">
                    {dict.hero.startLearning}{" "}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline">
                    {dict.hero.forTeachers}
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-square hidden lg:block">
                  <ThreeDModel />
                  <div className="absolute -bottom-6 -right-6 bg-yellow-400 rounded-full p-4 shadow-lg">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="relative py-32 min-h-[100vh] overflow-hidden w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 dark:via-muted to-background"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#44444440_1px,transparent_1px),linear-gradient(to_bottom,#44444440_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 dark:via-primary/20 to-transparent"></div>
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 dark:via-primary/20 to-transparent"></div>
            <div className="container relative mx-auto px-4 z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {dict.features.title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {dict.features.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Feature 1 */}
                <div className="relative group h-[280px]">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-blue-500/50 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="bg-card p-6 rounded-xl shadow-md relative h-full flex flex-col">
                    <div className="bg-[hsl(var(--feature-blue-bg))] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <BookOpen className="h-6 w-6 text-[hsl(var(--feature-blue-fg))]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {dict.features.cards.gamified.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {dict.features.cards.gamified.description}
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="relative group h-[280px]">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-green-500/50 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="bg-card p-6 rounded-xl shadow-md relative h-full flex flex-col">
                    <div className="bg-[hsl(var(--feature-green-bg))] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-[hsl(var(--feature-green-fg))]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {dict.features.cards.collaborative.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {dict.features.cards.collaborative.description}
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="relative group h-[280px]">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-purple-500/50 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="bg-card p-6 rounded-xl shadow-md relative h-full flex flex-col">
                    <div className="bg-[hsl(var(--feature-purple-bg))] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <BarChart3 className="h-6 w-6 text-[hsl(var(--feature-purple-fg))]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {dict.features.cards.dashboard.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {dict.features.cards.dashboard.description}
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="relative group h-[280px]">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-yellow-500/50 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="bg-card p-6 rounded-xl shadow-md relative h-full flex flex-col">
                    <div className="bg-[hsl(var(--feature-yellow-bg))] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Sparkles className="h-6 w-6 text-[hsl(var(--feature-yellow-fg))]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {dict.features.cards.ai.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {dict.features.cards.ai.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <HowItWorks
            title={dict.howItWorks.title}
            description={dict.howItWorks.description}
            steps={dict.howItWorks.steps}
          />

          {/* Call to Action */}
          <section className="py-16 md:py-24 container mx-auto px-4">
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {dict.cta.title}
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
                {dict.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  {dict.cta.startLearning}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white"
                >
                  {dict.cta.scheduleDemo}
                </Button>
              </div>
            </div>
          </section>
        </main>
      </TracingBeam>

      {/* Footer */}
      <footer className="bg-card text-card-foreground py-12 mt-auto border-t relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-500 text-white p-1 rounded-md">
                  <BookOpen className="h-5 w-5" />
                </div>
                <span className="font-bold text-xl text-foreground">Glootty</span>
              </div>
              <p className="text-muted-foreground">{dict.footer.tagline}</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                {dict.footer.platform.title}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {dict.footer.platform.forStudents}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {dict.footer.platform.forTeachers}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {dict.footer.platform.forSchools}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {dict.footer.platform.pricing}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                {dict.footer.company.title}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {dict.footer.company.aboutUs}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {dict.footer.company.careers}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {dict.footer.company.blog}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {dict.footer.company.contact}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                {dict.footer.legal.title}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {dict.footer.legal.terms}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {dict.footer.legal.privacy}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {dict.footer.legal.cookies}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-muted-foreground">
            <p>
              © {new Date().getFullYear()} {dict.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
