"use client";

import { useState } from "react";

export default function StudentPortal() {
  const [activeTab, setActiveTab] = useState("academics");
  
  // workflowStatus: "pending" (locked) or "published" (visible)
  const [workflowStatus, setWorkflowStatus] = useState("published"); 

  return (
    <main className="flex min-h-screen bg-[#f3f4f6]">
      
      {/* --- SIDEBAR (UNCHANGED) --- */}
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
            <i className="fa fa-graduation-cap text-[18px]"></i>
            <span className="text-[15px] font-medium">Academics</span>
          </button>
        </nav>
      </aside>

      {/* --- STUDENT CONTENT --- */}
      <section className="flex-1 ml-[200px] p-10 flex flex-col items-center">
        
        {activeTab === "academics" && (
          <div className="w-full max-w-5xl space-y-6">
            
            {/* STUDENT WELCOME HEADER */}
            <div className="flex justify-between items-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-jkl-green rounded-2xl flex items-center justify-center text-white text-2xl font-black">
                  JD
                </div>
                <div>
                  <h1 className="text-2xl font-black text-gray-900 uppercase tracking-tight">John Doe</h1>
                  <p className="text-gray-500 font-medium">Student ID: 2021-0042 • BSIT - 3A</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Current Semester</p>
                <p className="font-bold text-gray-800">1st Semester, 2025-2026</p>
              </div>
            </div>

            {workflowStatus === "published" ? (
              /* --- REVEALED GRADES VIEW --- */
              <div className="grid grid-cols-3 gap-6 animate-in fade-in zoom-in duration-500">
                
                {/* GRADE TABLE */}
                <div className="col-span-2 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="p-6 border-b border-gray-50 bg-gray-50/50 flex justify-between items-center">
                    <h3 className="font-black text-gray-800 uppercase text-sm tracking-widest">Academic Record</h3>
                    <button className="text-xs font-bold text-jkl-green hover:underline"><i className="fa fa-download mr-1"></i> Print Slip</button>
                  </div>
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-50">
                        <th className="p-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Code</th>
                        <th className="p-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Subject</th>
                        <th className="p-5 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Grade</th>
                        <th className="p-5 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Remark</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      <tr>
                        <td className="p-5 font-bold text-gray-700">IT-312</td>
                        <td className="p-5 text-sm text-gray-600 font-medium">Mobile App Development</td>
                        <td className="p-5 text-center font-black text-jkl-green text-lg">1.25</td>
                        <td className="p-5 text-center"><span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-1 rounded-md uppercase">Passed</span></td>
                      </tr>
                      <tr>
                        <td className="p-5 font-bold text-gray-700">IT-315</td>
                        <td className="p-5 text-sm text-gray-600 font-medium">System Administration</td>
                        <td className="p-5 text-center font-black text-jkl-green text-lg">1.50</td>
                        <td className="p-5 text-center"><span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-1 rounded-md uppercase">Passed</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* SUMMARY SIDEBAR */}
                <div className="col-span-1 space-y-6">
                  <div className="bg-[#0c0c0c] p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                    <div className="relative z-10">
                      <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-4">General Weighted Average</p>
                      <h2 className="text-5xl font-black text-jkl-green mb-2">1.37</h2>
                      <p className="text-xs text-white/60 font-medium">Ranking: Top 5% of Class</p>
                    </div>
                    {/* Decorative Circle */}
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-jkl-green/10 rounded-full blur-2xl"></div>
                  </div>

                  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Grade Legend</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs border-b border-gray-50 pb-2">
                        <span className="font-bold text-gray-600">1.00 - 1.25</span>
                        <span className="text-jkl-green font-black">Excellent</span>
                      </div>
                      <div className="flex justify-between text-xs border-b border-gray-50 pb-2">
                        <span className="font-bold text-gray-600">1.50 - 1.75</span>
                        <span className="text-gray-400 font-bold">Very Good</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="font-bold text-gray-600">3.00</span>
                        <span className="text-red-400 font-bold">Passing</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              /* --- LOCKED VIEW --- */
              <div className="bg-white py-24 rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-8 relative">
                  <i className="fa fa-lock text-gray-200 text-4xl"></i>
                  <div className="absolute inset-0 border-4 border-dashed border-gray-100 rounded-full animate-spin-slow"></div>
                </div>
                <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Grades Pending Release</h3>
                <p className="text-gray-500 max-w-sm mt-3 font-medium leading-relaxed">
                  Your instructors have submitted the marks. The Registrar is currently finalizing the school-wide release.
                </p>
                <div className="mt-10 flex items-center gap-3 bg-amber-50 px-6 py-2 rounded-full border border-amber-100">
                  <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-black text-amber-700 uppercase tracking-widest">Admin Verification in Progress</span>
                </div>
              </div>
            )}
          </div>
        )}

      </section>
    </main>
  );
}