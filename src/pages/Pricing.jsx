import { Link } from "react-router-dom";

export default function PricingPlans() {
  const plans = [
    {
      name: "Free",
      price: "Free",
      subtitle: "5 scans/day",
      features: [
        "Basic threat detection",
        "Standard speed",
        "Email support",
      ],
      button: "Get Started",
    },
    {
      name: "Pro",
      price: "$9.99/mo",
      subtitle: "1000 credits/month",
      features: [
        "Advanced threat detection",
        "Priority scanning",
        "24/7 support",
        "API access",
        "Detailed reports",
        "Community Rewards"
      ],
      button: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      subtitle: "Unlimited",
      features: [
        "Enterprise-grade detection",
        "Dedicated support",
        "Custom integrations",
        "Team management",
        "SLA guarantee",
      ],
      button: "Contact Sales",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#0b1220] to-[#0f172a] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select the plan that best fits your security needs. All plans include
            our core threat detection technology.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 bg-[#162033] border transition
              ${
                plan.popular
                  ? "border-blue-500 shadow-[0_0_0_1px_#3b82f6]"
                  : "border-[#1f2a44]"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-xs px-4 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}

              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-blue-400 mb-1">
                {plan.price}
              </p>
              <p className="text-gray-400 mb-6">{plan.subtitle}</p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-green-400">✔</span>
                    <span className="text-gray-200">{f}</span>
                  </li>
                ))}
              </ul>

              {plan.name === "Free" ? (
                <Link to="/guest" className="block">
                  <button
                    className={`w-full py-3 rounded-xl font-semibold transition
                    ${
                      plan.popular
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "border border-blue-500 text-white hover:bg-blue-500"
                    }`}
                  >
                    {plan.button}
                  </button>
                </Link>
              ) : (
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition
                  ${
                    plan.popular
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "border border-blue-500 text-white hover:bg-blue-500"
                  }`}
                >
                  {plan.button}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Earn Free Credits */}
        <div className="mt-20 bg-[#162033] border border-[#1f2a44] rounded-2xl p-10">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            ⭐ Earn Free Credits
          </h3>
          <p className="text-gray-400 mb-3">
            Help protect the community by flagging malicious URLs. Earn up to 50
            reward points per confirmed threat.
          </p>
          <p className="text-blue-400 font-medium mb-2">
            100 reward points = 1 scan credit
          </p>
          <p className="text-sm text-gray-500">
            Note: Anti-abuse measures are in place. Spam flagging will result in
            account suspension.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button className="bg-blue-500 hover:bg-blue-600 px-10 py-4 rounded-xl font-semibold">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}
