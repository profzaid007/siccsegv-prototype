$(document).on('scroll', function (e) {
    $('section').each(function () {
        if ($(this).offset().top < window.pageYOffset + 10 && $(this).offset().top +
            $(this).height() > window.pageYOffset + 10) { var data = this.id; window.location.hash = data; }
    });
}); (function () { $(document).ready(function () { $('[data-gh-project]').each(function () { var $proj = $(this); var repo = $proj.data('gh-project'); $.get('https://api.github.com/repos/' + repo).success(function (data) { $proj.find('.fork a').text(data.forks_count); $proj.find('.star a').text(data.stargazers_count); }); }); }); })();