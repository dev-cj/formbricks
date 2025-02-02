import {
  AngryBirdRageIcon,
  Button,
  CancelSubscriptionIcon,
  DogChaserIcon,
  DoorIcon,
  FeedbackIcon,
  InterviewPromptIcon,
  OnboardingIcon,
  PMFIcon,
} from "@formbricks/ui";
import clsx from "clsx";
import { usePlausible } from "next-plausible";
import { useRouter } from "next/router";

const BestPractices = [
  {
    title: "Onboarding Segmentation",
    description:
      "Get to know your users right from the start. Ask a few questions early, let us enrich the profile.",
    category: "Boost Retention",
    icon: OnboardingIcon,
  },
  {
    title: "Product-Market Fit Survey",
    description: "Find out how disappointed people would be if they could not use your service any more.",
    category: "Boost Retention",
    icon: PMFIcon,
    href: "/pmf",
  },
  {
    title: "Feature Chaser",
    description: "Show a survey about a new feature shown only to people who used it.",
    category: "Boost Retention",
    icon: DogChaserIcon,
  },
  {
    title: "Cancel Subscription Flow",
    description: "Request users going through a cancel subscription flow before cancelling.",
    category: "Boost Retention",
    icon: CancelSubscriptionIcon,
  },
  {
    title: "Interview Prompt",
    description: "Ask high-interest users to book a time in your calendar to get all the juicy details.",
    category: "Exploration",
    icon: InterviewPromptIcon,
  },
  {
    title: "Fake Door Follow-Up",
    description: "Running a fake door experiment? Catch users right when they are full of expectations.",
    category: "Exploration",
    icon: DoorIcon,
  },
  {
    title: "Feedback Box",
    description: "Give users the chance to share feedback in a single click.",
    category: "Retain Users",
    icon: FeedbackIcon,
  },

  {
    title: "Rage Click Survey",
    description: "Sometimes things don’t work. Trigger this rage click survey to catch users in rage.",
    category: "Retain Users",
    icon: AngryBirdRageIcon,
  },
];

export default function InsightOppos() {
  const plausible = usePlausible();
  const router = useRouter();
  return (
    <div className="pb-10 pt-12 md:pt-20">
      <div className="px-4 py-20 text-center sm:px-6 lg:px-8" id="best-practices">
        <h1 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-200 sm:text-4xl md:text-5xl">
          Get started with{" "}
          <span className="from-brand-light to-brand-dark bg-gradient-to-b bg-clip-text text-transparent xl:inline">
            Best Practices
          </span>
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base text-slate-500 dark:text-slate-300 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
          Run battle-tested approaches for qualitative user research in minutes.
        </p>
      </div>
      <div>
        <div className=" mx-auto grid max-w-5xl grid-cols-1 gap-6 px-2 sm:grid-cols-2">
          {BestPractices.map((bestPractice) => (
            <div
              key={bestPractice.title}
              className="drop-shadow-card duration-120 relative rounded-lg bg-slate-100 p-8 transition-all ease-in-out hover:scale-105 dark:bg-slate-800">
              <div
                className={clsx(
                  // base styles independent what type of button it is
                  "absolute right-10 rounded-full px-3 py-1",
                  // different styles depending on type
                  bestPractice.category === "Boost Retention" &&
                    "bg-pink-100 text-pink-500 dark:bg-pink-800 dark:text-pink-200",
                  bestPractice.category === "Exploration" &&
                    "bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-200",
                  bestPractice.category === "Retain Users" &&
                    "bg-orange-100 text-orange-500 dark:bg-orange-800 dark:text-orange-200"
                )}>
                {bestPractice.category}
              </div>
              <div className="h-12 w-12">
                <bestPractice.icon className="h-12 w-12 " />
              </div>
              <h3 className="mb-1 mt-3 text-xl font-bold text-slate-700 dark:text-slate-200">
                {bestPractice.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{bestPractice.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-4 w-fit px-4 py-2 text-center">
        <Button
          variant="highlight"
          onClick={() => {
            router.push("/demo");
            plausible("subPractices_CTA_LaunchDemo");
          }}>
          Launch Live Demo
        </Button>
      </div>
    </div>
  );
}
