const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.html') || file === 'package.json') {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

let files = walkSync(path.join(__dirname, 'src'));
files.push(path.join(__dirname, 'package.json'));

const htmlFiles = ['about.html', 'blogs.html', 'contact.html', 'faqs.html'];
htmlFiles.forEach(f => {
  if (fs.existsSync(path.join(__dirname, 'public', f))) {
    // If they are already in public, include them
    files.push(path.join(__dirname, 'public', f));
  } else if (fs.existsSync(path.join(__dirname, f))) {
    files.push(path.join(__dirname, f));
  }
});

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content
    .replace(/Instadocu/g, 'Installatie dosier')
    .replace(/instadocu/g, 'Installatie dosier')
    .replace(/Indadocu/g, 'Installatie dosier')
    .replace(/BouwLogboek/g, 'Installatie dosier');

  // If it's one of the 4 html files
  if (file.endsWith('.html')) {
    // Replace index.html with /
    newContent = newContent.replace(/href="index\.html"/g, 'href="/"');
    
    // Replace the logo in html files
    newContent = newContent.replace(/<div class="logo-box">[\s\S]*?<\/svg><\/div><span class="logo-word">.*?<span class="dot">\.<\/span><\/span>/g, 
      '<img src="/images/logo.png" alt="Installatie dosier" width="160" height="40" style="object-fit: contain;" />');
  }

  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    console.log('Updated', file);
  }
});

// Move the 4 files to public/
htmlFiles.forEach(f => {
  const src = path.join(__dirname, f);
  const dest = path.join(__dirname, 'public', f);
  if (fs.existsSync(src)) {
    fs.renameSync(src, dest);
    console.log(`Moved ${f} to public/`);
  }
});
