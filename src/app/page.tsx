import { ChevronDown, Sun, Moon, Monitor, Accessibility, Play, Image } from "lucide-react";



export default function AppearanceSettings() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-lg font-bold text-gray-900">Appearance</h2>
      <p className="text-sm text-gray-500">Set or customize your preferences for the system</p>
    
      <div className="mt-4">
        <label className="text-sm font-semibold text-gray-700">Language</label>
        <div className="flex items-center justify-between border rounded-lg px-3 py-2 mt-1 cursor-pointer">
          <span>English</span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-sm font-semibold text-gray-700">Interface theme</h3>
        <div className="flex flex-col items-center justify-center">
      <img src="/Theme1.png" alt="Logo" className="w-102 h-32 " />
   
          
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-sm font-semibold text-gray-700">Accent color</h3>
        <div className="flex space-x-2 mt-2">
          {["red", "orange", "yellow", "green", "blue", "purple"].map((color) => (
            <span
              key={color}
              className={`w-6 h-6 rounded-full bg-${color}-500 cursor-pointer`}
            ></span>
          ))}
        </div>
      </div>
      
      <div className="mt-6 space-y-4">
        {[{ label: "Reduce motion", icon: Accessibility }, { label: "Auto play", icon: Play }, { label: "High quality photo", icon: Image }].map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <item.icon className="w-5 h-5 text-gray-500" />
              <span className="text-sm text-gray-700">{item.label}</span>
            </div>
            <div className="w-10 h-5 bg-gray-300 rounded-full flex items-center p-1 cursor-pointer">
              <div className="w-4 h-4 bg-white rounded-full shadow"></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex justify-between text-sm text-gray-500">
        <button className="py-2 px-4 bg-gray-200 rounded-lg">Cancel</button>
        <button className="py-2 px-4 bg-blue-600 text-white rounded-lg">Save Preferences</button>
      </div>
    </div>
  );
}
