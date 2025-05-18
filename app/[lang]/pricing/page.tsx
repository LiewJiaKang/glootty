import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { getDictionary } from "@/lib/dictionaries";
import type { Dictionary } from "@/lib/dictionaries/dictionary";

interface PricingTier {
  name: "Free" | "Pro / Educator" | "School";
  price: string;
  description: string;
  cta: string;
  popular: boolean;
  yearlyPrice?: string;
  billingPeriod?: string;
}

const tiers: PricingTier[] = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for trying out Glootty",
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro / Educator",
    price: "9",
    description: "For educators who need full access",
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "School",
    price: "39",
    billingPeriod: "month",
    yearlyPrice: "299",
    description: "For schools and educational institutions",
    cta: "Contact Sales",
    popular: false,
  },
];

type DictionaryTierKey = keyof Dictionary['pricing']['tiers'];
const tierToDictionaryKey: { [K in PricingTier['name']]: DictionaryTierKey } = {
  "Free": "free",
  "Pro / Educator": "pro",
  "School": "school",
};

export default async function PricingPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang);

  const getFeatures = (tier: DictionaryTierKey) => {
    return Object.values(dict.pricing.tiers[tier].features);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar navigation={dict.navigation} auth={dict.auth} />

      {/* Header */}
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            {dict.pricing.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {dict.pricing.subtitle}
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {tiers.map((tier) => {
            const dictionaryKey = tierToDictionaryKey[tier.name];
            const features = getFeatures(dictionaryKey);
            
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-3xl ring-1 ring-muted p-8 xl:p-10 ${
                  tier.popular
                    ? "bg-primary text-primary-foreground ring-primary"
                    : "bg-card ring-border"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-0 right-0 mx-auto w-32 rounded-full bg-primary-foreground px-3 py-1 text-center text-xs font-medium text-primary dark:text-foreground">
                    {dict.pricing.popularBadge}
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={`text-lg font-semibold leading-8 ${
                    tier.popular ? "text-primary-foreground dark:text-foreground" : "text-foreground"
                  }`}>
                    {dict.pricing.tiers[dictionaryKey].name}
                  </h3>
                  <div className="mt-4 flex items-baseline">
                    <span className={`text-4xl font-bold tracking-tight ${
                      tier.popular ? "text-primary-foreground dark:text-foreground" : "text-foreground"
                    }`}>
                      ${tier.price}
                    </span>
                    <span className={`text-sm font-semibold leading-6 ${
                      tier.popular ? "text-primary-foreground/80 dark:text-foreground" : "text-muted-foreground"
                    }`}>{dict.pricing.billing.monthly}</span>
                  </div>
                  {tier.yearlyPrice && (
                    <div className={`mt-1 text-sm ${
                      tier.popular ? "text-primary-foreground/80 dark:text-foreground" : "text-muted-foreground"
                    }`}>
                      or ${tier.yearlyPrice}{dict.pricing.billing.yearly}
                    </div>
                  )}
                  <p className={`mt-6 text-sm leading-6 ${
                    tier.popular ? "text-primary-foreground/80 dark:text-foreground" : "text-muted-foreground"
                  }`}>
                    {dict.pricing.tiers[dictionaryKey].description}
                  </p>
                </div>

                <div className="mt-2 flex-1">
                  <ul role="list" className="space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className={`h-5 w-5 shrink-0 ${
                          tier.popular ? "text-primary-foreground dark:text-foreground" : "text-primary"
                        }`} />
                        <span className={`text-sm leading-6 ${
                          tier.popular ? "text-primary-foreground dark:text-foreground" : "text-foreground"
                        }`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className={`mt-8 ${
                    tier.popular
                      ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90 dark:text-foreground"
                      : "dark:text-foreground"
                  }`}
                  variant={tier.popular ? "secondary" : "default"}
                >
                  {dict.pricing.tiers[dictionaryKey].cta}
                </Button>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="mx-auto max-w-4xl mt-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            {dict.pricing.faq.title}
          </h2>
          <dl className="space-y-8">
            {Object.entries(dict.pricing.faq.questions).map(([key, question]) => (
              <div key={key}>
                <dt className="text-lg font-semibold mb-2 text-foreground">
                  {question.question}
                </dt>
                <dd className="text-muted-foreground">
                  {question.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 