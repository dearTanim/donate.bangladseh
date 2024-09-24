// Modal
document.getElementById('close-modal-btn').addEventListener('click', function(){
    document.getElementById('donation-modal').classList.add('hidden')
 });
 
// Blog Button
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'blog.html', '_blank';
 });
 
//  Donation button
 document.getElementById('donation-btn').addEventListener('click', function(){
    document.getElementById('donation-content').classList.remove('hidden');
    document.getElementById('history-btn').classList.remove('bg-color');
    document.getElementById('donation-btn').classList.add('bg-color');
    document.getElementById('history').classList.add('hidden');
 
 });
 
//  history button
 document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('donation-content').classList.add('hidden');
    document.getElementById('donation-btn').classList.remove('bg-color');
    document.getElementById('history-btn').classList.add('bg-color');
    document.getElementById('history').classList.remove('hidden');

 });
 