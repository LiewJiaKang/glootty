import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Navbar } from "@/components/navbar";
import { getDictionary } from "@/lib/dictionaries";
import { Github, Terminal, Laptop, Monitor, BoxSelect, Lightbulb } from "lucide-react";
import Link from "next/link";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);

  return (
    <div className="min-h-screen bg-background">
      <Navbar navigation={dict.navigation} auth={dict.auth} />

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header with gradient background */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-primary/10 blur-3xl -z-10" />
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              {dict.aboutUs.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {dict.aboutUs.subtitle}
            </p>
          </div>

          {/* School Section with subtle animation */}
          <div className="bg-card rounded-3xl p-8 border border-border mb-16 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
            <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              {dict.aboutUs.school.title}
            </h3>
            <p className="text-lg text-muted-foreground mb-2">{dict.aboutUs.school.name}</p>
            <p className="text-muted-foreground">{dict.aboutUs.school.description}</p>
          </div>

          {/* Team Grid with hover effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Developer Card */}
            <div className="group bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-16 w-16 border-2 border-primary/20">
                    <AvatarImage src="/team/jk.jpg" alt="Liew Jia Kang" />
                    <AvatarFallback className="bg-primary/10">JK</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">Liew Jia Kang</h3>
                    <p className="text-muted-foreground">Developer</p>
                  </div>
                </div>
                <Link 
                  href="https://github.com/LiewJiaKang/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="gap-2 group-hover:bg-primary text-foreground transition-colors duration-300">
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                </Link>
              </div>
            </div>

            {/* Tester Card */}
            <div className="group bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-16 w-16 border-2 border-primary/20">
                    <AvatarImage src="/team/tester.jpg" alt="Quality Assurance" />
                    <AvatarFallback className="bg-primary/10">
                      <BoxSelect className="w-6 h-6 text-primary" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">{dict.aboutUs.team.members.tester.title}</h3>
                    <p className="text-muted-foreground">Coming Soon</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{dict.aboutUs.team.members.tester.description}</p>
              </div>
            </div>

            {/* Advisor Card */}
            <div className="group bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-16 w-16 border-2 border-primary/20">
                    <AvatarImage src="/team/advisor.jpg" alt="Product Advisor" />
                    <AvatarFallback className="bg-primary/10">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">{dict.aboutUs.team.members.advisor.title}</h3>
                    <p className="text-muted-foreground">Coming Soon</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{dict.aboutUs.team.members.advisor.description}</p>
              </div>
            </div>
          </div>

          {/* What We Love Section with fancy background */}
          <div className="bg-card rounded-3xl p-8 border border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5" />
            <div className="relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  {dict.aboutUs.interests.title}
                </h3>
                <p className="text-muted-foreground">{dict.aboutUs.interests.subtitle}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Programming Card */}
                <div className="group bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                  <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Terminal className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{dict.aboutUs.interests.programming.title}</h3>
                  <p className="text-muted-foreground">{dict.aboutUs.interests.programming.description}</p>
                </div>

                {/* Computer Science Card */}
                <div className="group bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                  <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Laptop className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{dict.aboutUs.interests.computerScience.title}</h3>
                  <p className="text-muted-foreground">{dict.aboutUs.interests.computerScience.description}</p>
                </div>

                {/* Linux Card */}
                <div className="group bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                  <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Monitor className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{dict.aboutUs.interests.linux.title}</h3>
                  <p className="text-muted-foreground">{dict.aboutUs.interests.linux.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 