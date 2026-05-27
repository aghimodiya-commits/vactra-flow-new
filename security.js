// --- VACTRA FLOW SECURITY SYSTEM ---

// 1. Right Click disable karein
document.addEventListener('contextmenu', event => event.preventDefault());

// 2. Keyboard shortcuts disable karein (F12, Ctrl+Shift+I, Ctrl+U)
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 123 || 
     (e.ctrlKey && e.shiftKey && e.keyCode == 73) || 
     (e.ctrlKey && e.keyCode == 85)) {
     e.preventDefault();
     return false;
  }
});

// 3. Console logs ko clear rakhein
console.clear();
console.log("%c Vactra Flow Security Active", "color: red; font-size: 20px; font-weight: bold;");
