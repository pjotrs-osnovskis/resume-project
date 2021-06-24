function userInformationHTML(user) {
  return `
  <h2>${user.name}
    <span class="small-name">
      (@<a href="${user.html_url}" target="_blank">${user.login}</a>)
    </span>
  </h2>
  <div class="gh-content">
    <div class="gh-avatar">
      <a href="${user.html_url} ratget="_blank">
        <img src="${user.avatar_url} width="80" hright="80" alt="${user.login}" />
      </a>
      <p>Followers: ${user.followers} - Following: ${user.following} <br> Repos: ${user.public_repos}</p>
  </div>`
}


function fetchGitHubInformation(event) {
  var username = $("#gh-username").val();
  if (!username) {
    $("#gh-user-data").html(`<h3> Please enter a GitHub username</h3>`);
    return;
  }
  $("#gh-user-data").html(
    `<div id="loader" class="text-center">
      <img src="assets/images/loading.svg" alt="loading..." />
    </div>`);

    $.when(
      $.getJSON(`https://api.github.com/users/${username}`)
    ).then(
      function(response) {
        var userData = response;
        $("#gh-user-data").html(userInformationHTML(userData));
      }, function(errorResponse) {
          if (errorResponse.status === 404){
            $("#gh-user-data").html(`<h2>User "${username}" was not found</h2>`);
          } else {
            console.log(errorResponse);
            $("#gh-user-data").html(
              `<h2> Error: ${errorResponse.responseJSON.message}</h2>`);
          }
      });
}