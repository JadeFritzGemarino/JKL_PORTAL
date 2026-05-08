"use client";

import { useState } from "react";

export default function AdminGradePortal() {
  const [activeTab, setActiveTab] = useState("academics");
  
  // Admin Workflow States: 
  // "waiting" (No teachers have sent yet)
  // "reviewing" (Admin has items to approve)
  // "completed" (Admin has released everything)
  const [adminTaskStatus, setAdminTaskStatus] = useState("reviewing");

  return (
    <main className="flex min-h-screen bg-[#f3f4f6]">
      
      {/* --- SIDEBAR (UNCHANGED FORMAT) --- */}
      <aside className="w-[200px] bg-[#0c0c0c] text-[#949494] h-screen fixed left-0 top-0 flex flex-col font-sans z-50">
        <div className="p-6 flex justify-center border-b border-white/5 mb-2">
          <img src="/jkl_assets/jkl.png" alt="Logo" className="w-20 h-auto" />
        </div>

        <nav className="flex flex-col">
          <button onClick={() => setActiveTab("home")} className="flex items-center gap-4 px-5 py-4 hover:bg-[#1a1a1a] hover:text-white transition-all border-l-4 border-transparent">
            <i className="fa fa-home text-[18px]"></i>
            <span className="text-[15px] font-medium">Dashboard</span>
          </button>

          <div className="relative group">
            <button onClick={() => setActiveTab("academics")} className="w-full flex items-center gap-4 px-5 py-4 hover:bg-[#1a1a1a] hover:text-white transition-all border-l-4 border-jkl-green text-white bg-[#1a1a1a] text-left">
              <i className="fa fa-graduation-cap text-[18px]"></i>
              <span className="text-[15px] font-medium">Grade Management</span>
            </button>
          </div>

          <button className="flex items-center gap-4 px-5 py-4 hover:bg-[#1a1a1a] hover:text-white transition-all border-l-4 border-transparent">
            <i className="fa fa-users text-[18px]"></i>
            <span className="text-[15px] font-medium">User Accounts</span>
          </button>
        </nav>
      </aside>

      {/* --- MAIN ADMIN AREA --- */}
      <section className="flex-1 ml-[200px] p-10">
        
        {activeTab === "academics" && (
          <div className="w-full max-w-5xl mx-auto space-y-6">
            
            {/* ADMIN HEADER */}
            <div className="flex justify-between items-end mb-8">
              <div>
                <h1 className="text-3xl font-black tracking-tight text-gray-900">ADMINISTRATIVE PANEL</h1>
                <p className="text-gray-500 font-medium">Review and release semestral grades to the student portal.</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">System Status</span>
                <span className="bg-jkl-green/10 text-jkl-green px-3 py-1 rounded-full text-xs font-bold border border-jkl-green/20">Final Grades Period</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              
              {/* LEFT COLUMN: PENDING QUEUE */}
              <div className="col-span-1 space-y-4">
                <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest ml-2">Pending Submissions</h2>
                
                {/* Teacher Submission Item */}
                <div className={`p-5 rounded-2xl border transition-all ${adminTaskStatus === 'reviewing' ? 'bg-white border-jkl-green shadow-md' : 'bg-gray-50 border-gray-200 opacity-50'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded font-bold">URGENT</span>
                    <i className="fa fa-clock-o text-gray-300 text-xs"></i>
                  </div>
                  <h4 className="font-bold text-gray-800">Prof. Ricardo Dalisay</h4>
                  <p className="text-xs text-gray-500 mb-4">BSIT - 3A (Mobile App Dev)</p>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-jkl-green uppercase">
                    <span className="w-1.5 h-1.5 bg-jkl-green rounded-full animate-pulse"></span>
                    Ready for Review
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-gray-200 bg-white opacity-40 grayscale cursor-not-allowed">
                  <h4 className="font-bold text-gray-800">Prof. Elena Gilbert</h4>
                  <p className="text-xs text-gray-500">BSCS - 1B (Intro to Computing)</p>
                </div>
              </div>

              {/* RIGHT COLUMN: WORKSTATION */}
              <div className="col-span-2">
                {adminTaskStatus === "reviewing" ? (
                  <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="p-8 border-b border-gray-50 bg-gray-50/50 flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-black text-gray-900">Grade Verification</h3>
                        <p className="text-sm text-gray-500">Reviewing final marks for Section <span className="font-bold text-black">BSIT-3A</span></p>
                      </div>
                      <i className="fa fa-file-text-o text-gray-300 text-2xl"></i>
                    </div>

                    <div className="p-0">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-gray-50">
                            <th className="p-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Student ID</th>
                            <th className="p-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Student Name</th>
                            <th className="p-6 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Grade</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-50 hover:bg-gray-50/50">
                            <td className="p-6 text-sm font-medium">2021-0042</td>
                            <td className="p-6 text-sm font-bold">Cardo Morales</td>
                            <td className="p-6 text-center"><span className="text-jkl-green font-black">1.25</span></td>
                          </tr>
                          <tr className="border-b border-gray-50 hover:bg-gray-50/50">
                            <td className="p-6 text-sm font-medium">2021-0155</td>
                            <td className="p-6 text-sm font-bold">Niana Guerrero</td>
                            <td className="p-6 text-center"><span className="text-jkl-green font-black">1.50</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="p-8 bg-white border-t border-gray-50 flex gap-4">
                      <button 
                        onClick={() => setAdminTaskStatus("completed")}
                        className="flex-1 bg-jkl-green text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-green-600 transition-all shadow-lg shadow-green-900/20"
                      >
                        Approve & Release to Students
                      </button>
                      <button className="px-8 py-4 bg-gray-100 text-gray-400 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-red-50 hover:text-red-500 transition-all">
                        Reject
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-3xl border-2 border-dashed border-gray-200 py-32 flex flex-col items-center justify-center text-center animate-in zoom-in duration-300">
                    <div className="w-20 h-20 bg-jkl-green/10 rounded-full flex items-center justify-center mb-6">
                      <i className="fa fa-check text-jkl-green text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900">All Tasks Completed</h3>
                    <p className="text-gray-500 max-w-sm mt-2 font-medium">All submitted grades have been reviewed and published to the student portal.</p>
                    <button 
                      onClick={() => setAdminTaskStatus("reviewing")}
                      className="mt-8 text-xs font-black text-jkl-green uppercase tracking-widest hover:underline"
                    >
                      Refresh Queue
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

      </section>
    </main>
  );
}