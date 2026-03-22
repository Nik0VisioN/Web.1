//-------------------------------------------------------------------------------------------
console.log(name); 
//-------------------------------------------------------------------------------------------
const profileIcon = 
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
</svg>`;


// Theme Toggle with Persistence
//-------------------------------------------------------------------------------------------
const btn = document.getElementById('theme-btn');
// On load — apply the saved theme
if (localStorage.getItem('theme') === 'dark') 
{
    document.documentElement.classList.add('dark');
    btn.textContent = '☀️ Light Mode';
}

btn.addEventListener('click', function() 
{
    
  document.documentElement.classList.toggle('dark');
  // Change button text based on the current theme
    if (document.documentElement.classList.contains('dark')) 
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
//-------------------------------------------------------------------------------------------



// Authentication Modal
//-------------------------------------------------------------------------------------------
function openAuth() 
{
    document.getElementById('auth-overlay').classList.add('active');
}

function closeAuth(e) 
{
    if (!e || e.target === document.getElementById('auth-overlay')) 
        {
        document.getElementById('auth-overlay').classList.remove('active');
        }
}


document.querySelector('.auth-submit').addEventListener('click', function() 
{
    const login = document.querySelector('.auth-modal input[type="text"]').value;
    const password = document.querySelector('.auth-modal input[type="password"]').value;

    if (login === 'admin' && password === 'admin') 
        {
        closeAuth();
        // Change Sign In button to Admin with icon
        document.querySelector('.sign-in-btn').innerHTML = `${profileIcon} Admin`;
        document.querySelector('.sign-in-btn').onclick = openLogout;
    } else {
        // Shake animation on failed login
        document.querySelector('.auth-modal').style.animation = 'shake 0.3s ease';
        setTimeout(() => {
            document.querySelector('.auth-modal').style.animation = '';
        }, 300);
    }
});

function openLogout() 
{
    document.getElementById('logout-overlay').classList.add('active');
}

function closeLogout(e) 
{
    if (!e || e.target === document.getElementById('logout-overlay')) {
        document.getElementById('logout-overlay').classList.remove('active');
    }
}

// Confirm logout
document.getElementById('logout-confirm').addEventListener('click', function() 
{
    closeLogout();

    // Return Key Sign In
    document.querySelector('.sign-in-btn').innerHTML = `${profileIcon} Sign In`;
    document.querySelector('.sign-in-btn').onclick = openAuth;
});

// Close modals on Escape key
document.addEventListener('keydown', function(e) 
{
    if (e.key === 'Escape') 
    {
        closeAuth();
        closeLogout();
    }
});
//-------------------------------------------------------------------------------------