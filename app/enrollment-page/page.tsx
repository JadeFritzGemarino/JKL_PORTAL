"use client";

import { useState } from "react";

export default function StudentPortal() {
  const [activeTab, setActiveTab] = useState("enrollment");

  return (
    <main className="flex min-h-screen bg-[#f8f9fa]">
      {/* SIDEBAR */}
      <aside className="w-[200px] bg-[#0c0c0c] text-[#949494] h-screen fixed left-0 top-0 flex flex-col font-sans z-50">
        <div className="p-6 flex justify-center border-b border-white/5 mb-2">
          <img src="/jkl_assets/jkl.png" alt="Logo" className="w-20 h-auto" />
        </div>
        <nav className="flex flex-col">
          <button onClick={() => setActiveTab("home")} className={`flex items-center gap-4 px-5 py-4 hover:bg-[#1a1a1a] hover:text-white transition-all border-l-4 ${activeTab === 'home' ? 'border-jkl-green text-white bg-[#1a1a1a]' : 'border-transparent'}`}>
            <i className="fa fa-home text-[18px]"></i>
            <span className="text-[15px] font-medium">Home</span>
          </button>
          <button onClick={() => setActiveTab("enrollment")} className={`flex items-center gap-4 px-5 py-4 hover:bg-[#1a1a1a] hover:text-white transition-all border-l-4 ${activeTab === 'enrollment' ? 'border-jkl-green text-white bg-[#1a1a1a]' : 'border-transparent'}`}>
            <i className="fa fa-file-text text-[18px]"></i>
            <span className="text-[15px] font-medium">Enrollment</span>
          </button>
        </nav>
      </aside>

      {/* CONTENT AREA */}
      <section className="flex-1 ml-[200px] flex items-center justify-center p-12">
        
        {activeTab === "enrollment" && (
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-300 p-10">
            <h1 className="text-3xl font-black mb-2 tracking-tight text-gray-900">Enrollment Request Form</h1>
            <p className="text-gray-500 mb-8 text-sm">Please fill out the following details to proceed.</p>
            
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Name</label>
                <input type="text" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-jkl-green transition-all" placeholder="Enter Full Name" />
              </div>

              {/* Admission Type (Freshman/Transferee) */}
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Admission Type</label>
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 rounded-xl border font-bold hover:border-jkl-green transition-all bg-white focus:bg-jkl-green focus:text-white">Freshman</button>
                  <button className="p-4 rounded-xl border font-bold hover:border-jkl-green transition-all bg-white focus:bg-jkl-green focus:text-white">Transferee</button>
                </div>
              </div>

              {/* Classification (Regular/Irregular) */}
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Classification</label>
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 rounded-xl border font-bold text-jkl-green border-jkl-green bg-green-50 hover:bg-green-100 transition-all">Regular</button>
                  <button className="p-4 rounded-xl border font-bold text-red-500 border-red-200 bg-red-50 hover:bg-red-100 transition-all">Irregular</button>
                </div>
              </div>

              {/* Year Level Select */}
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Year Level</label>
                <select className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-jkl-green appearance-none cursor-pointer">
                  <option>1st Year</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                  <option>4th Year</option>
                </select>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-jkl-green text-white py-5 rounded-xl font-black text-lg hover:bg-green-600 transition-all shadow-xl shadow-green-100 active:scale-[0.98] mt-4 uppercase tracking-wider">
                Submit Request
              </button>
            </div>
          </div>
        )}

        {activeTab === "home" && (
          <h1 className="text-4xl font-black text-gray-900">Welcome to JKL SIS</h1>
        )}
      </section>
    </main>
  );
}