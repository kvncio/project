document.addEventListener('DOMContentLoaded', function() {
    const memberList = document.getElementById('memberList');
    const members = Array.from(memberList.getElementsByTagName('li'));
  
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
   
    shuffle(members);
  
   
    memberList.innerHTML = '';
    members.forEach(function(member) {
      memberList.appendChild(member);
    });
  });