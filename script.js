// সব বাটন এবং বডি সিলেক্ট করা হলো
const buttons = document.querySelectorAll('.liquid-btn');
const body = document.body;

buttons.forEach(button => {
  // মোবাইলের ট্যাপ এবং ডেস্কটপের ক্লিক—উভয় ক্ষেত্রেই এটি কাজ করবে
  button.addEventListener('click', function() {
    
    // যদি অলরেডি অ্যাক্টিভ বাটনে আবার ট্যাপ করা হয়, তবে অ্যানিমেশন রি-স্টার্ট হবে না
    if(this.classList.contains('active')) return;

    // ১. আগের বাটন থেকে 'active' ক্লাস সরিয়ে লিকুইড কালারটি ভ্যানিশ করা
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // ২. কারেন্ট ট্যাপ করা বাটনে 'active' ক্লাস যোগ করা (এতেই সিএসএস-এর ব্লু, রেড বা অরেঞ্জ লিকুইড ছড়িয়ে পড়বে)
    this.classList.add('active');
    
    // ৩. ৩ নম্বর পিকচারের মতো ব্যাকগ্রাউন্ড থিম ডাইনামিকালি চেঞ্জ করা
    const theme = this.getAttribute('data-theme');
    if (theme === 'dark') {
      body.classList.add('dark-mode'); // DND চাপলে ব্যাকগ্রাউন্ড ডার্ক হবে
    } else {
      body.classList.remove('dark-mode'); // অন্যগুলো চাপলে আবার লাইট গ্রে হবে
    }
    
  });
});
