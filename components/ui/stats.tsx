"use client";

import { AreaChart, Area, ResponsiveContainer } from "recharts";

export default function Stats() {
  const data = [
    { name: "Jan", value: 20 },
    { name: "Feb", value: 40 },
    { name: "Mar", value: 60 },
    { name: "Apr", value: 80 },
    { name: "May", value: 100 },
    { name: "Jun", value: 130 },
    { name: "Jul", value: 160 },
  ];

  return (
    <section className="w-full mx-auto text-left pb-32">
      <div className="px-8 md:px-16 lg:px-24 xl:px-32">
        <h3 className="text-lg sm:text-xl lg:text-4xl font-medium text-gray-900 dark:text-white mb-16">
          My impact on teams and companies is clear.{" "}
          <span className="text-gray-500 dark:text-gray-400 text-lg sm:text-xl lg:text-4xl">
            For more than 6 years I have helped companies write mission critical
            software, raised startups and worked across borders. And now I am
            committed on building the future of AI infra.
          </span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
          <div>
            <p className="text-3xl font-medium text-gray-900 dark:text-white">
              1.5-2x
            </p>
            <p className="text-gray-500 text-md">faster query</p>
          </div>
          <div>
            <p className="text-3xl font-medium text-gray-900 dark:text-white">
              25%
            </p>
            <p className="text-gray-500 text-md">less CPU consumption</p>
          </div>
          <div>
            <p className="text-3xl font-medium text-gray-900 dark:text-white">
              8-10x
            </p>
            <p className="text-gray-500 text-md">faster image search</p>
          </div>
        </div>
      </div>

      {/* Area Chart */}
      <div className="w-full h-48 mt-8 px-0 md:px-8">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorBlue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
