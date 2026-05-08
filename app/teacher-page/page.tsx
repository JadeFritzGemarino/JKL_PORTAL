"use client";

import { useState } from "react";

// 1. Define the Student interface to fix type errors
interface Student {
  id: string;
  name: string;
  grade: string;
}

export default function TeacherPortal() {
  const [activeTab, setActiveTab] = useState("academics");
  const [workflowStatus, setWorkflowStatus] = useState<"draft" | "sent">("draft");

  // 2. Apply the interface to the state
  const [students, setStudents] = useState<Student[]>([
    { id: "2021-0042", name: "Cardo Morales", grade: "" },
    { id: "2021-0155", name: "Niana Guerrero", grade: "" },
    { id: "2021-0098", name: "Basilio Santos", grade: "" },
  ]);

  // 3. Fix the red underlines by explicitly typing parameters
  const handleGradeChange = (index: number, value: string) => {
    const newStudents = [...students];
    newStudents[index].grade = value;
    setStudents(newStudents);
  };

  return (
    <main className="flex min-h-screen bg-[#f3f4f6]">
      {/* --- SIDEBAR --- */}
      <aside className="w-[200px] bg-[#0c0c0c] text-[#949494] h-screen fixed left-0 top-0 flex flex-col font-sans z-50">
        <div className="p-6 flex justify-center border-b border-white/5 mb-2">
          <img src="/jkl_assets/jkl.png" alt="Logo" className="w-20 h-auto" />
        </div>
        <nav className="flex flex-col">
          <button onClick={() => setActiveTab("home")} className={`flex items-center gap-4 px-5 py-4 transition-all border-l-4 ${activeTab === 'home' ? 'border-jkl-green text-white bg-[#1a1a1a]' : 'border-transparent hover:bg-[#1a1a1a] hover:text-white'}`}>
            <i className="fa fa-home text-[18px]"></i>
            <span className="text-[15px] font-medium">Home</span>
          </button>
          <button onClick={() => setActiveTab("academics")} className={`flex items-center gap-4 px-5 py-4 transition-all border-l-4 ${activeTab === 'academics' ? 'border-jkl-green text-white bg-[#1a1a1a]' : 'border-transparent hover:bg-[#1a1a1a] hover:text-white'}`}>
            <i className="fa fa-book text-[18px]"></i>
            <span className="text-[15px] font-medium">Class Records</span>
          </button>
        </nav>
      </aside>

      {/* --- MAIN AREA --- */}
      <section className="flex-1 ml-[200px] p-10">
        {activeTab === "academics" && (
          <div className="max-w-5xl mx-auto space-y-6">
            
            {/* CLASS HEADER */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-black text-gray-900 uppercase tracking-tight">IT-312: Mobile App Development</h1>
                <p className="text-gray-500 font-medium text-sm">Section: <span className="text-black font-semibold">BSIT-3A</span></p>
              </div>
              <div className={`px-4 py-1 rounded-full text-[10px] font-bold border ${workflowStatus === 'draft' ? 'bg-amber-50 text-amber-600 border-amber-200' : 'bg-green-50 text-green-600 border-green-200'}`}>
                {workflowStatus === 'draft' ? '● READY TO ENCODE' : '● SENT TO ADMIN'}
              </div>
            </div>

            {/* ENCODING TABLE */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-50 bg-gray-50/50 flex justify-between items-center">
                <h3 className="font-black text-gray-800 uppercase text-xs tracking-widest">Grade Entry</h3>
                <p className="text-[10px] text-gray-400 italic">Numeric format only (e.g. 1.25)</p>
              </div>

              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-50">
                    <th className="p-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">ID</th>
                    <th className="p-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Full Name</th>
                    <th className="p-6 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {students.map((student, index) => (
                    <tr key={student.id} className="hover:bg-gray-50/50 transition-all">
                      <td className="p-6 text-sm font-medium text-gray-500">{student.id}</td>
                      <td className="p-6 text-sm font-bold text-gray-800">{student.name}</td>
                      <td className="p-6 text-center">
                        <input 
                          type="text"
                          value={student.grade}
                          onChange={(e) => handleGradeChange(index, e.target.value)}
                          disabled={workflowStatus === "sent"}
                          placeholder="0.00"
                          className={`w-20 text-center py-2 rounded-xl font-black text-lg border outline-none transition-all ${workflowStatus === 'sent' ? 'bg-gray-50 border-transparent text-jkl-green' : 'bg-white border-gray-200 focus:border-jkl-green'}`}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* ACTION FOOTER */}
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 flex justify-end items-center gap-6">
                <p className="text-xs text-gray-400 max-w-xs text-right italic">
                  {workflowStatus === "draft" 
                    ? "Grades will be sent to the Admin for approval and release." 
                    : "Grades have been submitted and are now locked."}
                </p>
                <button 
                  onClick={() => setWorkflowStatus("sent")}
                  disabled={workflowStatus === "sent"}
                  className={`px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-lg ${workflowStatus === 'draft' ? 'bg-[#111827] text-white hover:bg-jkl-green' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                >
                  {workflowStatus === "draft" ? "Push to Admin" : "Submitted"}
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}