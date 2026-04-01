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
    <section className="w-full mx-auto text-left pb-24">
      <div className="px-6 md:px-12 lg:px-20 xl:px-28">
        <h3 className="text-base sm:text-lg lg:text-2xl font-medium text-foreground mb-10">
          My impact on teams and companies is clear.{" "}
          <span className="text-muted-foreground">
            For more than 6 years I have helped companies write mission critical
            software, raised startups and worked across borders. And now I am
            helping teams implement AI into their products.
          </span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <div>
            <p className="text-2xl font-medium text-foreground">10+</p>
            <p className="text-muted-foreground text-sm">open source projects</p>
          </div>
          <div>
            <p className="text-2xl font-medium text-foreground">8.6x</p>
            <p className="text-muted-foreground text-sm">faster embeddings</p>
          </div>
          <div>
            <p className="text-2xl font-medium text-foreground">500k+</p>
            <p className="text-muted-foreground text-sm">users shipped to</p>
          </div>
          <div>
            <p className="text-2xl font-medium text-foreground">6+</p>
            <p className="text-muted-foreground text-sm">years building</p>
          </div>
        </div>
      </div>

      <div className="w-full h-36 mt-6 px-0 md:px-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorAccent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a8a29e" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#a8a29e" stopOpacity={0} />
              </linearGradient>
            </defs>

            <Area
              type="monotone"
              dataKey="value"
              stroke="#a8a29e"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorAccent)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
