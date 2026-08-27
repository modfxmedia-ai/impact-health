"use client";

import { useState } from "react";
import { CtaSubmitButton } from "@/components/ui/CtaButton";

const ACTIVITY_LEVELS = [
  { value: 1.2, label: "Sedentary" },
  { value: 1.375, label: "Lightly active" },
  { value: 1.55, label: "Moderately active" },
  { value: 1.725, label: "Very active" },
  { value: 1.9, label: "Extremely active" },
];

const WEEKLY_LOSS_GOALS = [
  { value: 0, label: "Maintain weight" },
  { value: 0.5, label: "0.5 lbs/week" },
  { value: 1, label: "1 lb/week" },
  { value: 1.5, label: "1.5 lbs/week" },
  { value: 2, label: "2 lbs/week" },
];

const inputClasses =
  "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 outline-none transition-colors focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/30";

const labelClasses = "text-sm font-semibold text-brand-navy";

interface Results {
  bmr: number;
  tdee: number;
  target: number;
  protein: number;
  fat: number;
  carbs: number;
}

/** Recreates the live site's Calorie & Macro Calculator (Mifflin–St Jeor BMR + TDEE + macro split), restyled to match the site's design system. */
export function CalorieMacroCalculator() {
  const [sex, setSex] = useState<"male" | "female">("female");
  const [age, setAge] = useState("30");
  const [heightFt, setHeightFt] = useState("5");
  const [heightIn, setHeightIn] = useState("6");
  const [weight, setWeight] = useState("150");
  const [activity, setActivity] = useState(String(ACTIVITY_LEVELS[1].value));
  const [weeklyLoss, setWeeklyLoss] = useState(String(WEEKLY_LOSS_GOALS[0].value));
  const [protPct, setProtPct] = useState("30");
  const [fatPct, setFatPct] = useState("25");
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState<string | null>(null);

  function calculate() {
    const ageNum = Number(age);
    const ftNum = Number(heightFt);
    const inNum = Number(heightIn) || 0;
    const weightNum = Number(weight);
    const protPctNum = Number(protPct) / 100;
    const fatPctNum = Number(fatPct) / 100;

    if (!ageNum || !ftNum || !weightNum) {
      setError("Please fill in age, height, and weight to calculate your results.");
      setResults(null);
      return;
    }

    const heightCm = (ftNum * 12 + inNum) * 2.54;
    const weightKg = weightNum * 0.453592;

    // BMR (Mifflin–St Jeor)
    const bmr = 10 * weightKg + 6.25 * heightCm - 5 * ageNum + (sex === "male" ? 5 : -161);
    const tdee = Math.round(bmr * Number(activity));
    const dailyDeficit = Math.round((Number(weeklyLoss) * 3500) / 7);
    const target = tdee - dailyDeficit;

    const protCals = target * protPctNum;
    const fatCals = target * fatPctNum;
    const carbCals = target - protCals - fatCals;

    setError(null);
    setResults({
      bmr: Math.round(bmr),
      tdee,
      target,
      protein: Math.round(protCals / 4),
      fat: Math.round(fatCals / 9),
      carbs: Math.round(carbCals / 4),
    });
  }

  return (
    <div className="not-prose overflow-hidden rounded-2xl border border-zinc-200/60 bg-white shadow-sm">
      <div className="bg-brand-navy px-6 py-6 text-center sm:px-8">
        <h3 className="text-xl font-bold text-white sm:text-2xl">
          Calorie &amp; Macro Calculator
        </h3>
        <p className="mt-2 text-sm text-white/80">
          Estimate your daily calorie target and macro split based on your goals.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculate();
        }}
        className="grid grid-cols-1 gap-5 p-6 sm:grid-cols-2 sm:p-8"
      >
        <label className={labelClasses}>
          Sex
          <select
            value={sex}
            onChange={(e) => setSex(e.target.value as "male" | "female")}
            className={`mt-1.5 ${inputClasses}`}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <label className={labelClasses}>
          Age (years)
          <input
            type="number"
            min={10}
            max={120}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className={`mt-1.5 ${inputClasses}`}
          />
        </label>

        <label className={labelClasses}>
          Height
          <div className="mt-1.5 flex gap-2">
            <input
              type="number"
              min={3}
              max={8}
              placeholder="ft"
              value={heightFt}
              onChange={(e) => setHeightFt(e.target.value)}
              className={inputClasses}
            />
            <input
              type="number"
              min={0}
              max={11}
              placeholder="in"
              value={heightIn}
              onChange={(e) => setHeightIn(e.target.value)}
              className={inputClasses}
            />
          </div>
        </label>

        <label className={labelClasses}>
          Weight (lbs)
          <input
            type="number"
            min={50}
            max={600}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className={`mt-1.5 ${inputClasses}`}
          />
        </label>

        <label className={labelClasses}>
          Activity Level
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className={`mt-1.5 ${inputClasses}`}
          >
            {ACTIVITY_LEVELS.map((level) => (
              <option key={level.label} value={level.value}>
                {level.label}
              </option>
            ))}
          </select>
        </label>

        <label className={labelClasses}>
          Weekly Loss Goal
          <select
            value={weeklyLoss}
            onChange={(e) => setWeeklyLoss(e.target.value)}
            className={`mt-1.5 ${inputClasses}`}
          >
            {WEEKLY_LOSS_GOALS.map((goal) => (
              <option key={goal.label} value={goal.value}>
                {goal.label}
              </option>
            ))}
          </select>
        </label>

        <label className={labelClasses}>
          Protein % of calories
          <input
            type="number"
            min={10}
            max={50}
            value={protPct}
            onChange={(e) => setProtPct(e.target.value)}
            className={`mt-1.5 ${inputClasses}`}
          />
        </label>

        <label className={labelClasses}>
          Fat % of calories
          <input
            type="number"
            min={10}
            max={40}
            value={fatPct}
            onChange={(e) => setFatPct(e.target.value)}
            className={`mt-1.5 ${inputClasses}`}
          />
        </label>

        <CtaSubmitButton variant="teal" className="sm:col-span-2 mt-1 w-full">
          Calculate
        </CtaSubmitButton>

        {error && (
          <p className="sm:col-span-2 text-sm font-medium text-red-600">{error}</p>
        )}
      </form>

      {results && (
        <div className="border-t border-zinc-200/60 bg-[#f4f8fb] p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200/60 bg-white px-4 py-6 text-center shadow-sm">
              <p className="text-3xl font-extrabold text-brand-teal">{results.bmr}</p>
              <p className="mt-1 text-sm font-semibold text-brand-navy">BMR</p>
              <p className="text-xs text-zinc-500">kcal/day</p>
            </div>
            <div className="rounded-2xl border border-zinc-200/60 bg-white px-4 py-6 text-center shadow-sm">
              <p className="text-3xl font-extrabold text-brand-teal">{results.tdee}</p>
              <p className="mt-1 text-sm font-semibold text-brand-navy">TDEE</p>
              <p className="text-xs text-zinc-500">kcal/day</p>
            </div>
            <div className="rounded-2xl border border-brand-teal/30 bg-brand-navy px-4 py-6 text-center shadow-sm">
              <p className="text-3xl font-extrabold text-white">{results.target}</p>
              <p className="mt-1 text-sm font-semibold text-white/90">Target Calories</p>
              <p className="text-xs text-white/70">kcal/day</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200/60 bg-white px-4 py-6 text-center shadow-sm">
              <p className="text-2xl font-extrabold text-brand-navy">{results.protein}g</p>
              <p className="mt-1 text-sm font-semibold text-zinc-600">Protein</p>
            </div>
            <div className="rounded-2xl border border-zinc-200/60 bg-white px-4 py-6 text-center shadow-sm">
              <p className="text-2xl font-extrabold text-brand-navy">{results.fat}g</p>
              <p className="mt-1 text-sm font-semibold text-zinc-600">Fat</p>
            </div>
            <div className="rounded-2xl border border-zinc-200/60 bg-white px-4 py-6 text-center shadow-sm">
              <p className="text-2xl font-extrabold text-brand-navy">{results.carbs}g</p>
              <p className="mt-1 text-sm font-semibold text-zinc-600">Carbs</p>
            </div>
          </div>

          <p className="mt-5 text-center text-xs text-zinc-500">
            This is an estimate for general wellness purposes, not medical advice.
            Talk to our team for a personalized plan.
          </p>
        </div>
      )}
    </div>
  );
}
