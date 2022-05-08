# @yanshoof/types

Global, organization-scoped types and type guards

## Why this package

In order to reduce code splitting across our platforms, we created a package that can be used to declare types.

## The Type Library

### Date and Time

- `type DayOfWeek`: a number from 0 to 6 inclusive
- `type HourOfDay`: a timetable hour, ranging from 0 to 12 inclusive
- `const DAYS_IN_WEEK`: 7
- `const HOURS_OF_DAY`: 13

### Classrooms

- `interface IClassLookup` represents a class lookup object

### School Search

- `interface ISchoolLookupResult` respresents a school lookup result

### Lessons and Changes

- `enum LessonModification` is a modification that can be done to a lesson: cancellation, change of teacher, change of classroom, etc.
- `interface IModification` is a combination of an optional modification and optional data
- `interface IStudyGroup` is a combination of a teacher and a subject
- `function isStudyGroup` is a type guard for the study group interface
- `interface IStudyGroupWithModification extends IStudyGroup, IModification` represents a modification. Determines a study group and the exact modification to it.
- `interface ILesson extends IStudyGroup` represents a changeable lesson and is the standard lesson type across all plafroms
- `type LessonOrMultiple` represents multiple lessons taking place at the same time
- `function isILessonObj` is a type guard for the ILesson interface
- `function isAnyLessonObj` is a less strict type guard for multiple types of lessons
- `type ITeacherLesson` is a lesson whose teacher is known in advance
- `interface IChange extends IStudyGroupWithModification` is a change in the schedule, the standard across all platforms.

### Timetables

- `interface ITimetable<TLesson, TSchedule>` represents a timetable that is built from a schedule of another type

## Usage

If you only wish to use the types (and not the type guards),

```bash
npm i --save-dev @yanshoof/types
```

If you do wish to use the type guards

```bash
npm i @yanshoof/types
```
