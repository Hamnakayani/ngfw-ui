// NGFW UI — theme-clock.js
// Include once per page, after the header markup exists in the DOM.
// Expects: #themeToggle, #themeIcon, #themeLabel, #liveTime in the page.

(function () {
    var themeToggle = document.getElementById('themeToggle');
    var themeIcon = document.getElementById('themeIcon');
    var themeLabel = document.getElementById('themeLabel');
    var liveTime = document.getElementById('liveTime');

    function updateClock() {
        var now = new Date();
        var timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        if (liveTime) liveTime.textContent = timeString;
    }

    function applyTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        var isDark = theme === 'dark';
        if (themeIcon) themeIcon.textContent = isDark ? '☀️' : '🌙';
        if (themeLabel) themeLabel.textContent = isDark ? 'Light' : 'Dark';
        localStorage.setItem('ngfw-theme', theme);
    }

    var savedTheme = localStorage.getItem('ngfw-theme') || 'light';
    applyTheme(savedTheme);
    updateClock();
    setInterval(updateClock, 1000);

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            var nextTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(nextTheme);
        });
    }
})();
