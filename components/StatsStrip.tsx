"use client";

export default function StatsStrip() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
        <div className="text-center py-2 lg:border-r lg:border-gray-100">
          <div className="text-2xl sm:text-3xl font-extrabold gradient-text mb-1">
            <span>1-on-1</span>
          </div>
          <p className="text-xs text-gray-400">Dedicated Support</p>
        </div>
        <div className="text-center py-2 lg:border-r lg:border-gray-100">
          <div className="text-2xl sm:text-3xl font-extrabold gradient-text mb-1">
            <span>100%</span>
          </div>
          <p className="text-xs text-gray-400">Client Retention</p>
        </div>
        <div className="text-center py-2 lg:border-r lg:border-gray-100">
          <div className="text-2xl sm:text-3xl font-extrabold gradient-text mb-1">
            <span>99.8%</span>
          </div>
          <p className="text-xs text-gray-400">Filing Accuracy</p>
        </div>
        <div className="text-center py-2">
          <div className="text-2xl sm:text-3xl font-extrabold gradient-text mb-1">
            <span>0</span>
          </div>
          <p className="text-xs text-gray-400">Missed Deadlines</p>
        </div>
      </div>
    </section>
  );
}
