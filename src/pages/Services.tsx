import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  IconPlane,
  IconTicket,
  IconGlobe,
} from "@tabler/icons-react";
import { ServicesDemo } from "../pages/imageCards"; // Import the component

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function FeaturesSectionDemo() {
  const features: Feature[] = [
    {
      title: "24/7 Ticket Booking",
      description:
        "Book your tickets anytime, anywhere. Our system is available round-the-clock to serve your travel needs.",
      icon: <IconTicket />,
    },
    {
      title: "Global Travel Assistance",
      description:
        "From visa information to local travel tips, we provide comprehensive assistance for your global travel needs.",
      icon: <IconGlobe />,
    },
    {
      title: "Affordable Travel Packages",
      description:
        "Get the best deals on travel packages. We offer competitive pricing with no hidden fees.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Seamless Travel Experience",
      description:
        "Enjoy a smooth travel experience with our easy-to-use platform and efficient service.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Multi-Destination Booking",
      description:
        "Plan and book trips to multiple destinations in one go. Convenience at your fingertips.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any travel-related queries.",
      icon: <IconHelp />,
    },
    {
      title: "Travel Insurance",
      description:
        "Protect your travels with our comprehensive insurance plans, ensuring peace of mind wherever you go.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Exclusive Travel Deals",
      description:
        "Access exclusive deals and offers available only through our platform. Save more on your travels.",
      icon: <IconHeart />,
    },
  ];

  return (
    <div className="">
      <ServicesDemo />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-1 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <FeatureItem key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

interface FeatureItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  icon,
  index,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
