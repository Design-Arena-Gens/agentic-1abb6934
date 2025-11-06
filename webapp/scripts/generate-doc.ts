import { writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { AlignmentType, Document, HeadingLevel, Packer, Paragraph, TextRun } from 'docx';
import {
  dashboardFocusAreas,
  energyChecklist,
  eveningReset,
  groceryFocus,
  habitLoops,
  macroTargets,
  meals,
  milestoneLog,
  mindfulnessStack,
  readinessMetrics,
  recoveryProtocols,
  recoveryScore,
  trendMetrics,
  weeklySplits,
  workoutBlocks
} from '../src/content/dailyPlan';

const outputDir = join(process.cwd(), 'public');
const outputPath = join(outputDir, 'FitnessTracker.docx');

if (!existsSync(outputDir)) {
  mkdirSync(outputDir);
}

const accentParagraph = (text: string) =>
  new Paragraph({
    children: [
      new TextRun({ text, bold: true, color: '2563EB' })
    ]
  });

const bullets = (items: string[]) =>
  items.map(
    (item) =>
      new Paragraph({
        text: item,
        bullet: { level: 0 }
      })
  );

const heading = (text: string, level: HeadingLevel = HeadingLevel.HEADING_2) =>
  new Paragraph({
    text,
    heading: level,
    spacing: { after: 80 }
  });

const labeledList = (label: string, entries: { key: string; value: string }[]) => [
  heading(label, HeadingLevel.HEADING_3),
  ...entries.map(
    (entry) =>
      new Paragraph({
        children: [
          new TextRun({ text: `${entry.key}: `, bold: true }),
          new TextRun({ text: entry.value })
        ],
        spacing: { after: 60 }
      })
  )
];

const doc = new Document({
  creator: 'Daily Fitness Tracker',
  title: 'Daily Fitness Tracker Plan',
  description: 'A structured 5-page routine for training, nutrition, and recovery.',
  sections: []
});

doc.addSection({
  properties: {},
  children: [
    new Paragraph({
      text: 'Daily Fitness Tracker',
      heading: HeadingLevel.TITLE,
      alignment: AlignmentType.CENTER,
      spacing: { after: 120 }
    }),
    new Paragraph({
      text: 'Execute the essentials, sustain momentum, and close the day with a win.',
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 }
    }),
    heading('Dashboard Overview', HeadingLevel.HEADING_1),
    accentParagraph('Focus Pillars'),
    ...dashboardFocusAreas.map(
      (area) =>
        new Paragraph({
          children: [
            new TextRun({ text: `${area.name} — `, bold: true }),
            new TextRun(area.status)
          ],
          spacing: { after: 60 }
        })
    ),
    accentParagraph('Readiness Indicators'),
    ...readinessMetrics.map(
      (metric) =>
        new Paragraph({
          text: `${metric.label}: ${metric.value}${metric.units} of ${metric.goal}${metric.units}`,
          spacing: { after: 60 }
        })
    ),
    accentParagraph('Execution Checklist'),
    ...bullets(energyChecklist),
    accentParagraph('Evening Reset Ritual'),
    ...bullets(eveningReset)
  ]
});

const formatChecklist = (title: string, focus: string, items: string[]) => [
  heading(title, HeadingLevel.HEADING_2),
  new Paragraph({ text: focus, spacing: { after: 60 } }),
  ...bullets(items)
];

doc.addSection({
  children: [
    heading('Training Blueprint', HeadingLevel.HEADING_1),
    ...workoutBlocks.flatMap((block) =>
      formatChecklist(`${block.label} • ${block.duration}`, block.focus, block.checklist)
    ),
    heading('Weekly Stimulus Map', HeadingLevel.HEADING_2),
    ...weeklySplits.map(
      (split) =>
        new Paragraph({
          children: [
            new TextRun({ text: `${split.day}: `, bold: true }),
            new TextRun(`${split.stimulus} — ${split.intent}`)
          ],
          spacing: { after: 60 }
        })
    )
  ]
});

const macroEntries = macroTargets.map((macro) => ({
  key: macro.label,
  value: `${macro.value}${macro.units} / ${macro.goal}${macro.units}`
}));

doc.addSection({
  children: [
    heading('Fuel Strategy', HeadingLevel.HEADING_1),
    ...labeledList('Daily Macro Targets', macroEntries),
    heading('Meals in the Rotation', HeadingLevel.HEADING_2),
    ...meals.flatMap((meal) => [
      new Paragraph({
        text: `${meal.name} • ${meal.time}`,
        heading: HeadingLevel.HEADING_3,
        spacing: { after: 40 }
      }),
      new Paragraph({ text: meal.highlight, spacing: { after: 40 } }),
      ...bullets(meal.items)
    ]),
    heading('Smart Grocery Focus', HeadingLevel.HEADING_2),
    ...bullets(groceryFocus)
  ]
});

doc.addSection({
  children: [
    heading('Progress Intelligence', HeadingLevel.HEADING_1),
    ...trendMetrics.map(
      (metric) =>
        new Paragraph({
          text: `${metric.label}: ${metric.value}${metric.units} → Goal ${metric.goal}${metric.units}`,
          spacing: { after: 60 }
        })
    ),
    heading('Recovery Rhythm', HeadingLevel.HEADING_2),
    ...recoveryScore.map(
      (entry) =>
        new Paragraph({
          text: `${entry.day}: readiness score ${entry.score}`,
          spacing: { after: 40 }
        })
    ),
    heading('Celebrated Wins', HeadingLevel.HEADING_2),
    ...milestoneLog.map(
      (milestone) =>
        new Paragraph({
          children: [
            new TextRun({ text: `${milestone.date} — `, bold: true }),
            new TextRun({ text: milestone.win }),
            new TextRun({ text: ` (Anchor: ${milestone.anchor})`, italics: true })
          ],
          spacing: { after: 60 }
        })
    )
  ]
});

doc.addSection({
  children: [
    heading('Wellness Systems', HeadingLevel.HEADING_1),
    ...habitLoops.flatMap((habit) => [
      heading(habit.title, HeadingLevel.HEADING_2),
      new Paragraph({ text: habit.description, spacing: { after: 40 } }),
      ...bullets(habit.steps)
    ]),
    heading('Mindfulness Stack', HeadingLevel.HEADING_2),
    ...mindfulnessStack.map(
      (practice) =>
        new Paragraph({
          text: `${practice.name} — ${practice.duration} | Cue: ${practice.cue}`,
          spacing: { after: 60 }
        })
    ),
    heading('Recovery Protocols', HeadingLevel.HEADING_2),
    ...bullets(recoveryProtocols)
  ]
});

async function build() {
  const buffer = await Packer.toBuffer(doc);
  writeFileSync(outputPath, buffer);
  // eslint-disable-next-line no-console
  console.log(`Word document generated at ${outputPath}`);
}

void build();
