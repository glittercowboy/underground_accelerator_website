import { useState } from 'react';
import { motion } from 'framer-motion';

export const EmbedCode = () => {
  const [copied, setCopied] = useState(false);
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(800);

  const embedCode = `<iframe 
  src="https://underground-accelerator.com/calculator" 
  width="${width}" 
  height="${height}" 
  frameborder="0" 
  style="border-radius: 12px; background: transparent;"
  allow="clipboard-write"
></iframe>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-dark-lighter p-8 rounded-xl border border-primary/20 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 gradient-text">Embed Calculator</h2>
      
      {/* Dimension Controls */}
      <div className="mb-6 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-off-white/80 mb-2">Width (px)</label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            className="w-full bg-dark border border-primary/20 rounded-lg px-4 py-2 text-off-white/90"
            min="300"
            max="1200"
          />
        </div>
        <div>
          <label className="block text-sm text-off-white/80 mb-2">Height (px)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="w-full bg-dark border border-primary/20 rounded-lg px-4 py-2 text-off-white/90"
            min="400"
            max="1200"
          />
        </div>
      </div>

      {/* Code Display */}
      <div className="relative">
        <pre className="bg-dark p-4 rounded-lg overflow-x-auto text-sm text-off-white/90 font-mono">
          {embedCode}
        </pre>
        
        {/* Copy Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={copyToClipboard}
          className="absolute top-2 right-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-lg text-sm transition-colors"
        >
          {copied ? 'Copied!' : 'Copy Code'}
        </motion.button>
      </div>

      {/* Preview */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4 text-off-white/90">Preview</h3>
        <div className="border border-primary/20 rounded-xl p-4 bg-dark">
          <iframe 
            src="/calculator" 
            width={width} 
            height={height} 
            frameBorder="0"
            style={{ borderRadius: '12px', background: 'transparent' }}
            allow="clipboard-write"
          />
        </div>
      </div>
    </div>
  );
};
