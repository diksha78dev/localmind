export default function StatusBar({ ollamaOk, model, docCount, onUpload, onPlugins, onSettings, onClear, useStream, onToggleStream }) {
  return (
    <header className="flex items-center justify-between px-5 py-2.5 border-b border-gray-800 bg-gray-900 shrink-0">
      <div className="flex items-center gap-3">
        <span className="text-xl">🧠</span>
        <span className="font-semibold text-white text-sm">LocalMind</span>
        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-900 text-purple-300">{model}</span>
        {ollamaOk === true  && <span className="text-xs px-2 py-0.5 rounded-full bg-green-900 text-green-300">● online</span>}
        {ollamaOk === false && <span className="text-xs px-2 py-0.5 rounded-full bg-red-900 text-red-300">● ollama offline</span>}
        {docCount > 0 && <span className="text-xs px-2 py-0.5 rounded-full bg-blue-900 text-blue-300">📄 {docCount} doc{docCount>1?"s":""}</span>}
      </div>
      <div className="flex items-center gap-1.5">
        <Btn onClick={onToggleStream} title={useStream ? "Streaming ON" : "Streaming OFF"}
          active={useStream} label={useStream ? "⚡ Stream" : "📦 Batch"} />
        <Btn onClick={onUpload}   label="📄 Docs"     />
        <Btn onClick={onPlugins}  label="🔌 Plugins"  />
        <Btn onClick={onClear}    label="🗑 Clear"    />
        <Btn onClick={onSettings} label="⚙️ Settings" />
      </div>
    </header>
  );
}

function Btn({ onClick, label, active, title }) {
  return (
    <button onClick={onClick} title={title}
      className={`text-xs px-3 py-1.5 rounded-lg border transition font-medium
        ${active ? "border-purple-500 text-purple-300 bg-purple-900/30" : "border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-gray-200"}`}>
      {label}
    </button>
  );
}
