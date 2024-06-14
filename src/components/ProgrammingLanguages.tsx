import React from "react";

export function calculateYears(startDate: string): { yearsString: string, yearsNumeric: number } {
  const start = new Date(startDate);
  const now = new Date();
  const diffYears = now.getFullYear() - start.getFullYear();
  const diffMonths = now.getMonth() - start.getMonth();

  // Calculate total months difference
  const totalMonthsDiff = diffYears * 12 + diffMonths;

  if (totalMonthsDiff < 10) {
    return { yearsString: '<1yr', yearsNumeric: 0 };
  }

  // Determine the years, rounding up if more than 6 months
  const years = Math.floor(totalMonthsDiff / 12) + (totalMonthsDiff % 12 >= 6 ? 1 : 0);

  let yearsString;
  if (years === 1) yearsString = '1yr';
  else yearsString = `${years}yrs`;

  return { yearsString, yearsNumeric: years };
}

const languages = [
  { name: "C++", since: "2018-06-01" },
  { name: "Python", since: "2018-09-01" },
  { name: "C", since: "2019-06-01" },
  { name: "shell / bash, zsh, fish", since: "2019-06-01" },
  { name: "Git", since: "2023-08-01" },
  { name: "TypeScript", since: "2024-02-01" },
  { name: "React", since: "2024-02-01" },
  { name: "Next.js", since: "2024-02-01" },
  { name: "Java", since: "2024-04-01" },
  { name: "Fortran", since: "2024-04-01" },
];

export default function ProgrammingLanguages() {
  const sortedlanguages = languages
    .map((language) => {
      const { yearsString, yearsNumeric } = calculateYears(language.since);
      return { ...language, yearsString, yearsNumeric };
    })
    .sort((a, b) => b.yearsNumeric - a.yearsNumeric);
  return (
    <ul>
      {sortedlanguages.map((language, index) => (
        <li key={index}>
          {language.name} ({language.yearsString})
        </li>
      ))}
    </ul>
  );
}
