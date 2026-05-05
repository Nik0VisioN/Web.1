//-------------------------------------------------------------------------------------------
console.log(name); 
//-------------------------------------------------------------------------------------------
const profileIcon = 
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
</svg>`;
//-------------------------------------------------------------------------------------------



// Change title when user leaves the page and return it when they come back
//-------------------------------------------------------------------------------------------

const originalTitle = document.title;
document.addEventListener("visibilitychange", () => 
{
    document.title =  document.hidden ?
    'We miss you!' : originalTitle
});
//-----------------------------------------------------------------------------------



// Search input animation
//-----------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------



// Change theme with button and save preference in localStorage
//-------------------------------------------------------------------------------------------
const btn = document.getElementById('theme-btn');
// Save theme preference on page load
if (localStorage.getItem('theme') === 'dark') 
{
    document.documentElement.classList.add('dark');
    btn.textContent = '☀️ Light Mode';
}

btn.addEventListener('click', function() 
{
    
  document.documentElement.classList.toggle('dark');
  // Change button text (if dark mode is active, show light mode option, and return if we use light mode) and save preference
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



// Authentication Window
//-------------------------------------------------------------------------------------------
function openAuth() 
{
    document.getElementById('authorization-overlay').classList.add('active');
}

function closeAuth(e) 
{
    if (!e || e.target === document.getElementById('authorization-overlay')) 
        {
        document.getElementById('authorization-overlay').classList.remove('active');
        }
}


document.querySelector('.authorization-submit').addEventListener('click', function() 
{
    const login = document.querySelector('.authorization-overlay-window input[type="text"]').value;
    const password = document.querySelector('.authorization-overlay-window input[type="password"]').value;

    if (login === 'admin' && password === 'admin') 
        {
        closeAuth();
        // Change text - "Sign In" in button to text "Admin" with new icon
        localStorage.setItem('auth', 'admin');
        document.querySelector('.sign-in-button').innerHTML = `${profileIcon} Admin`;
        document.querySelector('.sign-in-button').onclick = openLogout;
        }
    else
        {
        // Shake animation on failed login
        document.querySelector('.authorization-overlay-window').style.animation = 'shake 0.3s ease';
        setTimeout(() => 
            {
            document.querySelector('.authorization-overlay-window').style.animation = '';
            }, 300);
        }
});

function openLogout() 
{
    document.getElementById('logout-overlay').classList.add('active');
}

function closeLogout(e) 
{
    if (!e || e.target === document.getElementById('logout-overlay')) 
        {
        document.getElementById('logout-overlay').classList.remove('active');
        }   
}

// Confirm logout
document.getElementById('logout-confirm').addEventListener('click', function() 
{
    closeLogout();
    // Return to Sign In button and remove auth from localStorage
    localStorage.removeItem('auth');
    document.querySelector('.sign-in-button').innerHTML = `${profileIcon} Sign In`;
    document.querySelector('.sign-in-button').onclick = openAuth;
});

// Close window auth on Escape key
document.addEventListener('keydown', function(e) 
{
    if (e.key === 'Escape') 
    {
        closeAuth();
        closeLogout();
    }
});
if (localStorage.getItem('auth') === 'admin') 
{
    document.querySelector('.sign-in-button').innerHTML = `${profileIcon} Admin`;
    document.querySelector('.sign-in-button').onclick = openLogout;
};
//-------------------------------------------------------------------------------------