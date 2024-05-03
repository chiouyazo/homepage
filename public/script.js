window.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('.section');
    var currentSectionIndex = 0;

    window.addEventListener('wheel', function(event) {
      var delta = Math.sign(event.deltaY);
      var nextSectionIndex = currentSectionIndex + delta;

      if (nextSectionIndex >= 0 && nextSectionIndex < sections.length) {
        var nextSection = sections[nextSectionIndex];
        nextSection.scrollIntoView({ behavior: 'smooth' });
        currentSectionIndex = nextSectionIndex;
      }
    });
  });