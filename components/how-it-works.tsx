import { UserPlus, Compass, Gamepad2, LineChart, Users } from "lucide-react";

interface HowItWorksProps {
  title: string;
  description: string;
  steps: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export function HowItWorks({ title, description, steps }: HowItWorksProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "UserPlus":
        return <UserPlus className="h-6 w-6" />;
      case "Compass":
        return <Compass className="h-6 w-6" />;
      case "Gamepad2":
        return <Gamepad2 className="h-6 w-6" />;
      case "LineChart":
        return <LineChart className="h-6 w-6" />;
      case "Users":
        return <Users className="h-6 w-6" />;
      default:
        return <UserPlus className="h-6 w-6" />;
    }
  };

  return (
    <section
      id="how-it-works"
      className="py-32 bg-background min-h-[calc(100vh-6rem)]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Desktop and tablet view (horizontal steps) */}
        <div className="hidden md:block relative">
          {/* Connecting line for desktop */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-100 via-blue-500 to-blue-100 dark:from-blue-950 dark:via-blue-600 dark:to-blue-950 transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                    {getIcon(step.icon)}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-md">
                    {index + 1}
                  </div>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center h-full border border-border">
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile view (vertical steps) */}
        <div className="md:hidden relative">
          <div className="flex flex-col space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Vertical connecting line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-24 left-[28px] w-0.5 h-full translate-y-[-40px] bg-gradient-to-b from-blue-500 to-blue-100 dark:from-blue-600 dark:to-blue-950 z-0"></div>
                )}

                <div className="flex items-start space-x-6 relative z-10">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                        {getIcon(step.icon)}
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow bg-card p-5 rounded-xl shadow-md border border-border">
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
