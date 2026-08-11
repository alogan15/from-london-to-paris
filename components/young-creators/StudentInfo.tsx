import { StudentData } from "@/types/registration";

interface StudentInfoProps {
  students: StudentData[];

  updateStudent: (
    id: string,
    field: keyof StudentData,
    value: any
  ) => void;

  addStudent: () => void;

  removeStudent: (id: string) => void;
}

export default function StudentInfo({
  students,
  updateStudent,
  addStudent,
  removeStudent,
}: StudentInfoProps) {


  return (


<section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">
<div className="mt-10 space-y-8">
  <div className="flex items-center justify-between">
  <div>
    <h2 className="text-3xl font-bold text-slate-900">
      Student Information
    </h2>

    <p className="mt-3 text-slate-600">
      Tell us about each student attending camp.
    </p>
  </div>
</div>

<div className="mt-10 space-y-8"></div>

  {students.map((student, index) => (

    <div
      key={student.id}
      className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
    >

      <div className="mb-8 flex items-center justify-between">

        <h3 className="text-2xl font-bold text-slate-900">
          Student {index + 1}
        </h3>

        {students.length > 1 && (

          <button
            type="button"
            onClick={() => removeStudent(student.id)}
            className="text-sm font-medium text-red-500 hover:text-red-700"
          >
            Remove
          </button>

        )}

      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>

  <label className="mb-2 block text-sm font-medium text-slate-700">
    Student First Name
  </label>

  <input
    type="text"
    value={student.first_name}
    onChange={(e) =>
      updateStudent(
        student.id,
        "first_name",
        e.target.value
      )
    }
    placeholder="Jordan"
    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 placeholder:text-slate-400 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
  />

</div>
<div>

  <label className="mb-2 block text-sm font-medium text-slate-700">
    Student Last Name
  </label>

  <input
    type="text"
    value={student.last_name}
    onChange={(e) =>
      updateStudent(
        student.id,
        "last_name",
        e.target.value
      )
    }
    placeholder="Smith"
    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 placeholder:text-slate-400 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
  />

</div>
<div>

  <label className="mb-2 block text-sm font-medium text-slate-700">
    Age
  </label>

  <select
    value={student.age ?? ""}
    onChange={(e) =>
      updateStudent(
        student.id,
        "age",
        e.target.value === ""
          ? null
          : Number(e.target.value)
      )
    }
    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
  >

    <option value="">Select Age</option>

    {[10,11,12,13,14,15,16,17].map((age) => (
      <option key={age} value={age}>
        {age}
      </option>
    ))}

  </select>

</div>
<div>

  <label className="mb-2 block text-sm font-medium text-slate-700">
    Grade
  </label>

  <input
    type="text"
    value={student.grade}
    onChange={(e) =>
      updateStudent(
        student.id,
        "grade",
        e.target.value
      )
    }
    placeholder="6th Grade"
    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 placeholder:text-slate-400 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
  />

</div>
<div className="md:col-span-2">

  <label className="mb-2 block text-sm font-medium text-slate-700">
    Coding Experience
  </label>

  <select
    value={student.experience_level}
    onChange={(e) =>
      updateStudent(
        student.id,
        "experience_level",
        e.target.value
      )
    }
    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
  >

    <option value="">Select Experience</option>

    <option value="None">
      None
    </option>

    <option value="Beginner">
      Beginner
    </option>

    <option value="Some Experience">
      Some Experience
    </option>

  </select>

</div>
      </div>

    </div>

  ))}

  <button
    type="button"
    onClick={addStudent}
    className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
  >
    + Add Child
  </button>

</div>

</section>

  );
}