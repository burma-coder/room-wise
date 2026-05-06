// Feedback form — Web3Forms
document.getElementById('feedbackForm').addEventListener('submit', async function(e){
  e.preventDefault();
  const btn = document.getElementById('feedbackBtn');
  const msg = document.getElementById('feedbackMsg').value.trim();
  if(!msg) return;

  btn.disabled = true;
  btn.textContent = 'Sending…';

  try {
    const formData = new FormData(this);
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });
    const data = await res.json();
    if(data.success){
      document.getElementById('feedbackForm').style.display = 'none';
      document.getElementById('feedbackSuccess').style.display = 'block';
    } else {
      alert('Something went wrong. Please try again.');
      btn.disabled = false;
      btn.textContent = 'Send Feedback →';
    }
  } catch(err){
    alert('Something went wrong. Please try again.');
    btn.disabled = false;
    btn.textContent = 'Send Feedback →';
  }
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));
