
console.log(name); 

const btn = document.getElementById('theme-btn');

// On load — apply the saved theme
if (localStorage.getItem('theme') === 'dark') 
{
    document.body.classList.add('dark');
    btn.textContent = '☀️ Light Mode';
}

btn.addEventListener('click', function() 
{
    
  document.body.classList.toggle('dark');
  // Change button text based on the current theme
    if (document.body.classList.contains('dark')) 
        {
        btn.textContent = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
        } 
    else 
        {
        btn.textContent = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
        }
});
// added class, if it doesn't exist, and removes it if it does.