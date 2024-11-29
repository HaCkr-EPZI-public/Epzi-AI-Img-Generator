export function downloadWallpaper(url: string, prompt: string): void {
  const link = document.createElement('a');
  const filename = generateFilename(prompt);
  
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function generateFilename(prompt: string): string {
  const sanitizedPrompt = prompt
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .slice(0, 30);
    
  const timestamp = new Date().getTime();
  return `wallpaper-${sanitizedPrompt}-${timestamp}.jpg`;
}